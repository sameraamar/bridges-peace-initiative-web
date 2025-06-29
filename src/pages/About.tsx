import React, { useMemo, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Target, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Types for better type safety
interface Section {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  content: string;
}

// Component for rendering each section's content with proper accessibility
const SectionContent: React.FC<{ content: string; isRTL: boolean }> = ({ content, isRTL }) => (
  <div className="prose max-w-none px-4 py-2">
    {content.split('\n\n').map((paragraph, index) => (
      <p key={index} className={cn(
        "text-gray-700 mb-4 leading-relaxed whitespace-pre-line",
        isRTL ? "text-right" : "text-left"
      )}>
        {paragraph}
      </p>
    ))}
  </div>
);

const About: React.FC = () => {
  const { t, language } = useLanguage();

  // Sections data with content for each language
  const sectionsData: Section[] = [
    {
      id: 'introduction',
      title: language === 'ar' ? 'مقدمة' : language === 'he' ? 'דברי פתיחה' : 'Introduction',
      icon: Heart,
      content: language === 'ar' ? 
        `مبادرة جسور التّصالح والسّلام

في هذه الوثيقة نقترح نحن -مواطنين عرب في دولة إسرائيل- رؤية سياسيّة طموحة، لكنّها واقعيّة وعمليّة، لتسوية سلميّة رصينة بين الشّعبين، شعب إسرائيل والشعب الفلسطينيّ. أسمينا الخطّة: "مبادرة جسور التّصالح والسّلام"، التزامًا بواجبنا الإيجابيّ كمجتمع عربيّ في إسرائيل، في جسر الهوّة وتقريب وجهات النّظر والمواقف بين الشّعبين، بالتّعاون مع شركائنا في البلاد، في المنطقة والعالم.

لقد عملنا بشتّى الطرق الممكنة من أجل وقف إطلاق النّار في غزة وعودة المختطفين الإسرائيليّين، ودعمنا تنفيذ كلا الاتّفاقين الجزئيّين. واليوم نؤكّد على ضرورة إلى ما بعد الاتفاق المرحلي وإنهاء الحرب بشكل كامل، وإعادة كافّة المختطفين.

تصف هذه الوثيقة عمليّة متدرّجة تتمّ على مستويين: تسوية بين الشّعوب على المستوى الاجتماعيّ والقيميّ، وبين الحكومات على المستوى السّياسيّ المؤسّسيّ. هي خطّة شاملة لتسوية سياسيّة، تؤدّي إلى إنهاء الصّراع وتمهيد الطّريق للسّلام والمصالحة بين الشّعبين في المنطقة.

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
      title: language === 'ar' ? 'الرؤية والأهداف' : language === 'he' ? 'החזון והמטרות' : 'Vision and Goals',
      icon: Target,
      content: language === 'ar' ?
        `إنّ رؤيتنا في مبادرة جسور التّصالح والسّلام هي الوصول إلى سلام شامل ومستدام، إنهاء الصّراع في الأرض المقدّسة للديانات الثّلاث -اليهوديّة، المسيحيّة، والإسلام-، تحقيق المصالحة بين اليهود والعرب، إقامة الدولة الفلسطينيّة لجانب دولة إسرائيل، وتحقيق السّلام بين الدّولتين، وفق رؤية حلّ الدّولتين وفي إطار الشّرعيّة الدّوليّة. في رؤيتنا أيضًا أن تتوسّع دائرة السّلام بالتّوازي مع عمليّة التّسوية الفلسطينيّة الإسرائيليّة، لتشمل الدّول العربيّة، وفق مبادرة السّلام العربيّة. نرى في المبادرة الطّريقَ لتحقيق حقّ الشّعبين في تقرير المصير، والعيش بسلام وأمن متبادل في شراكة وتسامح.

إنّ توقيت مبادرة جسور التّصالح والسّلام مهمٌّ جدًّا بالذّات في هذه الأيّام، وهو ضروريّ وملحّ في ظلّ تفاقم الأوضاع الصّادمة والمفجعة في العامين الأخيرين. الإسرائيليّون صُدموا في السّابع من أكتوبر في أكبر كارثة في تاريخ إسرائيل، ويشعرون بحرب وجوديّة، ورأي عامّ دوليّ ينقلب ضدّهم، ويبتعدون عن هدف تحقيق الأمن وتأمين الوجود في المنطقة. 

الفلسطينيون فُجعوا بالحرب وبكارثة هي الأكبر في تاريخهم، ويدفعون ثمنًا باهضًا جدًّا في الأرواح، ودمارًا شاملًا في قطاع غزّة. يواجهون خسائر ويتوقّعون مخاطر مستقبليّة كبيرة، ويشعرون بألم كبير، أفرادًّا وجماعة. 

إنّ استمرار الحرب والصّراع واستمرار الأوضاع الحاليّة يهدّد الطّموحات المشروعة للطّرفين في تحقيق الأمن والسّلام وحفظ الوجود وتأمين المستقبل. لذلك، تأتي مبادرة جسور لتؤكّد على أنّ هنالك طريقًا أخرى، يجب أن يسلكها الطّرفان الإسرائيليّ والفلسطينيّ.

إنّ واجبنا -بوصفنا الخاصّ: مواطنين عربًا فلسطينيين في دولة إسرائيل- بذلُ كلّ الجهد والسّعي لتسوية الصراع الدانيّ والخلافات وبناء الثّقة، وإيجاد الأمل بين الشّعبين، وهذا مبنيّ على رؤية عمليّة وليس تمنيات فقط. إنّ مسؤوليّتنا كذلك حشد الدّعم الشّعبيّ الواسع تجاه مشروع المصالحة التّاريخيّة بين الشّعبين. إنّ دورنا مهمّ أيضًا في بثّ روح التّسامح وثقافة السّلام، ونشر قيم الصّلح والسّلم بمعانيها الإنسانيّة والدّينيّة في اليهوديّة، المسيحيّة، والإسلام. 

إنّ استمرار الحرب والصّراع وتفاقم الأوضاع يهدّد أيضًا وجودنا ومكانتنا وحقوقنا، بوصفنا مواطنين عربًا فلسطينيّين في إسرائيل، بشكل مباشر وغير مباشر. ومن جهة أخرى، فإنّ تحقيق التّسوية السّلميّة بين الشّعبين الفلسطينيّ والإسرائيليّ، يحمي وجودنا وحقوقنا ومكانتنا، ويحقّق مصالحنا ويفتح أمامنا آفاقَ واسعةً لتّمكين المجتمع العربيّ، وتعزيز دورنا الخاصّ في دعم مسار المصالحة والسّلام. 

إنّ نهج إدارة الصّراع، والحلول الجزئيّة والمرحليّة، والسّعي إلى الانتصارات العسكريّة المطلقة، وتضييع الفرص، كلّ ذلك قد فشل في تحقيق الأمن والسّلام والكرامة للشّعبين. كما أنّ نهج التّنكّر لحقّ الآخر وتجاهل الصّراع ومحاولات الإخضاع، غذّوا دائرة سفك الدّماء. إنّ استمرار القتال والدّمار عمّق الكراهية والعداء، ولم ولن يجلب حلًّا. فعندما يتعلّق الأمر بصراع بين دولتين، فإنّ نهج "ما لا يتمّ حلّه بالقوّة سيتمّ حلّه بمزيد من القوّة" لا ينجح. إنّه أمر غير أخلاقيّ، وغير واقعيّ أيضًا. لا يمكن أن تصل إلى نتائج مختلفة ومضمونة، عندما تسلك نفس الطّريق المعتاد، وتقوم على خيالات العنف والخضوع، وتتّخذ نفس المواقف المتكرّرة، وتطلق نفس التّصريحات والوعود المتوقّعة. هذا النّهج في التّفكير والسّلوك يبعدنا عن الهدف المنشود في حقن الدّماء وتحقيق الأمن وبناء السّلام في بلادنا.

مبادرة الجسور تقوم على نهج رصين يختلف عن النهج الذي هيمن على منطقتنا منذ عقود. لقد سلكْنا في مبادرة جسور نهجًا جديدًا، يؤسّس لمسار موثوق وشامل، قائم على التّوازن والتّبادليّة، وينطلق من القيم والمبادئ الحاكمة والنّاظمة لعمليّة التّسوية وبناء المصالحة والسّلام. نخاطب الشّعبين اليهوديّ والفلسطينيّ، خطابًا عقلانيًّا إنسانيًّا منصفًا ومسؤولًا في الدّرجة الأولى. نحن المواطنين العرب في إسرائيل نخاطب قيادات الشّعبين والمجتمع الدّوليّ، ليتحمّل الجميع مسؤوليّاتهم تجاه المنطقة وشعوبها. 

مبادرة جسور تؤكّد أنّ التّسوية بين الشّعبين ليست سذاجةً وطهرانيّة، وليست طفرة إيمانيّة بريئة أو خطيرة تنطوي على تنازلات وتفريط في الحقوق، سواءً حقّ تقرير المصير، أم حقّ الدّفاع عن النّفس والوجود. إنّها تسوية نافعة وقابلة للتّنفيذ في الواقع، وهي تعزيز لحقّ الجميع في الحياة والحرّيّة والكرامة، وتهيئة الظّروف للجميع للعيش في سلام وأمن. مبادرة جسور تعطي فرصة لجميع الأطراف للمشاركة في عمليّة نقد الذّات وتحمّل المسؤوليّة، واعتبار عواقب الواقع المفجع والكارثيّ، وتحديد الخيارات الأفضل للشّعوب، وبذل الجهد للتّوصّل إلى حلّ منصف بالوسائل السّلميّة فقط.

إنّ مكاسب الطّرفين المتوقّعة في مبادرة جسور التّصالح والسّلام واضحة وشفّافة، وغير قابلة للتّفاوض والمساومات. هذا الوضوح وهذه الشّفافية ضروريّان، ليقوم كلّ طرف باتّخاذ القرارات والخيارات الصّائبة في بداية مسار التّسوية السّياسيّة. نؤكّد في هذا السّياق جازمين، على أنّ اتّفاق الطّرفين على مكوّنات مبادرة جسور، سيمكّن من التّعامل النّاجح والفعّال مع القضايا المركزيّة التّفصيليّة للاتّفاقيّة النّهائيّة للمصالحة والسّلام، وسيجعلها ممكنة ومتاحة، لأنّنا نوجد الأرضيّة الصلبة والأجواء الإيجابيّة، ونعزّز فرص الاتّفاق حولها.` :
        language === 'he' ?
        `החזון שעומד בבסיס יוזמת גשרים של פיוס ושלום הינו שלום כולל ובר קיימא, סיום הסכסוך בארץ הקדושה לשלוש הדתות -היהדות הנצרות והאסלאם- ופיוס בין היהודים והערבים. חזוננו ביוזמה הקמת מדינה פלסטינית לצד מדינת ישראל וליצור שלום בין שתי המדינות, בהתאם לעקרון פתרון שתי המדינות, ובמסגרת ההחלטות הבינלאומיות. בחזוננו גם, להרחיב מעגל השלום במקביל לתהליך ההסדרה הפלסטינית-ישראלית, שיכלול את המדינות הערביות והעולם הערבי כולו, בהתאם ליוזמת השלום הערבית. יוזמת גשרים מהווה את הדרך למימוש זכותם של שני העמים להגדרה עצמית, ולזכותם לחיות בביטחון הדדי ובשלום, בשותפות ובסובלנות.

יש חשיבות רבה לעיתוי יוזמת גשרים של פיוס ושלום בימים אלה, והוא מקבל משנה תוקף לאור האירועים המזעזעים והטרגיים שהתרחשו בשנתיים האחרונות. הישראלים חוו ב-7 באוקטובר את האסון הגדול בתולדות המדינה, ומבחינתם הם נלחמים במלחמה קיומית. בה בעת, דעת הקהל הבינלאומית פונה נגדם, והם מתרחקים מהמטרה של השגת ביטחון והבטחת קיומם באזור. 

הפלסטינים סבלו גם הם רבות מהמלחמה, עם אסון שהוא הגדול בתולדותיהם, ומשלמים מחיר יקר מאוד בחייהם, רואים הרס מקיף ברצועת עזה, עומדים בפני המשך אבדות גדולות יותר, וחשופים לסיכונים עתידיים גדולים. הם חשים כאב עצום באופן אישי וקולקטיבי. 

המשך המלחמה והסכסוך, וכן שימור המצב הנוכחי, מאיימים על השאיפות הלגיטימיות של הצדדים להשיג ביטחון ושלום, לשמר את הקיום ולהבטיח את העתיד. יוזמת גשרים מראה שיש דרך אחרת שעל הישראלים והפלסטינים ללכת בה. 

חובתנו כאזרחים ערבים פלסטינים במדינת ישראל לעשות כל מאמץ ליישוב את הסכסוכים האלימים והמחלוקות. תפקידנו לסייע לבנות אמון בין הצדדים, וליצור תקווה בין שני העמים, המבוססת על חזון מעשי ולא רק על משאלות לב. משימה נוספת שלקחנו על עצמנו היא לגייס תמיכה ציבורית רחבה לתוכנית הפיוס ההיסטורי בין שני העמים. באפשרותנו לתרום גם להפצת רוח הסובלנות ותרבות השלום, ולהעצים ערכי הפיוס והשלום במשמעויותיהם האנושיות והדתיות ביהדות, בנצרות ובאסלאם.

המשך המלחמה והסכסוך וההסלמה הנוכחית מאיימים על קיומנו, מעמדנו וזכויותינו כאזרחים ערבים פלסטינים בישראל במישרין ובעקיפין. הסדר שלום בין העם הפלסטיני ועם ישראל יגן על קיומנו, זכויותינו ומעמדנו, ויעזור לנו להגשים את האינטרסים שלנו. פיוס ושלום פותחים בפנינו אופקים רחבים להעצמת החברה הערבית, ומעצים את תפקידנו המיוחד בשמירה על יחסי הפיוס והשלום. 

ניהול הסכסוך, פתרונות חלקיים וזמניים, חתירה לניצחונות צבאיים מוחלטים, ואיבוד הזדמנויות חוזרות ונשנות, לא הצליחו להשיג ביטחון, שלום וכבוד לשני העמים. הגישה של שלילת זכויות של אחרים וניסיונות הכנעה רק הזינו את מעגל הדמים. המשך הלחימה וההרס העמיקו את השנאה והעוינות, ולא הביאו – ולא יביאו - מזור. כאשר מדובר בסכסוך בין שני עמים, הגישה של "מה שלא נפתר בכוח, ייפתר בעוד יותר כוח" – אינה עובדת. היא לא מוסרית, והיא גם לא מציאותית. איננו יכולים להגיע לתוצאות שונות כאשר אנו נוקטים באותן עמדות, מתבססים פנטזיות של אלימות והכנעה, ומצהירים את אותן הצהרות ומבטיחים אותן הבטחות. צורת חשיבה זו, והמדיניות הנגזרת ממנה, הרחיקו ומרחיקות אותנו מביטחון ובניית שלום במולדתנו.

יוזמת גשרים מבוססת על גישה אחרת. היא מושתתת על גישה מפוכחת, שונה מגישות ששלטו עשרות שנים באזורנו. נקטנו בגישה הקובעת דרך אמינה ומקיפה, המבוססת על איזון והדדיות, ומבוססת על ערכים ועקרונות מנחים שמסדירים את תהליך ההסדרה ובניית הפיוס והשלום. יוזמת גשרים פונה לשני העמים -היהודי והפלסטיני- בשיח תבוני, אנושי, הוגן ואחראי. דרך היוזמה אנו, האזרחים הערבים בישראל, פונים למנהיגי שני העמים ולקהילה הבינלאומית, כדי שכולם יישאו באחריותם כלפי האזור ועמיו. 

יוזמת גשרים מדגישה כי ההסדר בין שני העמים אינו שאיפה נאיבית וטהרנית, ואינו אמונה תמימה או מסוכנת הכרוכה בוויתורים והזנחת זכויות. זאת, בין אם בזכות להגדרה עצמית ובין אם בזכות להגנה עצמית. מדובר בהסדר יעיל ובר יישום, שמחזק את זכותו של כל אדם לחיים, לחירות ולכבוד, ויוצר תנאים לשני הצדדים לחיות בביטחון ובשלום. יוזמת גשרים מעניקה הזדמנות לכל הצדדים להשתתף בתהליך הביקורת העצמית, לקחת אחריות, לשקול את ההשלכות של המציאות המרה, ולבחור את האפשרויות הטובות ביותר עבור שני העמים, ולעשות מאמץ להגיע לפתרון הוגן בדרכי שלום בלבד.

ההישגים הצפויים של שני הצדדים על פי יוזמת גשרים לפיוס ושלום הם ברורים, שקופים ואינם ניתנים למשא ומתן אן לסחטנות. הבהירות והשקיפות ביוזמה חיוניות לכל צד על מנת לקבל את ההחלטות הנכונות ולבחור בדרך ראויה בתחילת תהליך ההסדר המדיני. בהקשר זה, אנו מדגישים כי הסכמת שני הצדדים על מרכיבי יוזמת גשרים תאפשר התמודדות מוצלחת ואפקטיבית יותר עם הנושאים המרכזיים של ההסכם המפורט והסופי לפיוס ושלום. זה יהפוך את ההסכם הכולל לאפשרי ובר השגה, בהיותה יוזמת גשרים יוצרת קרקע מוצקה ואווירה חיובית, ומשפרת את הסיכויים להסכמה על נושאי הסדר הקבע.` :
        `The vision that underlies the Bridges Initiative is comprehensive and lasting peace, ending the conflict in the Holy Land - sacred to three religions: Judaism, Christianity, and Islam - and achieving reconciliation between Jews and Arabs. Our vision includes establishing a Palestinian state alongside Israel and achieving peace between the two states, in accordance with the two-state solution principle and within the framework of international law.

Our vision also includes expanding the circle of peace in parallel with the Palestinian-Israeli settlement process to include Arab countries, in accordance with the Arab Peace Initiative. The Bridges Initiative represents the path to realizing both peoples' right to self-determination and their right to live in mutual security and peace, in partnership and tolerance.

The timing of the Bridges Initiative is critically important, especially given the shocking and tragic events of the past two years. Israelis were stunned on October 7th by the largest disaster in Israel's history, perceiving an existential war while international public opinion turns against them, moving further from the goal of achieving security and ensuring their existence in the region.

Palestinians have been devastated by the war and their greatest historical catastrophe, paying an extremely heavy toll in lives and comprehensive destruction in Gaza. They face losses and expect major future risks, feeling profound pain both individually and collectively.

The continuation of war, conflict and current conditions threatens both parties' legitimate aspirations for security, peace, preserving existence and ensuring the future. Therefore, the Bridges Initiative affirms there is another path that both Israeli and Palestinian parties must take.

Our duty - in our unique position as Palestinian Arab citizens of Israel - is to make every effort to resolve the immediate conflict and disputes, build trust, and create hope between the peoples, based on practical vision not just wishes. Our responsibility includes mobilizing broad public support for the historic reconciliation project between the peoples. Our role is also important in spreading the spirit of tolerance and culture of peace, and promoting reconciliation values in their human and religious meanings in Judaism, Christianity and Islam.

The continuation of war, conflict and deteriorating conditions also threatens our existence, status and rights as Palestinian Arab citizens of Israel, both directly and indirectly. On the other hand, achieving peaceful settlement between the Palestinian and Israeli peoples protects our existence, rights and status, serves our interests and opens broad horizons for empowering Arab society and enhancing our special role in supporting the path of reconciliation and peace.

The conflict management approach, partial and interim solutions, pursuit of absolute military victories, and missed opportunities have all failed to achieve security, peace and dignity for both peoples. The approach of denying others' rights, ignoring the conflict and attempts at subjugation have fed the cycle of bloodshed. Continued fighting and destruction have deepened hatred and hostility, and have not and will not bring a solution. When it comes to conflict between two peoples, the approach that "what cannot be resolved by force will be resolved by more force" does not succeed. It is both unethical and unrealistic. You cannot achieve different and guaranteed results when taking the same familiar path, based on fantasies of violence and submission, adopting the same repeated positions, and making the same expected declarations and promises. This approach in thinking and behavior takes us further from the desired goal of stopping bloodshed and achieving security and peace in our land.

The Bridges Initiative is based on a sober approach different from what has dominated our region for decades. In the Bridges Initiative we have taken a new approach, establishing a reliable and comprehensive path based on balance and reciprocity, proceeding from governing values and principles regulating the process of settlement and building reconciliation and peace. We address the Jewish and Palestinian peoples with rational, humane, fair and responsible discourse first and foremost. We Arab citizens in Israel address the leaders of both peoples and the international community, so all bear their responsibilities toward the region and its peoples.

The Bridges Initiative emphasizes that settlement between the peoples is not naive or utopian, nor a dangerous leap of faith involving concessions and neglect of rights, whether the right to self-determination or the right to self-defense and existence. It is a beneficial and implementable settlement in reality, enhancing everyone's right to life, liberty and dignity, and creating conditions for all to live in peace and security. The Bridges Initiative gives all parties an opportunity to participate in self-criticism and taking responsibility, considering the consequences of the tragic catastrophic reality, determining the best options for peoples, and making efforts to reach a fair solution by peaceful means only.

The expected gains for both parties in the Bridges Reconciliation and Peace Initiative are clear and transparent, and non-negotiable. This clarity and transparency are necessary for each party to make the right decisions and choices at the start of the political settlement process. We emphasize decisively in this context that agreement of both parties on the components of the Bridges Initiative will enable successful and effective handling of the detailed central issues of the final reconciliation and peace agreement, and make them possible and available, because we create solid ground and positive atmosphere, and enhance chances of agreement around them.`
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

  // Memoize the sections data to prevent unnecessary recalculations
  const sections = useMemo(() => sectionsData, [language]);

  // Extract the title text based on language for reuse
  const titleText = useMemo(() => ({
    title: t('aboutUs'),
    subtitle: language === 'ar' ? 'تعرف على مبادرتنا ورؤيتنا للمستقبل' :
             language === 'he' ? 'למד על היוזמה שלנו והחזון שלנו לעתיד' :
             'Learn about our initiative and our vision for the future',
    contents: ''
  }), [language, t]);

  // Update document title when language changes
  useEffect(() => {
    document.title = `${titleText.title} | Bridges Peace Initiative`;
  }, [titleText.title]);

  return (
    <div className="min-h-screen bg-white py-12 scroll-smooth" role="main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{titleText.title}</h1>
          <p className="text-xl text-gray-600">{titleText.subtitle}</p>
        </div>

        <div className={cn("space-y-6", language === 'ar' || language === 'he' ? "text-right" : "text-left")}>

          {/* Main Content */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24 mb-4">
              <Accordion type="single" collapsible>
                <AccordionItem value={section.id}>
                  <AccordionTrigger className="hover:no-underline" aria-label={section.title}>
                    <div className={cn(
                      "flex items-center gap-4 w-full",
                      language === 'ar' || language === 'he' ? "flex-row-reverse justify-end" : "flex-row justify-start"
                    )}>
                      <section.icon className="h-6 w-6 text-green-600" />
                      <h2 className="text-2xl font-semibold text-green-900">{section.title}</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SectionContent 
                      content={section.content}
                      isRTL={language === 'ar' || language === 'he'}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
