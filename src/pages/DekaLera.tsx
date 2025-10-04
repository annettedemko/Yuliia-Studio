import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, TrendingUp, Shield, Users, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { eventsService } from '@/services/contentService';
import { useLanguage } from '@/contexts/LanguageContext';

const DekaLera = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    telefon: '',
    selectedEvent: ''
  });

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const { submitForm, isSubmitting, submitSuccess, submitError } = useFormSubmission('deka-lera');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await eventsService.getUpcoming();
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Error loading events:', error);
        setUpcomingEvents([]);
      }
    };

    loadEvents();
  }, []);

  // Fallback events data if Supabase is not available
  const fallbackEvents = [
    {
      id: '1',
      title: 'DEKA Beauty Day - Лера',
      date: '2025-10-08',
      time: '16:00',
      location: 'Yuliia Cheporska Studio',
      address: 'Elsässer Straße 33, 81667 München',
      description: 'Персональные консультации и демонстрации технологий DEKA от Леры'
    },
    {
      id: '2',
      title: 'DEKA Advanced Workshop - Лера',
      date: '2025-10-18',
      time: '15:00',
      location: 'Yuliia Cheporska Studio',
      address: 'Elsässer Straße 33, 81667 München',
      description: 'Продвинутый семинар по работе с новейшими устройствами DEKA'
    }
  ];

  const eventsToShow = upcomingEvents.length > 0 ? upcomingEvents : fallbackEvents;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventDetails = eventsToShow.find(event => event.id === formData.selectedEvent);
    const eventInfo = eventDetails ? `Veranstaltung: ${eventDetails.title} am ${eventDetails.date} um ${eventDetails.time}` : '';

    const submissionData = {
      name: `${formData.vorname} ${formData.name}`.trim(),
      email: formData.email,
      phone: formData.telefon,
      message: eventInfo,
      page: 'deka-lera',
      owner: 'Lera'
    };

    await submitForm(submissionData);

    if (!submitError) {
      setFormData({
        vorname: '',
        name: '',
        email: '',
        telefon: '',
        selectedEvent: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/10 to-background">
      {/* Header */}
      <header className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
                ← Zurück zur Hauptseite
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              DEKA Beauty Events - Лера
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Эксклюзивные мероприятия от Леры по косметологии и современным технологиям красоты
            </p>
          </div>
        </div>
      </header>

      {/* Success/Error Messages */}
      {submitSuccess && (
        <div className="container mx-auto px-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
            <span className="text-green-800">
              Vielen Dank! Ihre Anmeldung wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden.
            </span>
          </div>
        </div>
      )}

      {submitError && (
        <div className="container mx-auto px-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
            <span className="text-red-800">
              Es gab einen Fehler beim Senden Ihrer Anmeldung. Bitte versuchen Sie es erneut.
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Events List */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  Kommende Veranstaltungen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {eventsToShow.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-lg text-primary mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date} um {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Warum Sie teilnehmen sollten:</h2>

              <div className="grid gap-4">
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-rose-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Экспертные знания от Леры</h3>
                    <p className="text-muted-foreground text-sm">Получите персональные консультации и профессиональные советы от опытного специалиста</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-rose-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Innovative Techniken</h3>
                    <p className="text-muted-foreground text-sm">Lernen Sie die neuesten und effektivsten Behandlungsmethoden kennen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-rose-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Профессиональный подход</h3>
                    <p className="text-muted-foreground text-sm">Все процедуры проводятся с соблюдением высочайших стандартов качества и безопасности</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-rose-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Индивидуальный подход</h3>
                    <p className="text-muted-foreground text-sm">Персональные консультации и рекомендации для каждого участника</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:sticky lg:top-24">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Jetzt anmelden
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Sichern Sie sich Ihren Platz bei unseren exklusiven Events von Лера
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vorname">Vorname *</Label>
                      <Input
                        id="vorname"
                        value={formData.vorname}
                        onChange={(e) => handleInputChange('vorname', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="name">Nachname *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefon">Telefonnummer *</Label>
                    <Input
                      id="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={(e) => handleInputChange('telefon', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="event">Veranstaltung auswählen *</Label>
                    <select
                      id="event"
                      value={formData.selectedEvent}
                      onChange={(e) => handleInputChange('selectedEvent', e.target.value)}
                      required
                      className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bitte wählen Sie eine Veranstaltung</option>
                      {eventsToShow.map((event) => (
                        <option key={event.id} value={event.id}>
                          {event.title} - {event.date}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-hero text-white hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Anmeldung absenden'}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                  <p>
                    Bei Fragen erreichen Sie uns unter:{' '}
                    <a href="tel:+4915206067810" className="text-primary hover:underline">
                      +49 152 06067810
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-16"></div>
    </div>
  );
};

export default DekaLera;