
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';

const News: React.FC = () => {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: language === 'ar' ? 'إطلاق مبادرة جسور التصالح والسلام رسمياً' :
             language === 'he' ? 'השקה רسמית של יוזמת גשרים של פיוס ושלום' :
             'Official Launch of Bridges of Reconciliation and Peace Initiative',
      date: '2024-01-15',
      category: language === 'ar' ? 'إعلان' : language === 'he' ? 'הודעה' : 'Announcement',
      author: language === 'ar' ? 'النائب منصور عباس' : language === 'he' ? 'ח"כ מנסור עבאס' : 'MK Mansour Abbas',
      excerpt: language === 'ar' ? 
        'في خطوة مهمة نحو بناء جسور التفاهم، تم إطلاق مبادرة جسور التصالح والسلام رسمياً، والتي تهدف إلى تعزيز الحوار البناء بين مختلف أطياف المجتمع وبناء مستقبل مشترك قائم على الاحترام المتبادل والتعايش السلمي.' :
        language === 'he' ?
        'בצעד חשוב לקראת בניית גשרי הבנה, הושקה רسמית יוזמת גשרים של פיוס ושלום, שמטרתها לחזק דיאלוג בונה בין קבוצות שונות בחברה ולבנות עתיד משותף המבוסס על כבוד הדדי ודו-קיום בשלום.' :
        'In an important step towards building bridges of understanding, the Bridges of Reconciliation and Peace Initiative was officially launched, aiming to promote constructive dialogue between different segments of society and build a shared future based on mutual respect and peaceful coexistence.',
      image: 'photo-1531297484001-80022131f5a1'
    },
    {
      id: 2,
      title: language === 'ar' ? 'لقاء مع قادة المجتمع المحلي' :
             language === 'he' ? 'פגישה עם מנהיגי הקהילה המקומית' :
             'Meeting with Local Community Leaders',
      date: '2024-01-10',
      category: language === 'ar' ? 'فعالية' : language === 'he' ? 'אירוע' : 'Event',
      author: language === 'ar' ? 'فريق المبادرة' : language === 'he' ? 'צוות היוזמה' : 'Initiative Team',
      excerpt: language === 'ar' ?
        'عُقد اجتماع مثمر مع ممثلي المجتمعات المختلفة لمناقشة سبل التعاون وبناء الثقة المتبادلة. شارك في الاجتماع قادة من مختلف الخلفيات الثقافية والدينية والسياسية، وتم التأكيد على أهمية الحوار المستمر.' :
        language === 'he' ?
        'נערכה פגישה פוריה עם נציגי קהילות שונות לדיון בדרכי שיתוף פעולה ובניית אמון הדדי. בפגישה השתתפו מנהיגים מרקעים תרבותיים, דתיים ופוליטיים שונים, והודגשה חשיבות הדיאלוג המתמשך.' :
        'A productive meeting was held with representatives from different communities to discuss ways of cooperation and building mutual trust. Leaders from various cultural, religious, and political backgrounds participated in the meeting, emphasizing the importance of ongoing dialogue.',
      image: 'photo-1460925895917-afdab827c52f'
    },
    {
      id: 3,
      title: language === 'ar' ? 'ورشة عمل حول بناء السلام' :
             language === 'he' ? 'סדנה על בניית השלום' :
             'Peace-Building Workshop',
      date: '2024-01-05',
      category: language === 'ar' ? 'تدريب' : language === 'he' ? 'הכשרה' : 'Training',
      author: language === 'ar' ? 'د. سارة أحمد' : language === 'he' ? 'ד"ר שרה אחמד' : 'Dr. Sarah Ahmed',
      excerpt: language === 'ar' ?
        'نظمت المبادرة ورشة عمل متخصصة حول آليات بناء السلام وحل النزاعات بالطرق السلمية. شارك في الورشة أكثر من 50 متدرباً من مختلف المجالات، وتم التركيز على الأدوات العملية للوساطة والحوار.' :
        language === 'he' ?
        'היוזמה ארגנה סדנה מתמחה במנגנוני בניית שלום ופתרון סכסוכים בדרכי שלום. בסדנה השתתפו יותר מ-50 משתתפים מתחומים שונים, והתמקדו בכלים מעשיים לגישור ודיאלוג.' :
        'The initiative organized a specialized workshop on peace-building mechanisms and conflict resolution through peaceful means. More than 50 participants from various fields took part in the workshop, focusing on practical tools for mediation and dialogue.',
      image: 'photo-1483058712412-4245e9b90334'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('news')}</h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'تابع آخر الأخبار والفعاليات والأنشطة' :
             language === 'he' ? 'עקוב אחר החדשות והאירועים והפעילויות האחרונות' :
             'Follow the latest news, events, and activities'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow border-green-100">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-green-900 leading-tight">
                  {item.title}
                </CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  {item.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-8 bg-green-50 rounded-lg border border-green-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {language === 'ar' ? 'المزيد من الأخبار قريباً' :
                 language === 'he' ? 'חדשות נוספות בקרוב' :
                 'More News Coming Soon'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'تابعونا للحصول على آخر التحديثات' :
                 language === 'he' ? 'עקבו אחרינו לעדכונים אחרונים' :
                 'Follow us for the latest updates'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
