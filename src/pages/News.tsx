import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (id: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const newsItems = [].concat([
    {
      id: 1,
      title: language === 'ar' ? 'النائب منصور عباس يقدّم للإسرائيليين وللفلسطينيين وللدول العربية "مبادرة جسور التصالح والسلام"' :
             language === 'he' ? 'ח"כ מנסור עבאס מציג "יוזמת גשרים של פיוס ושלום" בפני ישראל והפלסטינים ומדינות ערב' :
             'MK Mansour Abbas Presents the "Bridges of Reconciliation and Peace Initiative" to Israel, the Palestinians, and Arab States',
      subtitle: language === 'ar' ? 'النائب منصور عباس أرسل مبادرته للقمة العربية الطارئة في القاهرة والتي تهدف إلى وقف الحرب بشكل دائم وفتح أفق لمسار تسوية سياسية سلمية بين الإسرائيليين والفلسطينيين' :
                language === 'he' ? 'ח"כ עבאס שלח את יוזמתו גם לפסגה הערבית הדחופה בקהיר. מטרת היוזמה להביא להפסקת המלחמה והחזרת כל החטופים, ולפתיחת אופק להסדר מדיני של שלום בין ישראלים לפלסטינים.' :
                'MK Abbas has also submitted the initiative to the emergency Arab League summit in Cairo. Its goal is to end the war, secure the release of all hostages, and open a path toward a political peace settlement between Israelis and Palestinians.',
      date: '2025-03-03',
      category: language === 'ar' ? 'إعلان' : language === 'he' ? 'הודעה' : 'Announcement',
      author: language === 'ar' ? 'النائب منصور عباس' : language === 'he' ? 'ח"כ מנסור עבאס' : 'MK Mansour Abbas',
      excerpt: language === 'ar' ? 
        'وجّه رئيس القائمة العربية الموحدة النائب د. منصور عباس، الإثنين 3/3/2025 رسالة إلى القمة العربية الطارئة في القاهرة، يدعو فيها إلى ضرورة الانتقال إلى الفعل والمبادرة وتحمل المسؤولية تجاه الأزمة الكارثية التي يمر بها قطاع غزة في ظل الحرب ومع ازدياد مخاطر عودة استئنافها.' :
        language === 'he' ?
        'יושב ראש רשימת רע"מ, ח"כ ד"ר מנסור עבאס, פנה יום שני 3/3/2025, בפנייה רשמית לפסגה הערבית הדחופה בקהיר, בקריאה לעבור למעשים ולנקיטת יוזמות ולנטילת אחריות מול המשבר הקטסטרופלי שפוקד את רצועת עזה לנוכח המלחמה והסכנות הגוברות של חידושה.' :
        'Chairman of the United Arab List (Ra\'am), MK Dr. Mansour Abbas, made an official appeal on Monday, March 3, 2025, to the emergency Arab League summit held in Cairo, calling for concrete action, responsible leadership, and bold initiatives in response to the catastrophic crisis in Gaza amid ongoing war and the growing risk of escalation.',
      fullExcerpt: language === 'ar' ?
        'وجّه رئيس القائمة العربية الموحدة النائب د. منصور عباس، الإثنين 3/3/2025 رسالة إلى القمة العربية الطارئة في القاهرة، يدعو فيها إلى ضرورة الانتقال إلى الفعل والمبادرة وتحمل المسؤولية تجاه الأزمة الكارثية التي يمر بها قطاع غزة في ظل الحرب ومع ازدياد مخاطر عودة استئنافها.\n\nووضع النائب منصور عباس على طاولة القمة العربية والجامعة العربية مبادرته السياسية "مبادرة جسور التصالح والسلام" التي تم بلورتها خلال العام الأخير والتي تهدف إلى وقف الحرب بشكل دائم وفتح أفق لمسار تسوية سياسية سلمية بين الإسرائيليين والفلسطينيين.\n\n‏وجاء في رسالة النائب منصور عباس: "بوصفنا عربًا فلسطينيّين مواطنين في دولة إسرائيل، نقدم في هذه المبادرة خطة شاملة لتسوية سياسيّة بين الإسرائيليّين والفلسطينيّين. تبدأ المبادرة بخطة تعالج الأزمة الراهنة بوقف الحرب والتوصل لهدنة دائمة وعودة المختطفين، وتتقدم في مسار التسوية السّياسيّة السّلميّة، بناء على رؤية عليا وقيم ومبادئ أساسيّة ناظمة وحاكمة، ووفق إطار تنفيذيّ متدرج ومتداخل، وصولًا لتحقيق الهدف وهو: إحلال السّلام والمصالحة بين الشعبين، وقيام الدّولة الفلسطينية المستقلة ذات السيادة إلى جانب دولة إسرائيل، وفق رؤية حلّ الدّولتين ومبادرة السّلام العربيّة."' :
        language === 'he' ?
        'יושב ראש רשימת רע"מ, ח"כ ד"ר מנסור עבאס, פנה יום שני 3/3/2025, בפנייה רשמית לפסגה הערבית הדחופה בקהיר, בקריאה לעבור למעשים ולנקיטת יוזמות ולנטילת אחריות מול המשבר הקטסטרופלי שפוקד את רצועת עזה לנוכח המלחמה והסכנות הגוברות של חידושה.\n\nח"כ מנסור עבאס הניח על שולחן הפסגה הערבית והליגה הערבית את יוזמתו המדינית, "יוזמת גשרים של פיוס ושלום", שעוצבה על ידיו במהלך השנה האחרונה ומטרתה להביא להפסקת המלחמה באופן קבוע ולהחזיר את כל החטופים ולפתיחת אופק להסדר מדיני של שלום בין ישראלים לפלסטינים.\n\nבמכתבו כתב ח"כ עבאס: "כערבים פלסטינים אזרחי מדינת ישראל, אנו מציגים ביוזמה זו תוכנית מקיפה להסדר מדיני בין ישראלים לפלסטינים. היוזמה מתחילה בתוכנית שמטפלת במשבר הנוכחי באמצעות הפסקת המלחמה, השגת הפסקת אש קבועה והשבת החטופים, ומתקדמת במסלול של הסדר מדיני בדרכי שלום, על בסיס חזון עליון ועקרונות יסוד מנחים, במסגרת תהליך יישומי הדרגתי ומשולב, עד להגשמת היעד: הבאת שלום ופיוס בין העמים, והקמת מדינה פלסטינית עצמאית וריבונית לצד מדינת ישראל, בהתאם לחזון פתרון שתי המדינות ויוזמת השלום הערבית."' :
        'Chairman of the United Arab List (Ra\'am), MK Dr. Mansour Abbas, made an official appeal on Monday, March 3, 2025, to the emergency Arab League summit held in Cairo, calling for concrete action, responsible leadership, and bold initiatives in response to the catastrophic crisis in Gaza amid ongoing war and the growing risk of escalation.\n\nMK Abbas formally submitted his political initiative, the "Bridges of Reconciliation and Peace Initiative," which he developed over the past year. The plan aims to bring about a permanent end to the war, ensure the release of all hostages, and launch a political process leading to a peaceful resolution of the Israeli-Palestinian conflict.\n\nIn his letter to the summit, MK Abbas wrote: "As Arab Palestinians who are citizens of the State of Israel, we present this initiative as a comprehensive framework for a political agreement between Israelis and Palestinians. The initiative begins by addressing the current crisis through an immediate and permanent ceasefire and the return of all hostages, and moves forward toward a peaceful political agreement based on a clear vision and guiding principles. It proposes a gradual and integrated implementation process leading to the ultimate goal: achieving reconciliation and peace between the two peoples, and establishing an independent and sovereign Palestinian state alongside the State of Israel, in accordance with the two-state solution and the Arab Peace Initiative."',
      youtubeId: '0LS3l1dgqqc',
      videoTitle: language === 'ar' ? 'النائب منصور عباس يسلّم يوم الإثنين 3/3/2025 رئيس الحكومة الإسرائيلية بنيامين نتنياهو وثيقة "مبادرة جسور التصالح والسلام" ويعرض في خطابه في الكنيست أبرز محاورها أمام الوزراء وأعضاء الكنيست' :
                   language === 'he' ? 'ח״כ מנסור עבאס העביר יום שני 3/3/2025 במליאת הכנסת לרה"מ נתניהו את מסמך היוזמה שלו "גשרים של פיוס ושלום" והציג את מטרותיה בפני השרים וחברי הכנסת במליאה.' :
                   'On Monday, March 3, 2025, MK Mansour Abbas presented his "Bridges of Reconciliation and Peace Initiative" to Prime Minister Benjamin Netanyahu during a Knesset plenary session. He outlined the goals of the initiative to ministers and fellow members of the Knesset.'
    },
    {
      id: 2,
      title: language === 'ar' ? 'الموحّدة تُطلع الأحزاب العربية الفاعلة في إسرائيل ورؤساء السلطات المحلية العربية على مبادرة جسور التصالح والسلام' :
             language === 'he' ? 'רע"מ מציגה בפני המפלגות וראשי הרשויות הערביות את יוזמת גשרים לפיוס ושלום' :
             'Ra\'am Presents the Bridges of Reconciliation and Peace Initiative to Arab Parties and Local Arab Leadership in Israel',
      date: '2025-03-11',
      imageUrl: `${import.meta.env.BASE_URL}jusorImage.png`,
      category: language === 'ar' ? 'اجتماع' : language === 'he' ? 'פגישה' : 'Meeting',
      author: language === 'ar' ? 'القائمة العربية الموحدة' : language === 'he' ? 'רע"מ' : 'Ra\'am',
      excerpt: language === 'ar' ?
        'وجّهت القائمة العربية الموحدة، الثلاثاء 11-3-2025، رسالة للأحزاب العربية ولرؤساء السلطات المحلية العربية تتضمن مقترحًا عمليًا قدّمت فيه رؤية سياسية شاملة لمواجهة المخاطر والتحدّيات التي يواجهها المجتمع العربي، والشعب الفلسطيني، نتيجة السياسات والقرارات العنصرية لحكومة نتنياهو سموترتش وبن غڤير، كما طرحت أمامهم "مبادرة جسور التصالح والسلام"' :
        language === 'he' ?
        'המפלגה הערבית המאוחדת (רע"מ) שלחה ביום שלישי, 11.3.2025, מסר למפלגות הערביות ולראשי הרשויות המקומיות הערביות, שבו הציגה הצעה מעשית הכוללת חזון פוליטי כולל להתמודדות עם הסכנות והאתגרים העומדים בפני החברה הערבית והעם הפלסטיני – כתוצאה ממדיניות הממשלה הנוכחית בראשות נתניהו, סמוטריץ\' ובן גביר.' :
        'On Tuesday, March 11, 2025, the United Arab List (Ra\'am) addressed a formal message to Arab political parties and heads of Arab local authorities in Israel. The message included a practical proposal and a comprehensive political vision for addressing the escalating threats and challenges facing Arab society in Israel and the Palestinian people — challenges brought about by the policies of the current Netanyahu-Smotrich-Ben Gvir government.',
      fullExcerpt: language === 'ar' ?
        'وجّهت القائمة العربية الموحدة، الثلاثاء 11-3-2025، رسالة للأحزاب العربية ولرؤساء السلطات المحلية العربية تتضمن مقترحًا عمليًا قدّمت فيه رؤية سياسية شاملة لمواجهة المخاطر والتحدّيات التي يواجهها المجتمع العربي، والشعب الفلسطيني، نتيجة السياسات والقرارات العنصرية لحكومة نتنياهو سموترتش وبن غڤير، كما طرحت أمامهم "مبادرة جسور التصالح والسلام"، التي تهدف إلى إيجاد أفق سياسي لحل القضية الفلسطينية، وإنهاء الحرب، والسعي نحو تسوية قائمة على مبدأ حل الدولتين، بما يضمن الأمن والاستقرار للمنطقة ولشعوبها ولمجتمعنا العربي.' :
        language === 'he' ?
        'המפלגה הערבית המאוחדת (רע"מ) שלחה ביום שלישי, 11.3.2025, מסר למפלגות הערביות ולראשי הרשויות המקומיות הערביות, שבו הציגה הצעה מעשית הכוללת חזון פוליטי כולל להתמודדות עם הסכנות והאתגרים העומדים בפני החברה הערבית והעם הפלסטיני – כתוצאה ממדיניות הממשלה הנוכחית בראשות נתניהו, סמוטריץ\' ובן גביר.\n\nרע"מ הציגה בפניהם את "יוזמת גשרים לפיוס ושלום", שמטרתה ליצור אופק מדיני לפתרון הסוגיה הפלסטינית, לסיום המלחמה, ולחתירה להסדר מדיני המבוסס על עיקרון שתי המדינות – תוך הבטחת ביטחון ויציבות לאזור, לעמים השוכנים בו, ולחברה הערבית בישראל.' :
        'On Tuesday, March 11, 2025, the United Arab List (Ra\'am) addressed a formal message to Arab political parties and heads of Arab local authorities in Israel. The message included a practical proposal and a comprehensive political vision for addressing the escalating threats and challenges facing Arab society in Israel and the Palestinian people — challenges brought about by the policies of the current Netanyahu-Smotrich-Ben Gvir government.\n\nRa\'am presented the "Bridges of Reconciliation and Peace Initiative," which seeks to open a political horizon for resolving the Palestinian issue, ending the war, and working toward a two-state solution that ensures security and stability for the region, its peoples, and Arab society within Israel.'
    },
    {
      id: 3,
      title: language === 'ar' ? 'منصور عباس في مؤتمر يديعوت أحرونوت يدعو لوقف الحرب ويطرح مبادرة جسور كخطة واقعية للحل السياسي' :
             language === 'he' ? 'ח"כ מנסור עבאס בכנס "ידיעות אחרונות" קורא להפסיק את המלחמה, ומציג את יוזמתו "גשרים לפיוס ושלום" כפתרון מדיני ריאלי' :
             'At the "People of the Nation" conference organized by Yedioth Ahronoth and Ynet on April 7, 2025, MK Mansour Abbas called for an immediate end to the war in Gaza and introduced his "Bridges of Reconciliation and Peace Initiative" as a realistic political solution.',
      date: '2025-04-07',
      category: language === 'ar' ? 'اجتماع' : language === 'he' ? 'פגישה' : 'Meeting',
      author: language === 'ar' ? 'النائب منصور عباس' : language === 'he' ? 'ח"כ מנסור עבאס' : 'MK Mansour Abbas',
      excerpt: language === 'ar' ?
        'دعا رئيس القائمة العربية الموحدة النائب منصور عباس، إلى وقف الحرب بشكل فوري على قطاع غزة، وإلى اعتماد "مبادرة جسور للتصالح والسلام" التي إطلاقها والتي تشمل وقف الحرب وإطلاق سراح المختطفين والتوصل لحل سياسي سلمي وإنهاء الصراع الإسرائيلي الفلسطيني. جاءت دعوته هذه خلال مشاركته، الإثنين 7-4-2025، في مؤتمر "شخصيات الدولة" الذي نظّمته صحيفة "يديعوت أحرونوت" وموقع ynet.' :
        language === 'he' ?
        'יושב ראש רע"מ, ח"כ מנסור עבאס, קרא להפסקה מיידית של המלחמה בעזה ולאימוץ יוזמת "גשרים לפיוס ושלום" שיזם – הכוללת הפסקת אש, שחרור החטופים, והגעה להסדר מדיני בדרכי שלום שיביא לסיום הסכסוך הישראלי-פלסטיני. דבריו נאמרו ביום שני, 7.4.2025, בכנס "האנשים של המדינה" שארגנה קבוצת "ידיעות אחרונות" ואתר ynet.' :
        'He stated that the path forward lies in a genuine initiative to end the war and establish peace between both peoples — not in temporary understandings that merely manage the conflict. According to Abbas, the Bridges Initiative offers a broad vision and actionable steps to overcome the crisis, end the war, and reach a lasting peace among the peoples of the region.',
      fullExcerpt: language === 'ar' ?
        'دعا رئيس القائمة العربية الموحدة النائب منصور عباس، إلى وقف الحرب بشكل فوري على قطاع غزة، وإلى اعتماد "مبادرة جسور للتصالح والسلام" التي إطلاقها والتي تشمل وقف الحرب وإطلاق سراح المختطفين والتوصل لحل سياسي سلمي وإنهاء الصراع الإسرائيلي الفلسطيني. جاءت دعوته هذه خلال مشاركته، الإثنين 7-4-2025، في مؤتمر "شخصيات الدولة" الذي نظّمته صحيفة "يديعوت أحرونوت" وموقع ynet.\n\nوحول رؤيته للحل أكد النائب منصور عباس أنه يكمن في إطلاق مبادرة حقيقية لوقف الحرب وللسلام بين الطرفين، وليس في التوصل لتفاهمات مرحلية ومحدودة هدفها إدارة الصراع، وليس حل الصراع، وأن مبادرة "جسور للتصالح والسلام" تقدّم الرؤية الواسعة والمسارات العملية لتجاوز الأزمة ووقف الحرب والتوصل لسلام دائم بين شعوب المنطقة، وهذه المبادرة "تأتي منّا، من العرب الفلسطينيين مواطني دولة إسرائيل الذين هم جزء من الشعب الفلسطيني ويرون ويشعرون بالمأساة التي يحياها أهلنا في غزة، وبنفس الوقت مواطنون في دولة إسرائيل يهمّهم السلام والأمن ويتفهمون احتياجات ومخاوف الشعب الإسرائيلي"، مضيفًا أن "الأصوات التي تدعو للسلام يجب أن لا تخفت في الوقت الذي تتعالى فيه أصوات العداء والكراهية".' :
        language === 'he' ?
        'יושב ראש רע"מ, ח"כ מנסור עבאס, קרא להפסקה מיידית של המלחמה בעזה ולאימוץ יוזמת "גשרים לפיוס ושלום" שיזם – הכוללת הפסקת אש, שחרור החטופים, והגעה להסדר מדיני בדרכי שלום שיביא לסיום הסכסוך הישראלי-פלסטיני. דבריו נאמרו ביום שני, 7.4.2025, בכנס "האנשים של המדינה" שארגנה קבוצת "ידיעות אחרונות" ואתר ynet.\n\nבהתייחסו לחזון הפתרון, הדגיש ח"כ עבאס כי יש להשיק יוזמה אמיתית להפסקת הלחימה ולשלום בין שני העמים – ולא להסתפק בהבנות זמניות שמטרתן ניהול הסכסוך במקום פתרונו. לדבריו, יוזמת "גשרים לפיוס ושלום" מציעה ראייה רחבה וצעדים מעשיים ליציאה מהמשבר, לסיום המלחמה ולהשגת שלום קבוע בין עמי האזור.\n\nעבאס הוסיף: "זוהי יוזמה שמגיעה מאיתנו – מהערבים הפלסטינים אזרחי מדינת ישראל, שהם חלק מהעם הפלסטיני, שחשים ורואים את האסון שחווים אחינו בעזה, ובה בעת אנו אזרחים במדינה הזו, שמעוניינים בשלום וביטחון ומבינים את הצרכים והחששות של העם היהודי".\nעוד הוסיף: "הקולות הקוראים לשלום לא צריכים להיחלש דווקא כאשר קולות השנאה והאיבה גוברים".' :
        'He stated that the path forward lies in a genuine initiative to end the war and establish peace between both peoples — not in temporary understandings that merely manage the conflict. According to Abbas, the Bridges Initiative offers a broad vision and actionable steps to overcome the crisis, end the war, and reach a lasting peace among the peoples of the region.\n\n"This initiative comes from us — Arab Palestinians who are citizens of Israel, part of the Palestinian people who see and feel the catastrophe unfolding in Gaza. At the same time, we are citizens of Israel who care about peace and security and understand the fears and needs of the Jewish people," Abbas said.\n\nHe added, "Voices calling for peace must not fade, even as voices of hatred and hostility grow louder."',
      youtubeId: 'UG4fzOIi1fc',
      videoTitle: ''
    }
  ]).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const videoInterviews = [
    {
      id: 1,
      title: language === 'ar' ? 'مقابلة مع راديو الشمس' :
             language === 'he' ? 'ריאיון עם רדיו אל-שמס' :
             'Interview with Radio Al-Shams',
      date: '2025-03-04',
      youtubeId: 'kWzCP2IGftM',
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
      youtubeId: 'rz3iaiaLqXA',
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
      youtubeId: 'kRLPcFVE63U',
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
              <div className={`grid grid-cols-1 ${(item.youtubeId || item.imageUrl) ? 'lg:grid-cols-2' : 'lg:px-6'} gap-6`}>
                {(item.youtubeId || item.imageUrl) && (
                  <div className="h-full">
                    <div className="aspect-video mb-2 overflow-hidden">
                      {item.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    ) : item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-md"
                        style={{ aspectRatio: '16/9' }}
                      />
                    )}
                  </div>
                    {item.videoTitle && (
                      <p className="text-sm text-gray-600 px-2">
                        <Play className="h-4 w-4 inline mr-1" />
                        {item.videoTitle}
                      </p>
                    )}
                  </div>
                )}
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
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 italic">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <div className="text-gray-700 leading-relaxed mb-4">
                    <p className="whitespace-pre-line">
                      {expandedDescriptions[item.id] ? item.fullExcerpt : item.excerpt}
                    </p>
                    {item.fullExcerpt && item.fullExcerpt !== item.excerpt && (
                      <Button
                        variant="ghost"
                        className="mt-2 text-green-600 hover:text-green-700"
                        onClick={() => toggleDescription(item.id)}
                      >
                        {expandedDescriptions[item.id] ? (
                          <><ChevronUp className="h-4 w-4 mr-1" />
                          {language === 'ar' ? 'عرض أقل' :
                           language === 'he' ? 'הצג פחות' :
                           'Show less'}</>
                        ) : (
                          <><ChevronDown className="h-4 w-4 mr-1" />
                          {language === 'ar' ? 'اقرأ المزيد' :
                           language === 'he' ? 'קרא עוד' :
                           'Read more'}</>
                        )}
                      </Button>
                    )}
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
             language === 'he' ? 'ריאיונות ברדיו' :
             'Radio Interviews'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoInterviews.map((interview) => (
              <Card key={interview.id} className="border-green-100 overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${interview.youtubeId}`}
                    title={interview.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
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
              <p className="text-gray-600 mb-4">
                {language === 'ar' ? 'ابقوا على اطلاع على آخر أخبار وأنشطة المبادرة' :
                 language === 'he' ? 'הישארו מעודכנים בחדשות ופעילויות היוזמה האחרונות' :
                 'Stay updated with the latest news and activities of the initiative'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                {language === 'ar' ? 'تواصل معنا' :
                 language === 'he' ? 'צור קשר' :
                 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
