import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag, Play } from 'lucide-react';

const News: React.FC = () => {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: language === 'ar' ? 'إطلاق المبادرة' :
             language === 'he' ? 'השקת היוזמה' :
             'Launch of the Initiative',
      date: '2025-03-03',
      category: language === 'ar' ? 'إعلان' : language === 'he' ? 'הודעה' : 'Announcement',
      author: language === 'ar' ? 'النائب منصور عباس' : language === 'he' ? 'ח"כ מנסור עבאס' : 'MK Mansour Abbas',
      excerpt: language === 'ar' ? 
        'النائب منصور عباس يقدّم للإسرائيليين وللفلسطينيين وللدول العربية "مبادرة جسور التصالح والسلام". النائب منصور عباس أرسل مبادرته للقمة العربية الطارئة في القاهرة والتي تهدف إلى وقف الحرب بشكل دائم وفتح أفق لمسار تسوية سياسية سلمية بين الإسرائيليين والفلسطينيين.' :
        language === 'he' ?
        'ח"כ מנסור עבאס מציג "יוזמת גשרים של פיוס ושלום" בפני ישראל והפלסטינים ומדינות ערב. ח"כ עבאס שלח את יוזמתו גם לפסגה הערבית הדחופה בקהיר. מטרת היוזמה להביא להפסקת המלחמה והחזרת כל החטופים, ולפתיחת אופק להסדר מדיני של שלום בין ישראלים לפלסטינים.' :
        'MK Mansour Abbas Presents the "Bridges of Reconciliation and Peace Initiative" to Israel, the Palestinians, and Arab States. MK Abbas has also submitted the initiative to the emergency Arab League summit in Cairo. Its goal is to end the war, secure the release of all hostages, and open a path toward a political peace settlement between Israelis and Palestinians.',
      video: '/video1.mp4',
      videoTitle: language === 'ar' ? 'النائب منصور عباس يسلّم يوم الإثنين 3/3/2025 رئيس الحكومة الإسرائيلية بنيامين نتنياهو وثيقة "مبادرة جسور التصالح والسلام" ويعرض في خطابه في الكنيست أبرز محاورها أمام الوزراء وأعضاء الكنيست' :
                   language === 'he' ? 'ח״כ מנסור עבאס העביר יום שני 3/3/2025 במליאת הכנסת לרה"מ נתניהו את מסמך היוזמה שלו "גשרים של פיוס ושלום" והציג את מטרותיה בפני השרים וחברי הכנסת במליאה.' :
                   'On Monday, March 3, 2025, MK Mansour Abbas presented his "Bridges of Reconciliation and Peace Initiative" to Prime Minister Benjamin Netanyahu during a Knesset plenary session. He outlined the goals of the initiative to ministers and fellow members of the Knesset.'
    },
    {
      id: 2,
      title: language === 'ar' ? 'إطلاع الأحزاب العربية ورؤساء السلطات على المبادرة' :
             language === 'he' ? 'הצגת היוזמה בפני המפלגות וראשי הרשויות הערביות' :
             'Presenting the Initiative to Arab Parties and Local Arab Leadership in Israel',
      date: '2025-03-11',
      category: language === 'ar' ? 'اجتماع' : language === 'he' ? 'פגישה' : 'Meeting',
      author: language === 'ar' ? 'القائمة العربية الموحدة' : language === 'he' ? 'רע"מ' : 'Ra\'am',
      excerpt: language === 'ar' ?
        'الموحّدة تُطلع الأحزاب العربية الفاعلة في إسرائيل ورؤساء السلطات المحلية العربية على مبادرة جسور التصالح والسلام. وجّهت القائمة العربية الموحدة رسالة للأحزاب العربية ولرؤساء السلطات المحلية العربية تتضمن مقترحًا عمليًا قدّمت فيه رؤية سياسية شاملة لمواجهة المخاطر والتحدّيات التي يواجهها المجتمع العربي، والشعب الفلسطيني.' :
        language === 'he' ?
        'רע"מ מציגה בפני המפלגות וראשי הרשויות הערביות את יוזמת גשרים לפיוס ושלום. המפלגה הערבית המאוחדת (רע"מ) שלחה מסר למפלגות הערביות ולראשי הרשויות המקומיות הערביות, שבו הציגה הצעה מעשית הכוללת חזון פוליטי כולל להתמודדות עם הסכנות והאתגרים העומדים בפני החברה הערבית והעם הפלסטיני.' :
        'Ra\'am Presents the Bridges of Reconciliation and Peace Initiative to Arab Parties and Local Arab Leadership in Israel. The United Arab List (Ra\'am) addressed a formal message to Arab political parties and heads of Arab local authorities in Israel. The message included a practical proposal and a comprehensive political vision for addressing the escalating threats and challenges facing Arab society in Israel and the Palestinian people.',
      video: '/video5.mp4',
      videoTitle: language === 'ar' ? 'منصور عباس في مؤتمر يديعوت أحرونوت يدعو لوقف الحرب ويطرح مبادرة جسور كخطة واقعية للحل السياسي' :
                   language === 'he' ? 'ח"כ מנסור עבאס בכנס "ידיעות אחרונות" קורא להפסיק את המלחמה, ומציג את יוזמתו "גשרים לפיוס ושלום" כפתרון מדיני ריאלי' :
                   'At the "People of the Nation" conference organized by Yedioth Ahronoth and Ynet on April 7, 2025, MK Mansour Abbas called for an immediate end to the war in Gaza and introduced his "Bridges of Reconciliation and Peace Initiative" as a realistic political solution.'
    }
  ];

  const videoInterviews = [
    {
      id: 1,
      title: language === 'ar' ? 'مقابلة مع راديو الشمس' :
             language === 'he' ? 'ריאיון עם רדיו אל-שמס' :
             'Interview with Radio Al-Shams',
      date: '2025-03-04',
      video: '/video2.mp4',
      description: language === 'ar' ? 'النائب منصور عباس لراديو الشمس (4/3/2025): عرضت مبادرة جسور على عدة شخصيات فلسطينية وإسرائيلية وعالمية وجوابهم كان أنها: واقعية، منطقية وعملية' :
                   language === 'he' ? 'ח"כ מנסור עבאס לרדיו אל-שמס (4/3/2025): הצגתי את יוזמת "גשרים לפיוס ושלום" למספר דמויות פלסטיניות, ישראליות ובינלאומיות – ותגובתם הייתה שהיא ריאלית, הגיונית וישימה.' :
                   'In an interview with Radio Al-Shams (March 4, 2025), MK Abbas said: "I presented the Bridges of Reconciliation and Peace Initiative to several Palestinian, Israeli, and international figures. Their response was that the plan is realistic, logical, and practical."'
    },
    {
      id: 2,
      title: language === 'ar' ? 'مقابلة مع راديو مكان' :
             language === 'he' ? 'ריאיון עם רדיו מכאן' :
             'Interview with Radio Makan',
      date: '2025-03-04',
      video: '/video3.mp4',
      description: language === 'ar' ? 'النائب منصور عباس يتحدث لراديو مكان (4/3/2025) عن أهداف ومحاور مبادرة جسور التصالح والسلام التي أطلقها: النكبة التي نعيشها دفعتني للمبادرة' :
                   language === 'he' ? 'ח"כ מנסור עבאס מדבר לרדיו מכאן (4/3/2025) על חזון ומטרותיה של יוזמת "גשרים לפיוס ושלום" שיזם: המצב הקשה שאנו חיים בו היום (המלחמה) דחף אותי ליוזמה.' :
                   'Speaking to Radio Makan (March 4, 2025), MK Abbas explained the vision and goals behind the Bridges of Reconciliation and Peace Initiative: "The harsh reality we are living in — the war — is what pushed me to launch this initiative."'
    },
    {
      id: 3,
      title: language === 'ar' ? 'مقابلة مع راديو الناس' :
             language === 'he' ? 'ריאיון עם רדיו אל-נאס' :
             'Interview with Radio Al-Nas',
      date: '2025-03-04',
      video: '/video4.mp4',
      description: language === 'ar' ? 'النائب منصور عباس لراديو الناس (4/3/2025): مبادرة جسور التصالح والسلام التي قدّمتها تؤكّد: الدولة الفلسطينية أولًا وقيامها هو الضامن للسلام في المنطقة' :
                   language === 'he' ? 'ח"כ מנסור עבאס לרדיו אל-נאס (4/3/2025): יוזמת "גשרים לפיוס ושלום" שהצגתי מדגישה: המדינה הפלסטינית תחילה, והקמתה היא הערובה לשלום באזור.' :
                   'In an interview with Radio Al-Nas (March 4, 2025), MK Abbas emphasized: "Bridges of Reconciliation and Peace Initiative clearly states: A Palestinian state must come first. Its establishment is the key to peace in the region."'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'أخبار وأنشطة' :
             language === 'he' ? 'חדשות' :
             'News & Activities'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'تابع آخر الأخبار والفعاليات والأنشطة' :
             language === 'he' ? 'עקוב אחר החדשות והאירועים והפעילויות האחרונות' :
             'Follow the latest news, events, and activities'}
          </p>
        </div>

        {/* Main News Articles */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            {language === 'ar' ? 'الأخبار الرئيسية' :
             language === 'he' ? 'חדשות עיקריות' :
             'Main News'}
          </h2>
          {newsItems.map((item) => (
            <Card key={item.id} className="border-green-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="aspect-video">
                  <video controls className="w-full h-full object-cover">
                    <source src={item.video} type="video/mp4" />
                    {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' :
                     language === 'he' ? 'הדפדפן שלך אינו תומך בהפעלת וידאו' :
                     'Your browser does not support the video tag'}
                  </video>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{item.excerpt}</p>
                  <div className="text-sm text-gray-600">
                    <Play className="h-4 w-4 inline mr-1" />
                    {item.videoTitle}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Interviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            {language === 'ar' ? 'مقابلات إذاعية' :
             language === 'he' ? 'ריאיונים ברדיו' :
             'Radio Interviews'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoInterviews.map((interview) => (
              <Card key={interview.id} className="border-green-100 overflow-hidden">
                <div className="aspect-video">
                  <video controls className="w-full h-full object-cover">
                    <source src={interview.video} type="video/mp4" />
                    {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' :
                     language === 'he' ? 'הדפדפן שלך אינו תומך בהפעלת וידאו' :
                     'Your browser does not support the video tag'}
                  </video>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-green-600 text-green-600">
                      {language === 'ar' ? 'مقابلة' : language === 'he' ? 'ריאיון' : 'Interview'}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {interview.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-green-900">
                    {interview.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">{interview.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 bg-green-50 rounded-lg border border-green-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {language === 'ar' ? 'تابعونا للمزيد من التحديثات' :
                 language === 'he' ? 'עקבו אחרינו לעדכונים נוספים' :
                 'Follow us for more updates'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'ابقوا على اطلاع على آخر أخبار وأنشطة المبادرة' :
                 language === 'he' ? 'הישארו מעודכנים בחדשות ופעילויות היוזמה האחרונות' :
                 'Stay updated with the latest news and activities of the initiative'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
