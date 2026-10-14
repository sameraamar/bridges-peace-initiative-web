import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Initiative: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}initiative-full-text.pdf`;
    link.download = 'initiative-full-text.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mx-auto max-w-2xl">
            {language === 'ar' ? 'المبادرة' :
             language === 'he' ? 'היוזמה' :
             'The Initiative'}
          </h1>
          <p className="text-xl text-gray-600 mx-auto max-w-2xl">
            {language === 'ar' ? 'الخطوط العريضة لمبادرة جسور التصالح والسلام' :
             language === 'he' ? 'הקווים המנחים של יוזמת גשרים של פיוס ושלום' :
             'Guidelines for the Bridges of Reconciliation and Peace Initiative'}
          </p>
        </div>

        {/* Main Initiative Card */}
        <Card className="mb-8 border-green-100">
          <div className="flex flex-col items-center justify-center py-12 px-4">
            {/* Content Container with RTL/LTR Support */}
            <div className={`${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`}>
              {/* Icon and Title Section */}
              <div className="text-center mb-8 w-full">
                <FileText className="h-24 w-24 text-green-600 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                  {language === 'ar' ? 'النص الكامل للمبادرة' :
                   language === 'he' ? 'הטקסט המלא של היוזמה' :
                   'Full Text of the Initiative'}
                </h2>
              </div>

              {/* Languages Text */}
              <div className="mb-8 text-lg text-gray-600" style={{ width: '100%', textAlign: 'center', direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>
                {language === 'ar' && (
                  <div>
                    <div>المبادرة متوفرة بالثلاث لغات:</div>
                    <div>العربية، العبرية، والإنجليزية</div>
                  </div>
                )}
                {language === 'he' && (
                  <div>
                    <div>היוזמה זמינה בשלוש שפות:</div>
                    <div>ערבית, עברית ואנגלית</div>
                  </div>
                )}
                {language === 'en' && (
                  'The initiative is available in three languages: Arabic, Hebrew, and English'
                )}
              </div>

              {/* Download Button */}
              <div className="mb-6" style={{ width: '100%', textAlign: 'center' }}>
                <Button 
                  onClick={handleDownloadPDF}
                  className="bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  <Download className={`h-5 w-5 ${language === 'ar' || language === 'he' ? 'ml-2' : 'mr-2'}`} />
                  {language === 'ar' ? 'تحميل ملف PDF' :
                   language === 'he' ? 'הורד קובץ PDF' :
                   'Download PDF'}
                </Button>
              </div>

              {/* Small Text */}
              <div style={{ width: '100%', textAlign: 'center', direction: language === 'ar' || language === 'he' ? 'rtl' : 'ltr' }}>
                <div className="text-sm text-gray-500">
                  {language === 'ar' && (
                    <div>
                      <div>اضغط هنا</div>
                      <div>لتحميل النص الكامل للمبادرة بجميع اللغات</div>
                    </div>
                  )}
                  {language === 'he' && (
                    <div>
                      <div>לחץ כאן</div>
                      <div>להורדת הטקסט המלא של היוזמה בכל השפות</div>
                    </div>
                  )}
                  {language === 'en' && (
                    'Click here to download the full text of the initiative in all languages'
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>


        {/* Additional Information */}
        <div className="mt-8">
          <Card className="border-green-100 bg-green-50">
            <CardContent className="p-8 text-center">
              <div className={`${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`}>
                <h3 className="text-xl font-semibold text-green-900 mb-4 mx-auto max-w-2xl">
                  {language === 'ar' ? 'للمزيد من المعلومات' :
                   language === 'he' ? 'למידע נוסף' :
                   'For More Information'}
                </h3>
                <p className="text-gray-700 mb-6 mx-auto max-w-2xl">
                  {language === 'ar' ? 'تحتوي الوثيقة الكاملة على تفاصيل شاملة حول المبادرة، بما في ذلك الخطة التنفيذية والآليات المقترحة لتحقيق السلام والمصالحة.' :
                   language === 'he' ? 'המסמך המלא מכיל פרטים מקיפים על היוזמה, כולל התוכנית הביצועית והמנגנונים המוצעים להשגת שלום ופיוס.' :
                   'The complete document contains comprehensive details about the initiative, including the implementation plan and proposed mechanisms for achieving peace and reconciliation.'}
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleDownloadPDF}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {language === 'ar' ? 'تحميل المبادرة' :
                   language === 'he' ? 'הורד את היוזמה' :
                   'Download Initiative'}
                </Button>
                <Button variant="outline" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/contact">
                    {language === 'ar' ? 'تواصل معنا' :
                     language === 'he' ? 'צור קשר' :
                     'Contact Us'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
