import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Users, FileText } from 'lucide-react';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'he';

  const videos = [
    { 
      src: '/Video 1.mp4', 
      title: language === 'ar' ? 'النائب منصور عباس يسلّم رئيس الحكومة وثيقة المبادرة' :
             language === 'he' ? 'ח״כ מנסור עבאס העביר לרה"מ נתניהו את מסמך היוזמה' :
             'MK Mansour Abbas presents the initiative document to the Prime Minister'
    },
    { 
      src: '/Video 2.mp4', 
      title: language === 'ar' ? 'مقابلة مع راديو الشمس حول المبادرة' :
             language === 'he' ? 'ריאיון עם רדיו אל-שמס על היוזמה' :
             'Interview with Radio Al-Shams about the initiative'
    },
    { 
      src: '/Video 3.mp4', 
      title: language === 'ar' ? 'مقابلة مع راديو مكان حول أهداف المبادرة' :
             language === 'he' ? 'ריאיון עם רדיו מכאן על מטרות היוזמה' :
             'Interview with Radio Makan about the initiative goals'
    },
    { 
      src: '/Video 4.mp4', 
      title: language === 'ar' ? 'مقابلة مع راديو الناس حول الدولة الفلسطينية' :
             language === 'he' ? 'ריאיון עם רדיו אל-נאס על המדינה הפלסטינית' :
             'Interview with Radio Al-Nas about the Palestinian state'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'مبادرة جسور التصالح والسلام' :
               language === 'he' ? 'יוזמת גשרים של פיוס ושלום' :
               'Bridges of Reconciliation and Peace Initiative'}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'ar' ? 'مبادرة لتسوية سلمية وتصالح بين الشعبين الإسرائيلي والفلسطيني' :
               language === 'he' ? 'יוזמה להסדר שלום ולפיוס בין שני העמים הישראלי והפלסטיני' :
               'An Initiative for a Peaceful Resolution and Reconciliation between the Israeli and Palestinian Peoples'}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/about">
                  {t('aboutUs')}
                  {isRTL ? <ArrowLeft className="mr-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                <Link to="/initiative">
                  {t('initiative')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'ar' ? 'فيديوهات المبادرة' :
             language === 'he' ? 'סרטוני היוזמה' :
             'Initiative Videos'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="border-green-100 hover:border-green-200 transition-colors overflow-hidden">
                <div className="aspect-video">
                  <video controls className="w-full h-full object-cover">
                    <source src={video.src} type="video/mp4" />
                    {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' :
                     language === 'he' ? 'הדפדפן שלך אינו תומך בהפעלת וידאו' :
                     'Your browser does not support the video tag'}
                  </video>
                </div>
                <CardHeader>
                  <CardTitle className="text-green-900 text-lg">{video.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-900">{t('aboutUs')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {language === 'ar' ? 'تعرف على رؤيتنا وأهدافنا في بناء مستقبل أفضل' :
                   language === 'he' ? 'למד על החזון והמטרות שלנו בבניית עתיד טוב יותר' :
                   'Learn about our vision and goals in building a better future'}
                </CardDescription>
                <div className="text-center mt-4">
                  <Button variant="ghost" asChild className="text-green-600 hover:text-green-700">
                    <Link to="/about">{t('readMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-900">{t('initiative')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {language === 'ar' ? 'اطلع على النص الكامل للمبادرة والخطوط العريضة' :
                   language === 'he' ? 'עיין בטקסט המלא של היוזמה והקווים המנחים' :
                   'View the full text of the initiative and guidelines'}
                </CardDescription>
                <div className="text-center mt-4">
                  <Button variant="ghost" asChild className="text-green-600 hover:text-green-700">
                    <Link to="/initiative">{t('readMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-900">{t('news')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {language === 'ar' ? 'تابع آخر الأخبار والفعاليات والأنشطة' :
                   language === 'he' ? 'עקוב אחר החדשות והאירועים והפעילויות האחרונות' :
                   'Follow the latest news, events, and activities'}
                </CardDescription>
                <div className="text-center mt-4">
                  <Button variant="ghost" asChild className="text-green-600 hover:text-green-700">
                    <Link to="/news">{t('readMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            {language === 'ar' ? 'انضم إلى مبادرتنا' :
             language === 'he' ? 'הצטרף ליוזמה שלנו' :
             'Join Our Initiative'}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'كن جزءاً من بناء جسور التفاهم والسلام في مجتمعنا' :
             language === 'he' ? 'היה חלק מבניית גשרי הבנה ושלום בחברה שלנו' :
             'Be part of building bridges of understanding and peace in our society'}
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
            <Link to="/contact">
              {language === 'ar' ? 'تواصل معنا' :
               language === 'he' ? 'צור קשר' :
               'Contact Us'}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
