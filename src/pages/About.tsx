
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      id: 'introduction',
      title: t('introduction'),
      icon: Heart,
      content: language === 'ar' ? 
        'مبادرة جسور التصالح والسلام هي مبادرة سياسية مستقلة تهدف إلى بناء جسور التفاهم والحوار بين مختلف أطياف المجتمع. تنطلق المبادرة من إيمان راسخ بأن السلام والتعايش ممكنان من خلال الحوار البناء والاحترام المتبادل.' :
        language === 'he' ?
        'יוזמת גשרים של פיוס ושלום היא יוזמה פוליטית עצמאית שמטרתה לבנות גשרים של הבנה ודיאלוג בין קבוצות שונות בחברה. היוזמה יוצאת מאמונה איתנה שהשלום והדו-קיום אפשריים באמצעות דיאלוג בונה וכבוד הדדי.' :
        'The Bridges of Reconciliation and Peace Initiative is an independent political initiative aimed at building bridges of understanding and dialogue between different segments of society. The initiative stems from a firm belief that peace and coexistence are possible through constructive dialogue and mutual respect.'
    },
    {
      id: 'vision-goals',
      title: t('visionGoals'),
      icon: Target,
      content: language === 'ar' ?
        'رؤيتنا: مجتمع متماسك يسوده العدل والمساواة والاحترام المتبادل.\n\nأهدافنا:\n• تعزيز الحوار بين مختلف الأطراف في المجتمع\n• بناء الثقة والتفاهم المتبادل\n• العمل على حل النزاعات بالطرق السلمية\n• تعزيز قيم التسامح والتعايش\n• المساهمة في بناء مستقبل أفضل للأجيال القادمة' :
        language === 'he' ?
        'החזון שלנו: חברה מגובשת שבה שוררים צדק, שוויון וכבוד הדדי.\n\nהמטרות שלנו:\n• חיזוק הדיאלוג בין קבוצות שונות בחברה\n• בניית אמון והבנה הדדית\n• פעולה לפתרון סכסוכים בדרכי שלום\n• חיזוק ערכי הסובלנות והדו-קיום\n• תרומה לבניית עתיד טוב יותר לדורות הבאים' :
        'Our Vision: A cohesive society where justice, equality, and mutual respect prevail.\n\nOur Goals:\n• Strengthening dialogue between different parties in society\n• Building trust and mutual understanding\n• Working to resolve conflicts through peaceful means\n• Promoting values of tolerance and coexistence\n• Contributing to building a better future for future generations'
    },
    {
      id: 'founder',
      title: t('initiativeFounder'),
      icon: User,
      content: language === 'ar' ?
        'النائب منصور عباس هو رئيس القائمة العربية الموحدة وعضو الكنيست الإسرائيلي. يُعرف بمواقفه المعتدلة ودعوته للحوار والتعايش السلمي. يحمل رؤية واضحة لإمكانية بناء مستقبل مشترك قائم على الاحترام المتبادل والمصالح المشتركة. من خلال هذه المبادرة، يسعى إلى تجسيد هذه الرؤية على أرض الواقع.' :
        language === 'he' ?
        'חבר הכנסת מנסור עבאס הוא ראש הרשימה הערבית המשותפת וחבר הכנסת הישראלי. הוא ידוע בעמדותיו המתונות ובקריאתו לדיאלוג ולדו-קיום בשלום. הוא נושא חזון ברור לאפשרות לבנות עתיד משותף המבוסס על כבוד הדדי ואינטרסים משותפים. דרך יוזמה זו, הוא שואף להגשים חזון זה במציאות.' :
        'MK Mansour Abbas is the head of the Joint Arab List and a member of the Israeli Knesset. He is known for his moderate positions and his call for dialogue and peaceful coexistence. He carries a clear vision of the possibility of building a shared future based on mutual respect and common interests. Through this initiative, he seeks to realize this vision in reality.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('aboutUs')}</h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' ? 'تعرف على مبادرتنا ورؤيتنا للمستقبل' :
             language === 'he' ? 'למד על היוזמה שלנו והחזון שלנו לעתיד' :
             'Learn about our initiative and our vision for the future'}
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.id} className="border-green-100">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-green-600 mr-4" />
                    <CardTitle className="text-2xl text-green-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    {section.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
