import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Loader2, Send, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NatrixContactFormProps {
  device?: string;
  className?: string;
}

const NatrixContactForm = ({ device, className = '' }: NatrixContactFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send email via FormSubmit.co (free, no API key needed)
      const emailData = new FormData();
      emailData.append('name', formData.name);
      emailData.append('phone', formData.phone);
      emailData.append('email', formData.email);
      if (device) emailData.append('Gerät', device);
      emailData.append('_subject', `Natrix Med Anfrage: ${device || 'Allgemein'} — ${formData.name}`);
      emailData.append('_template', 'table');
      emailData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/Yulachip@icloud.com', {
        method: 'POST',
        body: emailData,
      });

      if (!response.ok) throw new Error('Email failed');

      // Also save to Supabase for admin dashboard
      try {
        const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM';
        await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: device ? `Gerät: ${device}` : null,
            page: 'natrix',
            owner: 'Yulia',
          }),
        });
      } catch {
        // Supabase save is secondary — don't fail the form
      }

      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch {
      setSubmitError(t('natrix.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className={`border-green-200 bg-green-50 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            {t('natrix.form.success.title')}
          </h3>
          <p className="text-green-700">
            {t('natrix.form.success.text')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`shadow-xl border-rose-gold/20 ${className}`}>
      <CardContent className="p-6 sm:p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            {t('natrix.form.title')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('natrix.form.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="natrix-name" className="block text-sm font-medium text-primary mb-1.5">
              {t('natrix.form.name')} *
            </label>
            <Input
              id="natrix-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t('natrix.form.name.placeholder')}
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="natrix-phone" className="block text-sm font-medium text-primary mb-1.5">
              {t('natrix.form.phone')} *
            </label>
            <Input
              id="natrix-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t('natrix.form.phone.placeholder')}
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="natrix-email" className="block text-sm font-medium text-primary mb-1.5">
              {t('natrix.form.email')} *
            </label>
            <Input
              id="natrix-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('natrix.form.email.placeholder')}
              className="h-12"
            />
          </div>

          {submitError && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-gradient-to-r from-rose-gold to-rose-gold-dark hover:from-rose-gold-dark hover:to-rose-gold text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6 min-h-[48px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t('natrix.form.sending')}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t('natrix.form.submit')}
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t('natrix.form.privacy')}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default NatrixContactForm;
