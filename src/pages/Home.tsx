
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Users, FileText } from 'lucide-react';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'he';

  const newsItems = [
    {
      title: language === 'ar' ? 'إطلاق مبادرة جسور التصالح والسلام' : 
             language === 'he' ? 'השקת יוזמת גשרים של פיוס ושלום' : 
             'Launch of Bridges of Reconciliation and Peace Initiative',
      date: '2024-01-15',
      excerpt: language === 'ar' ? 'تم إطلاق المبادرة الجديدة بهدف بناء جسور التفاهم...' :
               language === 'he' ? 'היוזמה החדשה הושקה במטרה לבנות גשרים של הבנה...' :
               'The new initiative was launched with the aim of building bridges of understanding...'
    },
    {
      title: language === 'ar' ? 'لقاء مع قادة المجتمع المحلي' :
             language === 'he' ? 'פגישה עם מנהיגי הקהילה המקומית' :
             'Meeting with Local Community Leaders',
      date: '2024-01-10',
      excerpt: language === 'ar' ? 'اجتماع مثمر مع ممثلي المجتمعات المختلفة...' :
               language === 'he' ? 'פגישה פוריה עם נציגי קהילות שונות...' :
               'A productive meeting with representatives from different communities...'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('heroSubtitle')}
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

      {/* Features Section */}
      <section className="py-16 bg-white">
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

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('latestNews')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-900">{item.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Button variant="ghost" asChild className="text-green-600 hover:text-green-700">
                    <Link to="/news">{t('readMore')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/news">{t('news')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
