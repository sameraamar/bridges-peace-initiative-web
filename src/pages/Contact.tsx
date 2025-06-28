
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    toast({
      title: language === 'ar' ? 'تم إرسال الرسالة' :
             language === 'he' ? 'ההודעה נשלחה' :
             'Message Sent',
      description: language === 'ar' ? 'شكراً لتواصلكم معنا. سنرد عليكم قريباً.' :
                   language === 'he' ? 'תודה שפנית אלינו. נחזור אליך בקרוב.' :
                   'Thank you for contacting us. We will get back to you soon.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      value: 'info@bridges-peace.org',
      href: 'mailto:info@bridges-peace.org'
    },
    {
      icon: Phone,
      title: t('phone'),
      value: '+972-2-123-4567',
      href: 'tel:+972-2-123-4567'
    },
    {
      icon: MapPin,
      title: t('address'),
      value: language === 'ar' ? 'القدس، فلسطين' :
             language === 'he' ? 'ירושלים, ישראל' :
             'Jerusalem, Israel',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contactUs')}</h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'نحن هنا للاستماع إليكم والإجابة على استفساراتكم' :
             language === 'he' ? 'אנחנו כאן להקשיב לכם ולענות על שאלותיכם' :
             'We are here to listen to you and answer your questions'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900">
                {language === 'ar' ? 'أرسل لنا رسالة' :
                 language === 'he' ? 'שלח לנו הודעה' :
                 'Send us a message'}
              </CardTitle>
              <CardDescription>
                {language === 'ar' ? 'املأ النموذج أدناه وسنتواصل معك قريباً' :
                 language === 'he' ? 'מלא את הטופס למטה ונחזור אליך בקרוב' :
                 'Fill out the form below and we will get back to you soon'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">
                    {language === 'ar' ? 'الاسم' : language === 'he' ? 'שם' : 'Name'}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder={language === 'ar' ? 'اكتب اسمك' :
                                language === 'he' ? 'הכנס את שמך' :
                                'Enter your name'}
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    {language === 'ar' ? 'البريد الإلكتروني' : language === 'he' ? 'אימייל' : 'Email'}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder={language === 'ar' ? 'اكتب بريدك الإلكتروني' :
                                language === 'he' ? 'הכנס את האימייל שלך' :
                                'Enter your email'}
                  />
                </div>

                <div>
                  <Label htmlFor="subject">
                    {language === 'ar' ? 'الموضوع' : language === 'he' ? 'נושא' : 'Subject'}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder={language === 'ar' ? 'اكتب موضوع الرسالة' :
                                language === 'he' ? 'הכנס את נושא ההודעה' :
                                'Enter the subject'}
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    {language === 'ar' ? 'الرسالة' : language === 'he' ? 'הודעה' : 'Message'}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا' :
                                language === 'he' ? 'כתוב את ההודעה שלך כאן' :
                                'Write your message here'}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-4 w-4" />
                  {language === 'ar' ? 'إرسال الرسالة' :
                   language === 'he' ? 'שלח הודעה' :
                   'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">
                  {language === 'ar' ? 'معلومات التواصل' :
                   language === 'he' ? 'פרטי קשר' :
                   'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-600 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        {info.href.startsWith('#') ? (
                          <p className="text-gray-600">{info.value}</p>
                        ) : (
                          <a 
                            href={info.href}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">
                  {language === 'ar' ? 'ساعات العمل' :
                   language === 'he' ? 'שעות פעילות' :
                   'Office Hours'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>{language === 'ar' ? 'الأحد - الخميس' : language === 'he' ? 'ראשון - חמישי' : 'Sunday - Thursday'}</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'ar' ? 'الجمعة' : language === 'he' ? 'שישי' : 'Friday'}</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'ar' ? 'السبت' : language === 'he' ? 'שבת' : 'Saturday'}</span>
                    <span className="text-red-600">{language === 'ar' ? 'مغلق' : language === 'he' ? 'סגור' : 'Closed'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
