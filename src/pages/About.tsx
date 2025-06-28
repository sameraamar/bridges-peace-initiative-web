import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      id: 'introduction',
      title: language === 'ar' ? 'مقدمة' : language === 'he' ? 'דברי פתיחה' : 'Introduction',
      icon: Heart,
      content: language === 'ar' ? 
        `مبادرة جسور التّصالح والسّلام

في هذه الوثيقة نقترح نحن -مواطنين عرب في دولة إسرائيل- رؤية سياسيّة طموحة، لكنّها واقعيّة وعمليّة، لتسوية سلميّة رصينة بين الشّعبين، شعب إسرائيل والشعب الفلسطينيّ. أسمينا الخطّة: "مبادرة جسور التّصالح والسّلام"، التزامًا بواجبنا الإيجابيّ كمجتمع عربيّ في إسرائيل، في جسر الهوّة وتقريب وجهات النّظر والمواقف بين الشّعبين، بالتّعاون مع شركائنا في البلاد، في المنطقة والعالم.

لقد عملنا بشتّى الطرق الممكنة من أجل وقف إطلاق النّار في غزة وعودة المختطفين الإسرائيليّين، ودعمنا تنفيذ كلا الاتّفاقين الجزئيّين. واليوم نؤكّد على ضرورة إلى ما بعد الاتفاق المرحلي وإنهاء الحرب بشكل كامل، وإعادة كافّة المختطفين.

تصف هذه الوثيقة عمليّة متدرّجة تتمّ على مستويين: تسوية بين الشّعوب على المستوى الاجتماعيّ والقيميّ، وبين الحكومات على المستوى السّياسيّ المؤسّسيّ. هي خطّة شاملة لتسوية سياسيّة، تؤدّي إلى إنهاء الصّراع وتمهيد الطّريق للسّلام والمصالحة بين الشّعبين وفي المنطقة.

تتكوّن مبادرة جسور المصالحة والسّلام من ثلاثة مكوّنات: الرّؤية، القيم والمبادئ، وإطار الخطّة التّنفيذيّة. هي دعوة للحوار والتّعارف من جديد بين الشّعبين وداخلهما، وفيها أملٌ وطريقٌ جديدة للخروج من الأزمة وخلق فرصة جديدة لبناء الثّقة وللمصالحة والسّلام. نحن ندعو ونحثّ الجانبين على اعتماد المركّبات الثّلاثة للمبادرة، وبالتّالي إطلاق المسار نحو التّسوية السّياسيّة.` :
        language === 'he' ?
        `יוזמת גשרים של פיוס ושלום

במסמך זה אנו ,אזרחים ערבים במדינת ישראל, מציעים חזון מדיני שאפתני, אך ריאלי ומעשי, להסדר שלום מפוכח בין שני העמים, עם ישראל והעם הפלסטיני. קראנו לתוכנית: "יוזמת גשרים של פיוס ושלום" מתוך מחויבות לגבי תפקידנו החיובי כחברה ערבית בתוך מדינת ישראל, בגישור על הפערים ובקירוב נקודות המבט והעמדות בין שני העמים, וזאת בשותפות עם תומכים בארץ, באזור ובעולם.

פעלנו במרץ במגוון דרכים להשגת הפסקת אש בעזה ולהחזרת החטופים הישראליים. תמכנו בישום מלא של שני ההסכמים החלקיים, והיום אנו מדגישים את ההכרח בהליכה אל מעבר למימוש "שלב ב", אל הפסקת המלחמה והשבת כל החטופים.

מסמך זה מתאר תהליך שלבי המתנהל במקביל בשני מישורים: מתווה בין העמים במישור החברתי-ערכי, ובין הממשלות במישור הפוליטי-מוסדי. זוהי תכנית מקיפה להסדר מדיני המסיים את הסכסוך, ומכונן שלום ופיוס בין שני העמים - ובאזור כולו.

יוזמת גשרים של פיוס ושלום מורכבת משלושה מרכיבים: החזון, הערכים והעקרונות, ומסגרת התוכנית הביצועית. זוהי קריאה לדיאלוג ולהיכרות חדשה בין ובתוך שני העמים, וגם תקווה ודרך חדשה לצאת מהמשבר וליצור הזדמנות חדשה לבניית אמון, פיוס ושלום. אנו מצפים וקוראים לשני הצדדים לאמץ את שלושת המרכיבים, ולהגיע להסדר מדיני, לשלום בין המדינות ולפיוס בין העמים.` :
        `Bridges of Reconciliation and Peace Initiative

In this document, we, Arab citizens of the State of Israel, propose an ambitious yet realistic and practical political vision for a peaceful settlement between the two peoples: the people of Israel and the Palestinian people. We named it, the "Bridges of Reconciliation and Peace Initiative", driven by our commitment as an Arab society within the State of Israel to bridge the gaps and bring the viewpoints and positions of the two peoples closer together, in partnership with supporters in Israel, the region, and around the world.

We have worked vigorously through various channels to achieve a ceasefire in Gaza and the return of the Israeli abductees. We have supported the full implementation of the two partial agreements, and today we emphasize the necessity of moving beyond "Phase Two" to stop the war completely and return of all abductees.

This document outlines a process taking place on two levels: a social value-based level between the peoples and a political institution-based level between the governments. This is a comprehensive plan for a political settlement that aims to end the conflict and establish peace and reconciliation between both peoples—and throughout the entire region.

The Bridges of Reconciliation and Peace Initiative consists of three components: the vision, the values and principles, and the framework for the implementation plan. This serves as a call for dialogue and a renewed understanding between and within the two peoples, as well as a hopeful path out of the crisis and an opportunity to build trust, reconciliation, and peace.

We expect and urge both sides to embrace these three components to achieve a political settlement, foster peace between the peoples, and promote reconciliation between societies.`
    },
    {
      id: 'vision-goals',
      title: language === 'ar' ? 'الرؤية والأهداف' : language === 'he' ? 'החזון' : 'Vision and Goals',
      icon: Target,
      content: language === 'ar' ?
        `إنّ رؤيتنا في مبادرة جسور التّصالح والسّلام هي الوصول إلى سلام شامل ومستدام، إنهاء الصّراع في الأرض المقدّسة للديانات الثّلاث -اليهوديّة، المسيحيّة، والإسلام-، تحقيق المصالحة بين اليهود والعرب، إقامة الدولة الفلسطينيّة لجانب دولة إسرائيل، وتحقيق السّلام بين الدّولتين، وفق رؤية حلّ الدّولتين وفي إطار الشّرعيّة الدّوليّة. في رؤيتنا أيضًا أن تتوسّع دائرة السّلام بالتّوازي مع عمليّة التّسوية الفلسطينيّة الإسرائيليّة، لتشمل الدّول العربيّة، وفق مبادرة السّلام العربيّة. نرى في المبادرة الطّريقَ لتحقيق حقّ الشّعبين في تقرير المصير، والعيش بسلام وأمن متبادل في شراكة وتسامح.

إنّ توقيت مبادرة جسور التّصالح والسّلام مهمٌّ جدًّا بالذّات في هذه الأيّام، وهو ضروريّ وملحّ في ظلّ تفاقم الأوضاع الصّادمة والمفجعة في العامين الأخيرين. الإسرائيليّون صُدموا في السّابع من أكتوبر في أكبر كارثة في تاريخ إسرائيل، ويشعرون بحرب وجوديّة، ورأي عامّ دوليّ ينقلب ضدّهم، ويبتعدون عن هدف تحقيق الأمن وتأمين الوجود في المنطقة.

الفلسطينيون فُجعوا بالحرب وبكارثة هي الأكبر في تاريخهم، ويدفعون ثمنًا باهضًا جدًّا في الأرواح، ودمارًا شاملًا في قطاع غزّة. يواجهون خسائر ويتوقّعون مخاطر مستقبليّة كبيرة، ويشعرون بألم كبير، أفرادًّا وجماعة.

إنّ استمرار الحرب والصّراع واستمرار الأوضاع الحاليّة يهدّد الطّموحات المشروعة للطّرفين في تحقيق الأمن والسّلام وحفظ الوجود وتأمين المستقبل. لذلك، تأتي مبادرة جسور لتؤكّد على أنّ هنالك طريقًا أخرى، يجب أن يسلكها الطّرفان الإسرائيليّ والفلسطينيّ.` :
        language === 'he' ?
        `החזון שעומד בבסיס יוזמת גשרים של פיוס ושלום הינו שלום כולל ובר קיימא, סיום הסכסוך בארץ הקדושה לשלוש הדתות -היהדות הנצרות והאסלאם- ופיוס בין היהודים והערבים. חזוננו ביוזמה הקמת מדינה פלסטינית לצד מדינת ישראל וליצור שלום בין שתי המדינות, בהתאם לעקרון פתרון שתי המדינות, ובמסגרת ההחלטות הבינלאומיות. בחזוננו גם, להרחיב מעגל השלום במקביל לתהליך ההסדרה הפלסטינית-ישראלית, שיכלול את המדינות הערביות והעולם הערבי כולו, בהתאם ליוזמת השלום הערבית. יוזמת גשרים מהווה את הדרך למימוש זכותם של שני העמים להגדרה עצמית, ולזכותם לחיות בביטחון הדדי ובשלום, בשותפות ובסובלנות.

יש חשיבות רבה לעיתוי יוזמת גשרים של פיוס ושלום בימים אלה, והוא מקבל משנה תוקף לאור האירועים המזעזעים והטרגיים שהתרחשו בשנתיים האחרונות. הישראלים חוו ב-7 באוקטובר את האסון הגדול בתולדות המדינה, ומבחינתם הם נלחמים במלחמה קיומית. בה בעת, דעת הקהל הבינלאומית פונה נגדם, והם מתרחקים מהמטרה של השגת ביטחון והבטחת קיומם באזור.

הפלסטינים סבלו גם הם רבות מהמלחמה, עם אסון שהוא הגדול בתולדותיהם, ומשלמים מחיר יקר מאוד בחייהם, רואים הרס מקיף ברצועת עזה, עומדים בפני המשך אבדות גדולות יותר, וחשופים לסיכונים עתידיים גדולים. הם חשים כאב עצום באופן אישי וקולקטיבי.

המשך המלחמה והסכסוך, וכן שימור המצב הנוכחי, מאיימים על השאיפות הלגיטימיות של הצדדים להשיג ביטחון ושלום, לשמר את הקיום ולהבטיח את העתיד. יוזמת גשרים מראה שיש דרך אחרת שעל הישראלים והפלסטינים ללכת בה.` :
        `The vision that underlies the Bridges Initiative is one of comprehensive and lasting peace, marking an end to the conflict in the Holy Land, which is significant to the three religions: Judaism, Christianity, and Islam. Our vision for the Bridges Initiative advocates for the establishment of a Palestinian state alongside the State of Israel, fostering peace between the two states in accordance with the principle of a two-state solution and within the framework of international resolutions.

Our vision also includes expanding the circle of peace in parallel with the Palestinian-Israeli settlement process, which will include the Arab countries and the entire Arab world, in accordance with the Arab Peace Initiative.

The initiative represents a path to realizing the right of both peoples to self-determination and their right to live in mutual security and peace, in partnership and tolerance.

The timing of the Bridges Initiative is critically important, especially in light of the shocking and tragic events that have transpired over the past two years. On October 7, the people of Israel experienced the most significant disaster in the history of the state, perceiving it as an existential war. Simultaneously, international public opinion has begun to turn against Israel, complicating the nation's efforts to achieve security and ensure its existence in the region.

The Palestinian people have also suffered tremendously as a result of the war and the biggest disaster in their history. They bear a heavy toll in terms of lives lost and widespread destruction in the Gaza Strip. Facing even greater losses and future risks, they endure profound pain, both individually and collectively.

The continuation of conflict or the maintenance of the status quo jeopardizes the legitimate aspirations of both parties to achieve security and peace. The Bridges Initiative illustrates that there exists an alternative path for both Israelis and Palestinians—one that can lead to a reconciled future.`
    },
    {
      id: 'founder',
      title: language === 'ar' ? 'صاحب المبادرة: النائب د. منصور عباس' : language === 'he' ? 'היוזם: ח"כ ד"ר מנסור עבאס, יו"ר רע"מ' : 'The initiator: Member of Knesset Mansour Abbas, Chairman of the United Arab List (Ra\'am)',
      icon: User,
      content: language === 'ar' ?
        `هو رئيس القائمة العربية الموحدة، الذراع السياسية للحركة الإسلامية في إسرائيل.

مواليد 1974، من مدينة المغار، متزوج وأب لثلاثة. انتخب لأول مرة في الكنيست في نيسان 2019.

بين الأعوام (1997-1998) خلال دراسته طب الأسنان في الجامعة العبرية في القدس قاد تحالفًا طلابيًّا وانتخب رئيسًا للجنة الطلاب العرب في الجامعة، وخلال دراسته أتمّ حفظ القرآن الكريم كاملًا.

عام 2001 أسّس مع زملاء له مؤسسة القلم، الذراع الطلابية الشبابية للحركة الإسلامية، وأصبح مديرها الأول.

شغل رئيسًا للمؤتمر العام في الحركة الإسلامية، ورئيسًا للإدارة العامة للحركة الإسلامية، ونائبًا لرئيسها من عام 2010 حتى دخوله البرلمان.

كان مندوبًا للحركة الإسلامية في لجنة المتابعة العليا للجماهير العربية في إسرائيل وساهم في إعداد نظامها الداخلي، وكانت له، مع قيادات في لجنة المتابعة، محاولات جادّة للتوفيق والمصالحة الفلسطينية- الفلسطينية.

شغل في السابق نائبًا لرئيس الكنيست، ورئيسًا للجنة البرلمانية الخاصة لمكافحة الجريمة في المجتمع العربي في إسرائيل، ورئيسًا للجنة البرلمانية الخاصة لقضايا المجتمع العربي.

قاد القائمة العربية الموحدة لتكون أول قائمة عربية تدخل الائتلاف الحكومي في دولة إسرائيل، مقابل إنجازات كبيرة في شتى المجالات لصالح المجتمع العربي على اختلاف انتماءاته.

اختارته إذاعة الشمس ليكون شخصية العام 2018 في مجال الإصلاح والخطاب الوسطي والوحدوي الجامع في المجتمع العربي في إسرائيل.

صنّفته صحيفة "ذي ماركر" في آب 2021 على أنه الشخصية الأولى عربيًا، والثامنة على مستوى دولة إسرائيل، الأكثر تأثيرًا.` :
        language === 'he' ?
        `יושב־ראש רשימת רע"מ (הרשימה הערבית המאוחדת) – הזרוע הפוליטית של התנועה האסלאמית בישראל.

נולד בשנת 1974 במג'אר, נשוי ואב לשלושה. נבחר לראשונה לכנסת באפריל 2019.

בשנים 1997–1998, במהלך לימודי רפואת שיניים באוניברסיטה העברית בירושלים, עמד בראש ברית סטודנטים ונבחר ליו"ר ועדת הסטודנטים הערבים. באותה תקופה השלים גם את שינון הקוראן כולו.

בשנת 2001 ייסד יחד עם שותפים את עמותת "אל־קַלַם", הזרוע הסטודנטיאלית־הצעירה של התנועה האסלאמית, ושימש מנהלה הראשון.

בהמשך כיהן כיושב־ראש הוועידה הכללית של התנועה האסלאמית, כראש ההנהלה הארצית שלה, וכסגן ראש התנועה האסלאמית בשנים 2010–2019, עד כניסתו לכנסת.

ייצג את התנועה האסלאמית בוועדת המעקב העליונה של הציבור הערבי בישראל, לקח חלק בגיבוש תקנונה הפנימי, ופעל יחד עם מנהיגים נוספים מהחברה הערבית לקידום יוזמות פיוס ואחדות בזירה הפלסטינית.

במהלך כהונתו בכנסת כיהן כסגן יו"ר הכנסת, כיו"ר הוועדה הפרלמנטרית למאבק בפשיעה ובאלימות בחברה הערבית, וכיו"ר הוועדה הפרלמנטרית לענייני החברה הערבית.

בהובלתו, הפכה רע"מ לרשימה הערבית הראשונה שנכנסה לקואליציה ממשלתית בישראל – מהלך שהוביל להשגת הישגים משמעותיים עבור הציבור הערבי בישראל, על כלל מרכיביו.

בשנת 2018 נבחר לדמות השנה על־ידי רדיו אל-שמס, בזכות תרומתו לקידום שיח מתון ומאחד בחברה הערבית.

באוגוסט 2021 דורג במקום הראשון בקרב הציבור הערבי ובמקום השמיני בכלל במדינה ברשימת הדמויות המשפיעות ביותר של עיתון "דה מרקר".` :
        `He is the chairman of the United Arab List (Ra'am), the political wing of the Islamic Movement in Israel.

Born in 1974 in the city of Maghar, he is married and a father of three. He was first elected to the Knesset in April 2019.

In 1997–1998, while studying dentistry at the Hebrew University of Jerusalem, he led a student coalition and was elected chairman of the Arab Students' Committee at the university. During his studies, he also completed the memorization of the entire Qur'an.

In 2001, together with colleagues, he founded the Al-Qalam organization—the student and youth wing of the Islamic Movement—and served as its first director.

He later served as president of the General Conference of the Islamic Movement, head of its national executive board, and deputy head of the movement from 2010 until his entry into the Knesset.

He represented the Islamic Movement on the High Follow-Up Committee for Arab Citizens of Israel, contributed to drafting its internal regulations, and worked with other leaders to promote serious efforts toward Palestinian–Palestinian reconciliation.

During his time in the Knesset, he served as Deputy Speaker, Chairman of the Special Parliamentary Committee on Combating Crime in Arab Society, and Chairman of the Special Committee on Arab Society Affairs.

Under his leadership, Ra'am became the first Arab party to join a governing coalition in the State of Israel, achieving significant accomplishments across various fields for the benefit of Arab society in all its diversity.

In 2018, Radio A-Shams named him "Person of the Year" in recognition of his role in promoting reform, moderate discourse, and unity within Arab society in Israel.

In August 2021, The Marker ranked him the most influential Arab figure and the eighth most influential figure overall in Israel.`
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
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
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
