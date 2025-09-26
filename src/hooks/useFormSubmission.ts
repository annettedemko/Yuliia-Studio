import { useState } from 'react'
import { formService, type FormSubmissionCreate } from '@/services/formService'

interface UseFormSubmissionOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

interface FormData {
  vorname: string
  name: string
  email: string
  telefon: string
  selectedEvent?: string
  [key: string]: any
}

export function useFormSubmission(page: FormSubmissionCreate['page'], options: UseFormSubmissionOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const submitForm = async (formData: FormData) => {
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      // Prepare submission data
      const submission: FormSubmissionCreate = {
        name: `${formData.vorname} ${formData.name}`.trim(),
        phone: formData.telefon,
        email: formData.email || undefined,
        message: formData.selectedEvent ? `Veranstaltung: ${formData.selectedEvent}` : undefined,
        page
      }

      const result = await formService.submitForm(submission)

      if (result) {
        setSubmitSuccess(true)
        options.onSuccess?.()

        // Clear form success state after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler beim Senden der Anfrage'
      setSubmitError(errorMessage)
      options.onError?.(error instanceof Error ? error : new Error(errorMessage))
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetStatus = () => {
    setSubmitSuccess(false)
    setSubmitError(null)
  }

  return {
    submitForm,
    isSubmitting,
    submitSuccess,
    submitError,
    resetStatus
  }
}