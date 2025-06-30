import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      values: [
        { value: 'mabas@knesset.gov.il', href: 'mailto:mabas@knesset.gov.il' },
        { value: 'mnsorabbas@gmail.com', href: 'mailto:mnsorabbas@gmail.com' }
      ]
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : t('phone'),
      values: [
        { value: '+972-(0)2-6408161', href: 'tel:+972-2-6408161' },
        { value: '+972-(0)2-6408686', href: 'tel:+972-2-6408686' }
      ]
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'فاكس' : language === 'he' ? 'פקס' : 'Fax',
      values: [
        { value: '+972-(0)2-6408203', href: 'tel:+972-2-6408203' }
      ]
    }
  ];

  // Custom TikTok SVG icon
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/16cdJzv8VP/?mibextid=wwXIfr',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/mansourabbas.me?igsh=MWRtb3ZxZW5vZWFubA==',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@mansour_abbas1?_t=ZS-8xa6wpTfgRt&_r=1',
      color: 'text-gray-800 hover:text-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'تواصل معنا' :
             language === 'he' ? 'צור קשר' :
             'Contact'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'نحن هنا للاستماع إليكم والإجابة على استفساراتكم' :
             language === 'he' ? 'אנחנו כאן להקשיב לכם ולענות על שאלותיכם' :
             'We are here to listen to you and answer your questions'}
          </p>
        </div>

        {/* Main Contact Information */}
        <div className="mb-12">
          <Card className="border-green-100">
            
              <div className="mb-4 text-center" style={{ direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>
                <CardTitle className="text-3xl text-green-900 mb-2" style={{ textAlign: 'center' }}>
                  {language === 'ar' ? 'النائب د. منصور عباس' :
                   language === 'he' ? 'ח"כ ד"ר מנסור עבאס' :
                   'MK Mansour Abbas'}
                </CardTitle>
                <CardDescription className="text-lg">
                  {language === 'ar' ? 'رئيس القائمة العربية الموحدة' :
                   language === 'he' ? 'יו"ר רע"מ (הרשימה הערבית המאוחדת)' :
                   'Head of the Ra\'am'}
                </CardDescription>
              </div>
     
            <CardContent>
              <div className="space-y-2 bg-green-50" style={{ direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-start p-2" style={{ justifyContent: language === 'ar' || language === 'he' ? 'flex-end' : 'flex-start' }}>
                        <IconComponent className={`h-6 w-6 text-green-600 mt-1 ${language === 'ar' || language === 'he' ? 'ml-4' : 'mr-4'}`} />
                        <div style={{ textAlign: language === 'ar' || language === 'he' ? 'right' : 'left' }}>
                          <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.values.map((item, valueIndex) => (
                              <a 
                                key={valueIndex}
                                href={item.href}
                                className="text-green-600 hover:text-green-700 transition-colors text-sm block"
                                style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
                              >
                                {item.value}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < contactInfo.length - 1 && (
                        <div className="border-b border-green-100 my-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Parliamentary Assistant */}
        <div >
          <Card className="border-green-100">
            
              <CardTitle className="text-2xl text-green-900 text-center">
                {language === 'ar' ? 'عبد الكريم عزام' :
                   language === 'he' ? 'עבדאלכרים עזאם' :
                 'Abdolkarim Azzam'}
              </CardTitle>
            <CardDescription className="mb-4 text-center" style={{ direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>
                {language === 'ar' ? 'المستشار البرلماني' :
                 language === 'he' ? 'היועץ הפרלמנטרי' :
                   'Parliamentary Assistant'}
            </CardDescription>
            <CardContent>
              <div className="p-4 bg-green-50 rounded-lg" style={{ direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>

                <div className="space-y-2">
                  <div >
                    <div >
                      <span className="text-sm font-medium">
                        {t('phone')}
                      </span>
                      <Phone className={`h-5 w-5 text-green-600 ${language === 'ar' || language === 'he' ? 'ml-2' : 'mr-2'}`} />
                    </div>
                    <a 
                      href="tel:+972532407896"
                      className="text-green-600 hover:text-green-700 transition-colors mt-1"
                      style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}
                    >
                      +972-(0)53-2407896
                    </a>
                    <a 
                      href="https://wa.me/972532407896"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                      style={{ textAlign: language === 'ar' || language === 'he' ? 'right' : 'left' }}
                    >
                    <MessageCircle className={`h-5 w-5 text-green-600 ${language === 'ar' || language === 'he' ? 'ml-2' : 'mr-2'}`} />

                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="mb-12">
          <Card className="border-green-100">
            {/* make the following text centered */}

              <CardTitle className="text-2xl text-green-900 text-center">
                {language === 'ar' ? 'تابعونا على وسائل التواصل الاجتماعي' :
                 language === 'he' ? 'עקבו אחרינו ברשתות החברתיות' :
                 'Follow Us on Social Media'}
              </CardTitle>

            <CardContent>
              <div className={`flex justify-center ${language === 'ar' || language === 'he' ? 'space-x-reverse' : 'space-x-8'}`}>
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors ${link.color}`}
                    >
                      <IconComponent className="h-10 w-10 mb-2" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-100 bg-green-50">
            <CardContent className="p-6">
              <p className="text-green-800 text-sm leading-relaxed" style={{ direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr', textAlign: language === 'ar' || language === 'he' ? 'right' : 'left' }}>
                {language === 'ar' ? 'نحن نقدر تواصلكم معنا ونسعى للرد على جميع الرسائل في أقرب وقت ممكن. لطلبات عاجلة، يرجى الاتصال مباشرة.' :
                 language === 'he' ? 'אנו מעריכים את פנייתכם אלינו ומשתדלים להשיב על כל ההודעות בהקדם האפשרי. לבקשות דחופות, אנא צרו קשר ישירות.' :
                 'We appreciate your contact and strive to respond to all messages as soon as possible. For urgent requests, please contact directly.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
