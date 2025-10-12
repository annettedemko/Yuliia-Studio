const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

// Helper to get auth token - always use ANON_KEY for REST API
const getAuthToken = (): string => {
  // ANON KEY is correct - RLS policies handle authorization
  return SUPABASE_ANON_KEY;
};

export interface FormSubmission {
  id: string
  name: string
  phone: string
  email?: string | null
  message?: string | null
  page: string
  owner: 'Yulia' | 'Natalia' | 'Anna' | 'Lera' | 'Liudmila'
  created_at: string
}

export interface FormSubmissionCreate {
  name: string
  phone: string
  email?: string
  message?: string
  page: string
}

// Mapping pages to owners - dynamic function
const getOwnerFromPage = (page: string): FormSubmission['owner'] => {
  if (page.includes('anna') || page === 'deka-anna') {
    return 'Anna'
  }
  if (page.includes('natalia') || page === 'deka-day') {
    return 'Natalia'
  }
  if (page.includes('lera') || page === 'deka-lera') {
    return 'Lera'
  }
  if (page.includes('liudmila') || page === 'deka-liudmila') {
    return 'Liudmila'
  }
  // Default for 'deka' and other pages goes to Yulia
  return 'Yulia'
}

export const formService = {
  async submitForm(submission: FormSubmissionCreate): Promise<FormSubmission | null> {
    const owner = getOwnerFromPage(submission.page)

    console.log('🟡 FormService: Попытка отправки формы:', {
      name: submission.name,
      phone: submission.phone,
      email: submission.email,
      page: submission.page,
      owner: owner
    });

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: submission.name,
          phone: submission.phone,
          email: submission.email || null,
          message: submission.message || null,
          page: submission.page,
          owner: owner
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('🔴 FormService: Ошибка отправки формы:', error)
        return null
      }

      const data = await response.json();
      console.log('🟢 FormService: Форма отправлена успешно:', data);
      return data[0] as FormSubmission
    } catch (error) {
      console.error('🔴 FormService: Exception:', error)
      return null
    }
  },

  async getAllSubmissions(): Promise<FormSubmission[]> {
    console.log('formService.getAllSubmissions: Starting to fetch submissions...');
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions?select=*&order=created_at.desc`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`formService.getAllSubmissions: REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching form submissions:', error);
        return [];
      }

      const data = await response.json();
      console.log('formService.getAllSubmissions: Received', data.length, 'submissions');
      return data as FormSubmission[];
    } catch (error) {
      console.error('formService.getAllSubmissions: Exception:', error);
      return [];
    }
  },

  async getSubmissionsByOwner(owner: FormSubmission['owner']): Promise<FormSubmission[]> {
    console.log(`formService.getSubmissionsByOwner: Fetching for ${owner}...`);
    const startTime = Date.now();

    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions?owner=eq.${owner}&order=created_at.desc&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const elapsed = Date.now() - startTime;
      console.log(`formService.getSubmissionsByOwner (${owner}): REST API ответил за ${elapsed}ms`);

      if (!response.ok) {
        const error = await response.json();
        console.error(`Error fetching form submissions for ${owner}:`, error);
        return [];
      }

      const data = await response.json();
      console.log(`formService.getSubmissionsByOwner (${owner}): Received`, data.length, 'submissions');
      return data as FormSubmission[];
    } catch (error) {
      console.error(`formService.getSubmissionsByOwner (${owner}): Exception:`, error);
      return [];
    }
  },

  async deleteSubmission(id: string): Promise<boolean> {
    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error deleting form submission:', error)
        return false
      }

      return true
    } catch (error) {
      console.error('Error deleting form submission:', error)
      return false
    }
  },

  async getSubmissionsCount(): Promise<Record<FormSubmission['owner'], number>> {
    try {
      const token = getAuthToken();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions?select=owner`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error fetching submissions count:', error)
        return { Yulia: 0, Natalia: 0, Anna: 0, Lera: 0, Liudmila: 0 }
      }

      const data = await response.json();
      const counts = { Yulia: 0, Natalia: 0, Anna: 0, Lera: 0, Liudmila: 0 }
      data.forEach((item: { owner: FormSubmission['owner'] }) => {
        const owner = item.owner
        if (owner in counts) {
          counts[owner]++
        }
      })

      return counts
    } catch (error) {
      console.error('Error fetching submissions count:', error)
      return { Yulia: 0, Natalia: 0, Anna: 0, Lera: 0, Liudmila: 0 }
    }
  }
}