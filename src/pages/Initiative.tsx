import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';

const Initiative: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/initiative-full-text.pdf';
    link.download = 'initiative-full-text.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const initiativePoints = language === 'ar' ? [
  "إن رؤيتنا في مبادرة جسور التصالح والسّلام هي الوصول إلى سلام شامل ومستدام إنهاء الصراع في الأرض المقدّسة للديانات الثلاث اليهودية المسيحية، والإسلام تحقيق المصالحة بين اليهود والعرب، إقامة الدولة الفلسطينية لجانب دولة إسرائيل، وتحقيق السلام بين الدولتين، وفق رؤية حل الدولتين وفي إطار الشرعية الدولية.",
  "نقترح القبول الفوري المتبادل بمبدأ حل وإقامة الدولتين إسرائيل وفلسطين جنبا إلى جنب، في سلام وأمن وشراكة وتسامح.",
  "عقد مؤتمر سلام دولي عاجل: المؤتمر سيجمع كافة الأطراف والداعمين ذوي الصلة بالتسوية السياسية الشاملة، هدف المؤتمر إطلاق مسار جديد لتسوية سياسية شاملة، والدعوة لوقف الحرب وكل أشكال العنف المتبادل، واستكمال وتطوير تفاصيل مبادرة جسور التصالح والسلام.",
  "الإعلان المتبادل عن هدنة دائمة وشاملة حتّى تحقيق اتفاق التسوية الدائم والنهائي: يتضمن الإعلان عن الهدنة موافقة الطرفين الإسرائيلي والفلسطيني على وقف شامل وكامل ودائم لإطلاق النار والحرب، بما يشمل وقف جميع الأعمال العدائية والعنف القومي المتبادل، والتحريض على العنف بشكل مطلق وثابت."
] : language === 'he' ? [
  "החזון שעומד בבסיס יוזמת גשרים של פיוס ושלום הינו שלום כולל ובר קיימא, סיום הסכסוך בארץ הקדושה לשלוש הדתות -היהדות הנצרות והאסלאם- ופיוס בין היהודים והערבים.",
  "אנו מציעים קבלה והסכמה הדדית מידית לפתרון והקמת שתי מדינות -ישראל ופלסטין- זו לצד זו, בשלום, בביטחון, בשותפות ובסובלנות.",
  "ועידת שלום בינלאומית דחופה: הכינוס יכלול את כל הצדדים והתומכים הרלוונטיים להסדר מדיני כולל, מטרת הכינוס היא להשיק מסלול חדש להסדר מדיני כולל, וקריאה להפסקת המלחמה וכל צורות האלימות ההדדית, והשלמה ופיתוח פרטי יוזמת גשרי פיוס ושלום.",
  "הכרזה הדדית על הפסקת אש קבועה וכוללת עד להשגת הסכם הסדר קבע וסופי: ההכרזה על הפסקת האש כוללת את הסכמת שני הצדדים, הישראלי והפלסטיני, להפסקת אש ומלחמה מקיפה, מלאה וקבועה, לרבות הפסקת כל פעולות האיבה והאלימות הלאומית ההדדית, והסתה לאלימות באופן מוחלט וקבוע."
] : [
  "The vision of the Bridges of Reconciliation and Peace Initiative is to achieve a comprehensive and sustainable peace, ending the conflict in the Holy Land for the three religions—Judaism, Christianity, and Islam—and achieving reconciliation between Jews and Arabs, establishing a Palestinian state alongside the State of Israel, and achieving peace between the two states, in accordance with the two-state solution vision and within the framework of international legitimacy.",
  "We propose immediate mutual acceptance of the principle of the two-state solution and the establishment of two states, Israel and Palestine, side by side, in peace, security, partnership, and tolerance.",
  "Convening an Urgent International Peace Conference: The conference will bring together all relevant parties and supporters of a comprehensive political settlement, with the goal of launching a new path for a comprehensive political settlement, calling for a cessation of war and all forms of mutual violence, and completing and developing the details of the Bridges of Reconciliation and Peace Initiative.",
  "Bilateral Declaration of a Permanent and Comprehensive Ceasefire Until Final Settlement Agreement is Reached: The Ceasefire Declaration encompasses an agreement between the Israeli and Palestinian parties for a comprehensive, complete, and permanent cessation of hostilities and war, including an absolute and steadfast halt to all acts of hostility, mutual national violence, and incitement to violence."
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
