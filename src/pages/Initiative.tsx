
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';

const Initiative: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadPDF = () => {
    // This would be replaced with actual PDF download functionality
    console.log('Downloading PDF...');
    alert(language === 'ar' ? 'سيتم تحميل الملف قريباً' :
          language === 'he' ? 'הקובץ יורד בקרוב' :
          'File will be downloaded soon');
  };

  const initiativePoints = language === 'ar' ? [
    'تعزيز الحوار البناء بين جميع أطراف المجتمع',
    'بناء الثقة من خلال المشاريع المشتركة',
    'تطوير آليات حل النزاعات السلمية',
    'تعزيز التعليم والثقافة كجسور للتفاهم',
    'العمل على تحقيق العدالة الاجتماعية',
    'تشجيع المشاركة المدنية الفعالة'
  ] : language === 'he' ? [
    'חיזוק הדיאלוג הבונה בין כל גורמי החברה',
    'בניית אמון באמצעות פרויקטים משותפים',
    'פיתוח מנגנונים לפתרון סכסוכים בשלום',
    'חיזוק החינוך והתרבות כגשרים להבנה',
    'פעולה להשגת צדק חברתי',
    'עידוד השתתפות אזרחית פעילה'
  ] : [
    'Strengthening constructive dialogue between all parties in society',
    'Building trust through joint projects',
    'Developing mechanisms for peaceful conflict resolution',
    'Promoting education and culture as bridges of understanding',
    'Working to achieve social justice',
    'Encouraging active civic participation'
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('initiativeText')}</h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'الخطوط العريضة لمبادرة جسور التصالح والسلام' :
             language === 'he' ? 'הקווים המנחים של יוזמת גשרים של פיוס ושלום' :
             'Guidelines for the Bridges of Reconciliation and Peace Initiative'}
          </p>
        </div>

        {/* Main Initiative Card */}
        <Card className="mb-8 border-green-100">
          <CardHeader className="text-center">
            <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-900">
              {language === 'ar' ? 'النص الكامل للمبادرة' :
               language === 'he' ? 'הטקסט המלא של היוזמה' :
               'Full Text of the Initiative'}
            </CardTitle>
            <CardDescription>
              {language === 'ar' ? 'المبادرة متوفرة بالثلاث لغات: العربية، العبرية، والإنجليزية' :
               language === 'he' ? 'היוזמה זמינה בשלוש שפות: ערבית, עברית ואנגלית' :
               'The initiative is available in three languages: Arabic, Hebrew, and English'}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('downloadPdf')}
            </Button>
          </CardContent>
        </Card>

        {/* Initiative Points */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-2xl text-green-900">
              {language === 'ar' ? 'أبرز نقاط المبادرة' :
               language === 'he' ? 'עיקרי היוזמה' :
               'Key Points of the Initiative'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initiativePoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-xl font-semibold text-green-900 mb-4">
            {language === 'ar' ? 'انضم إلى مبادرتنا' :
             language === 'he' ? 'הצטרף ליוזמה שלנו' :
             'Join Our Initiative'}
          </h3>
          <p className="text-gray-700 mb-6">
            {language === 'ar' ? 'كن جزءاً من بناء جسور التفاهم والسلام في مجتمعنا' :
             language === 'he' ? 'היה חלק מבניית גשרי הבנה ושלום בחברה שלנו' :
             'Be part of building bridges of understanding and peace in our society'}
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a href="/contact">{t('contactUs')}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
