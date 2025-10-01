import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trash2, Phone, Mail, Calendar, MapPin } from 'lucide-react'
import { formService, type FormSubmission } from '@/services/formService'
import { eventsService } from '@/services/contentService'

export function FormSubmissionsManager() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'Yulia' | 'Natalia' | 'Anna' | 'Lera' | 'Liudmila'>('Yulia')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    console.log('FormSubmissionsManager: Starting to load data...');
    setLoading(true)
    try {
      const [submissionsData, eventsData] = await Promise.all([
        formService.getAllSubmissions(),
        eventsService.getAll()
      ])

      console.log('FormSubmissionsManager: Received submissions:', submissionsData.length);
      console.log('FormSubmissionsManager: Received events:', eventsData.length);

      setSubmissions(submissionsData)
      setEvents(eventsData)
    } catch (error) {
      console.error('FormSubmissionsManager: Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Helper function to get event info from message
  const getEventInfo = (message: string | null) => {
    if (!message || !message.includes('Veranstaltung:')) return null

    // Parse new format: "Veranstaltung: DEKA Beauty Day am 2025-10-05 um 18:00"
    const match = message.match(/Veranstaltung:\s*(.+)\s+am\s+(\d{4}-\d{2}-\d{2})\s+um\s+(.+)/)
    if (match) {
      const [, title, date, time] = match
      return {
        title: title.trim(),
        date: date.trim(),
        time: time.trim()
      }
    }

    // Fallback to old format - try to find event by ID
    const eventId = message.replace('Veranstaltung: ', '').trim()
    const event = events.find(e => e.id === eventId)
    if (event) {
      return {
        title: event.title,
        date: event.date,
        time: event.time
      }
    }

    return null
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm('Вы действительно хотите удалить эту заявку?')) {
      return
    }

    try {
      await formService.deleteSubmission(id)
      setSubmissions(prev => prev.filter(s => s.id !== id))
    } catch (error) {
      console.error('Error deleting submission:', error)
      alert('Ошибка при удалении заявки')
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
      case 'deka-anna':
        return 'DEKA Anna'
      case 'deka-lera':
        return 'DEKA Lera'
      case 'deka-liudmila':
        return 'DEKA Liudmila'
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
          Нет заявок
        </div>
      )
    }

    // Helper function to get event date for sorting
    const getEventDate = (submission: FormSubmission) => {
      const eventInfo = getEventInfo(submission.message)
      if (eventInfo && eventInfo.date) {
        return new Date(eventInfo.date)
      }
      return new Date(submission.created_at) // fallback to submission date
    }

    // Group submissions by event date first, then by page
    const submissionsByEventDate = ownerSubmissions.reduce((acc, submission) => {
      const eventInfo = getEventInfo(submission.message)
      let groupKey: string

      if (eventInfo && eventInfo.date) {
        // Format: "2025-10-05: DEKA Beauty Day (18:00)"
        groupKey = `${eventInfo.date}: ${eventInfo.title} (${eventInfo.time})`
      } else {
        // For submissions without event info, group by submission date
        const submissionDate = new Date(submission.created_at).toLocaleDateString('de-DE')
        groupKey = `${submissionDate}: Общие заявки`
      }

      if (!acc[groupKey]) {
        acc[groupKey] = []
      }
      acc[groupKey].push(submission)
      return acc
    }, {} as Record<string, FormSubmission[]>)

    // Sort each group by submission time and sort groups by date
    const sortedGroups = Object.entries(submissionsByEventDate)
      .sort(([keyA], [keyB]) => {
        // Extract dates from keys for sorting
        const dateA = keyA.split(':')[0]
        const dateB = keyB.split(':')[0]
        return new Date(dateA).getTime() - new Date(dateB).getTime()
      })
      .map(([groupKey, submissions]) => [
        groupKey,
        submissions.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      ])

    return (
      <div className="space-y-6">
        {sortedGroups.map(([eventGroup, groupSubmissions]) => (
          <div key={eventGroup} className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-blue-200 bg-blue-50 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">{eventGroup}</h3>
              <Badge variant="default" className="bg-blue-600">{groupSubmissions.length}</Badge>
            </div>
            <div className="space-y-3 ml-4">
              {groupSubmissions.map((submission) => (
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
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(submission.created_at)}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {getPageLabel(submission.page)}
                      </Badge>
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
                          {(() => {
                            const eventInfo = getEventInfo(submission.message)
                            if (eventInfo) {
                              return (
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-1">Выбранное мероприятие:</div>
                                  <div className="text-sm bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                    <div className="flex items-center gap-2 font-medium text-blue-900">
                                      <Calendar className="w-4 h-4" />
                                      {eventInfo.title}
                                    </div>
                                    <div className="text-blue-700 mt-1">
                                      {eventInfo.date} • {eventInfo.time}
                                    </div>
                                  </div>
                                </div>
                              )
                            } else {
                              return (
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-1">Сообщение:</div>
                                  <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                    {submission.message}
                                  </div>
                                </div>
                              )
                            }
                          })()}
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
          <div className="text-center py-8">Загрузка заявок...</div>
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
            onClick={loadData}
          >
            Обновить
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="Yulia" className="relative">
              Юлия
              {getSubmissionsByOwner('Yulia').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Yulia').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="Natalia" className="relative">
              Наталья
              {getSubmissionsByOwner('Natalia').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Natalia').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="Anna" className="relative">
              Анна
              {getSubmissionsByOwner('Anna').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Anna').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="Lera" className="relative">
              Лера
              {getSubmissionsByOwner('Lera').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Lera').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="Liudmila" className="relative">
              Людмила
              {getSubmissionsByOwner('Liudmila').length > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {getSubmissionsByOwner('Liudmila').length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Yulia" className="mt-4">
            <SubmissionsList owner="Yulia" />
          </TabsContent>

          <TabsContent value="Natalia" className="mt-4">
            <SubmissionsList owner="Natalia" />
          </TabsContent>

          <TabsContent value="Anna" className="mt-4">
            <SubmissionsList owner="Anna" />
          </TabsContent>

          <TabsContent value="Lera" className="mt-4">
            <SubmissionsList owner="Lera" />
          </TabsContent>

          <TabsContent value="Liudmila" className="mt-4">
            <SubmissionsList owner="Liudmila" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}