import { supabase } from '@/lib/supabase'

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

    const { data, error } = await supabase
      .from('form_submissions')
      .insert({
        name: submission.name,
        phone: submission.phone,
        email: submission.email || null,
        message: submission.message || null,
        page: submission.page,
        owner: owner
      })
      .select()
      .single()

    console.log('🟡 FormService: Ответ от Supabase:', { data, error });

    if (error) {
      console.error('🔴 FormService: Ошибка отправки формы:', error)
      return null
    }

    console.log('🟢 FormService: Форма отправлена успешно:', data);
    return data as FormSubmission
  },

  async getAllSubmissions(): Promise<FormSubmission[]> {
    console.log('formService.getAllSubmissions: Starting to fetch submissions...');

    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('formService.getAllSubmissions: Supabase response:', { data, error });

    if (error) {
      console.error('Error fetching form submissions:', error)
      return []
    }

    return data as FormSubmission[]
  },

  async getSubmissionsByOwner(owner: FormSubmission['owner']): Promise<FormSubmission[]> {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('owner', owner)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching form submissions by owner:', error)
      return []
    }

    return data as FormSubmission[]
  },

  async deleteSubmission(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('form_submissions')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting form submission:', error)
      return false
    }

    return true
  },

  async getSubmissionsCount(): Promise<Record<FormSubmission['owner'], number>> {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('owner')

    if (error) {
      console.error('Error fetching submissions count:', error)
      return { Yulia: 0, Natalia: 0, Anna: 0, Lera: 0, Liudmila: 0 }
    }

    const counts = { Yulia: 0, Natalia: 0, Anna: 0, Lera: 0, Liudmila: 0 }
    data.forEach(item => {
      const owner = item.owner as FormSubmission['owner']
      if (owner in counts) {
        counts[owner]++
      }
    })

    return counts
  }
}