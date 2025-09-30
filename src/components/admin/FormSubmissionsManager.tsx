import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trash2, Phone, Mail, Calendar, MapPin } from 'lucide-react'
import { formService, type FormSubmission } from '@/services/formService'

export function FormSubmissionsManager() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'Others' | 'NATALIA' | 'ANNA'>('Others')

  useEffect(() => {
    loadSubmissions()
  }, [])

  const loadSubmissions = async () => {
    console.log('FormSubmissionsManager: Starting to load submissions...');
    setLoading(true)
    try {
      console.log('FormSubmissionsManager: Calling formService.getAllSubmissions()...');
      const data = await formService.getAllSubmissions()
      console.log('FormSubmissionsManager: Received data:', data);
      setSubmissions(data)
      console.log('FormSubmissionsManager: State set complete');
    } catch (error) {
      console.error('FormSubmissionsManager: Error loading submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm('Möchten Sie diese Anfrage wirklich löschen?')) {
      return
    }

    try {
      await formService.deleteSubmission(id)
      setSubmissions(prev => prev.filter(s => s.id !== id))
    } catch (error) {
      console.error('Error deleting submission:', error)
      alert('Fehler beim Löschen der Anfrage')
    }
  }

  const getSubmissionsByOwner = (owner: FormSubmission['owner']) => {
    return submissions.filter(s => s.owner === owner)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getPageLabel = (page: string) => {
    switch (page) {
      case 'deka-day':
        return 'DEKA Day'
      case 'kopie-deka-day-anna':
        return 'DEKA Day Anna'
      case 'deka':
        return 'DEKA'
      case 'about':
        return 'Über uns'
      case 'home':
        return 'Hauptseite'
      case 'services':
        return 'Services'
      case 'preis':
        return 'Preise'
      case 'laser-haarentfernung-muenchen':
        return 'Laser Haarentfernung'
      case 'icoone-laser':
        return 'Icoone Laser'
      case 'manikuere-pedikuere':
        return 'Maniküre & Pediküre'
      default:
        // Capitalize first letter and replace dashes with spaces
        return page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }
  }

  const SubmissionsList = ({ owner }: { owner: FormSubmission['owner'] }) => {
    const ownerSubmissions = getSubmissionsByOwner(owner)

    if (ownerSubmissions.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Keine Anfragen vorhanden
        </div>
      )
    }

    // Group submissions by page
    const submissionsByPage = ownerSubmissions.reduce((acc, submission) => {
      const page = submission.page
      if (!acc[page]) {
        acc[page] = []
      }
      acc[page].push(submission)
      return acc
    }, {} as Record<string, FormSubmission[]>)

    return (
      <div className="space-y-6">
        {Object.entries(submissionsByPage).map(([page, pageSubmissions]) => (
          <div key={page} className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b">
              <h3 className="font-semibold text-gray-700">{getPageLabel(page)}</h3>
              <Badge variant="secondary">{pageSubmissions.length}</Badge>
            </div>
            <div className="space-y-3 ml-4">
              {pageSubmissions.map((submission) => (
                <Card key={submission.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{submission.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSubmission(submission.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(submission.created_at)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a
                          href={`tel:${submission.phone}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {submission.phone}
                        </a>
                      </div>

                      {submission.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a
                            href={`mailto:${submission.email}`}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            {submission.email}
                          </a>
                        </div>
                      )}

                      {submission.message && (
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">Nachricht:</div>
                          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                            {submission.message}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Управление заявками</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Lade Anfragen...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Управление заявками
          <Button
            variant="outline"
            size="sm"
            onClick={loadSubmissions}
          >
            Aktualisieren
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Others" className="relative">
              Others
              {getSubmissionsByOwner('Others').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Others').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="NATALIA" className="relative">
              NATALIA
              {getSubmissionsByOwner('NATALIA').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('NATALIA').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="ANNA" className="relative">
              ANNA
              {getSubmissionsByOwner('ANNA').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('ANNA').length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Others" className="mt-4">
            <SubmissionsList owner="Others" />
          </TabsContent>

          <TabsContent value="NATALIA" className="mt-4">
            <SubmissionsList owner="NATALIA" />
          </TabsContent>

          <TabsContent value="ANNA" className="mt-4">
            <SubmissionsList owner="ANNA" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}