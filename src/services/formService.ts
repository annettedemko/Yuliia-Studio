import { supabase } from '@/lib/supabase'

export interface FormSubmission {
  id: string
  name: string
  phone: string
  email?: string | null
  message?: string | null
  page: string
  owner: 'Others' | 'NATALIA' | 'ANNA'
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
  if (page.includes('anna')) {
    return 'ANNA'
  }
  if (page.includes('natalia') || page === 'deka-day') {
    return 'NATALIA'
  }
  return 'Others'
}

export const formService = {
  async submitForm(submission: FormSubmissionCreate): Promise<FormSubmission | null> {
    const owner = getOwnerFromPage(submission.page)

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

    if (error) {
      console.error('Error submitting form:', error)
      return null
    }

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
      return { Others: 0, NATALIA: 0, ANNA: 0 }
    }

    const counts = { Others: 0, NATALIA: 0, ANNA: 0 }
    data.forEach(item => {
      counts[item.owner as FormSubmission['owner']]++
    })

    return counts
  }
}