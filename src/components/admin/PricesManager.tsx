import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
import { pricesService } from '@/services/contentService'
import type { ServicePrice } from '@/types/admin'

const CATEGORIES = [
  { value: 'alexandrit', label: 'Alexandrit Laser' },
  { value: 'dioden', label: 'Dioden Laser' },
  { value: 'icoone', label: 'Icoone Laser' },
  { value: 'manicure', label: 'Maniküre' },
  { value: 'pedicure', label: 'Pediküre' }
] as const

interface PriceFormData {
  service: string
  service_ru: string
  price: string
  category: ServicePrice['category']
  note: string
  note_ru: string
}

export function PricesManager() {
  const [prices, setPrices] = useState<ServicePrice[]>([])
  const [loading, setLoading] = useState(true)
  const [editingPrice, setEditingPrice] = useState<ServicePrice | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<PriceFormData>({
    service: '',
    service_ru: '',
    price: '',
    category: 'alexandrit',
    note: '',
    note_ru: ''
  })

  useEffect(() => {
    loadPrices()
  }, [])

  const loadPrices = async () => {
    setLoading(true)
    try {
      const data = await pricesService.getAll()
      setPrices(data)
    } catch (error) {
      console.error('Error loading prices:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingPrice) {
        // Update existing price
        const updated = await pricesService.update(editingPrice.id, formData)
        if (updated) {
          setPrices(prev => prev.map(p => p.id === editingPrice.id ? updated : p))
        }
      } else {
        // Create new price
        const newPrice = await pricesService.create(formData)
        if (newPrice) {
          setPrices(prev => [...prev, newPrice])
        }
      }

      // Reset form
      setFormData({ service: '', service_ru: '', price: '', category: 'alexandrit', note: '', note_ru: '' })
      setEditingPrice(null)
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Error saving price:', error)
      alert('Fehler beim Speichern des Preises')
    }
  }

  const handleEdit = (price: ServicePrice) => {
    setEditingPrice(price)
    setFormData({
      service: price.service,
      service_ru: price.service_ru || '',
      price: price.price,
      category: price.category,
      note: price.note || '',
      note_ru: price.note_ru || ''
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Möchten Sie diesen Preis wirklich löschen?')) {
      return
    }

    try {
      await pricesService.delete(id)
      setPrices(prev => prev.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting price:', error)
      alert('Fehler beim Löschen des Preises')
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setEditingPrice(null)
    setFormData({ service: '', service_ru: '', price: '', category: 'alexandrit', note: '', note_ru: '' })
  }

  const getCategoryLabel = (category: string) => {
    return CATEGORIES.find(c => c.value === category)?.label || category
  }

  const groupedPrices = CATEGORIES.map(category => ({
    ...category,
    prices: prices.filter(p => p.category === category.value)
  }))

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Preise verwalten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Lade Preise...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Preise verwalten
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={loadPrices}>
              Aktualisieren
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Preis hinzufügen
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingPrice ? 'Preis bearbeiten' : 'Neuen Preis hinzufügen'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="category">Kategorie</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value: ServicePrice['category']) =>
                        setFormData(prev => ({ ...prev, category: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Dienstleistung (DE)</Label>
                      <Input
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        placeholder="z.B. Oberlippe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="service_ru">Услуга (RU)</Label>
                      <Input
                        id="service_ru"
                        value={formData.service_ru}
                        onChange={(e) => setFormData(prev => ({ ...prev, service_ru: e.target.value }))}
                        placeholder="напр. Верхняя губа"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="price">Preis</Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="z.B. 35€"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="note">Notiz (DE, optional)</Label>
                      <Textarea
                        id="note"
                        value={formData.note}
                        onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
                        placeholder="z.B. (pro Sitzung)"
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="note_ru">Примечание (RU, optional)</Label>
                      <Textarea
                        id="note_ru"
                        value={formData.note_ru}
                        onChange={(e) => setFormData(prev => ({ ...prev, note_ru: e.target.value }))}
                        placeholder="напр. (за сеанс)"
                        rows={2}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button type="submit">
                      <Save className="w-4 h-4 mr-2" />
                      Speichern
                    </Button>
                    <Button type="button" variant="outline" onClick={handleDialogClose}>
                      <X className="w-4 h-4 mr-2" />
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {groupedPrices.map((category) => (
            <div key={category.value}>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                {category.label}
                <Badge variant="secondary">{category.prices.length}</Badge>
              </h3>

              {category.prices.length === 0 ? (
                <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-lg">
                  Keine Preise in dieser Kategorie
                </div>
              ) : (
                <div className="grid gap-2">
                  {category.prices.map((price) => (
                    <div
                      key={price.id}
                      className="flex items-center justify-between p-3 bg-white border rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex-1">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="font-medium">{price.service}</div>
                            {price.note && (
                              <div className="text-sm text-gray-600">{price.note}</div>
                            )}
                          </div>
                          <div className="text-gray-700">
                            <div className="font-medium">{price.service_ru || '—'}</div>
                            {price.note_ru && (
                              <div className="text-sm text-gray-600">{price.note_ru}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="font-semibold text-primary">{price.price}€</div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(price)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(price.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}