import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LogOut, Settings, DollarSign, MessageSquare } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { LoginForm } from '@/components/admin/LoginForm'
import { PricesManager } from '@/components/admin/PricesManager'
import { FormSubmissionsManager } from '@/components/admin/FormSubmissionsManager'

export function Admin() {
  const { user, loading, signOut, isAdmin } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Lade...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-red-600">
              Zugriff verweigert
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Sie haben keine Berechtigung für den Admin-Bereich.
            </p>
            <Button onClick={signOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Abmelden
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin-Bereich</h1>
            <p className="text-gray-600 mt-1">
              Willkommen, {user.full_name || user.email}
            </p>
          </div>
          <Button onClick={signOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Abmelden
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="submissions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="submissions" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Anfragen
            </TabsTrigger>
            <TabsTrigger value="prices" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Preise
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Einstellungen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <FormSubmissionsManager />
          </TabsContent>

          <TabsContent value="prices">
            <PricesManager />
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Einstellungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benutzer-Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700">E-Mail</div>
                          <div className="text-gray-900">{user.email}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Rolle</div>
                          <div className="text-gray-900">{user.role}</div>
                        </div>
                        {user.full_name && (
                          <div>
                            <div className="text-sm font-medium text-gray-700">Name</div>
                            <div className="text-gray-900">{user.full_name}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-700">Benutzer-ID</div>
                          <div className="text-gray-900 font-mono text-sm">{user.id}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">System-Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">
                        <p>• Supabase-Integration aktiv</p>
                        <p>• Formular-Erfassung läuft</p>
                        <p>• Preis-Management verfügbar</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      onClick={signOut}
                      variant="destructive"
                      className="w-full sm:w-auto"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Aus Admin-Bereich abmelden
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}