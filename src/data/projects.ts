import type { Project } from "../pages/Project/types";

const fa_projectData = {
  title: "ویلای مدرن کوهسار البرز",
  subtitle: "تلفیق زندگی خانوادگی با معماری معاصر",
  location: "کوهسار، استان البرز",
  area: "۱۲۰۰ متر مربع",
  floors: 4,
  style: "مدرن مینیمال",
  description: [
    "این پروژه با رویکرد معماری زمینه‌گرا و با الهام از خطوط افقی کوهستان‌های البرز، فرمی مدرن و یکپارچه خلق کرده است.",
    "حجم‌بندی پلکانی ساختمان نه‌تنها سلسله مراتب فضایی را تعریف می‌کند، بلکه با ایجاد سایه‌روشن‌های حساب‌شده، بازی نور طبیعی را در طول روز تنظیم می‌نماید.",
    "استفاده از شبکه مدولار در پلان، انعطاف‌پذیری فضاها را برای تغییر کاربری در آینده ممکن ساخته...",
    "طراحی پله‌های شناور با سازه مخفی، علاوه بر تأمین ایمنی کودکان، به عنوان عنصر مجسمه‌وار فضای داخلی عمل می‌کند.",
  ],
  phases: [
    {
      title: "مرحله شناخت",
      points: [
        "جلسات متعدد با کارفرما جهت شناسایی نیازهای خانواده ۶ نفره",
        "بررسی سایت پروژه و تحلیل دیدهای کوهستانی",
        "مطالعه نمونه‌های موفق بین‌المللی",
      ],
    },
    {
      title: "ایده‌پردازی و اسکیس‌های اولیه",
      points: [
        "توسعه کانسپت تلفیق طبیعت با مدرنیته در قالب ۳ طرح اولیه",
        "انتخاب نهایی طرح با محوریت: سلسله مراتب فضایی عمودی، حریم خصوصی، بهینه‌سازی دید",
      ],
    },
    {
      title: "طراحی جزئیات",
      points: [
        "مدلسازی ۳بعدی با Revit، Lumion، Vray",
        "انتخاب مصالح نما: سنگ، چوب ترمو / کف: پارکت مهندسی با عایق صوتی",
        "طراحی نورپردازی هوشمند با کنترل دیجیتال",
      ],
    },
    {
      title: "مستندات اجرایی",
      points: [
        "تهیه نقشه‌های سازه‌ای ویژه منطقه",
        "دیتیل‌های اختصاصی برای جکوزی معلق و شومینه مدرن",
      ],
    },
    {
      title: "نظارت بر اجرا",
      points: [
        "همکاری با پیمانکار منتخب برای اجرای دقیق",
        "کنترل کیفی مصالح نما و فریم‌لس",
      ],
    },
  ],
  features: [
    "سیستم طبقه‌بندی هوشمند",
    "راهکارهای امنیتی برای کودکان",
    "مدیریت انرژی: پنجره‌های دوجداره + عایق‌بندی با پشم سنگ",
  ],
};

const en_projectData = {
  title: "Modern Villa in Kouhsar, Alborz",
  subtitle: "Blending Family Living with Contemporary Architecture",
  location: "Kouhsar, Alborz Province",
  area: "1200 square meters",
  floors: 4,
  style: "Modern Minimal",
  description: [
    "This project, following a contextual architecture approach and inspired by the horizontal lines of the Alborz mountains, creates a modern and unified form.",
    "The terraced volume not only defines spatial hierarchy but also orchestrates natural light through calculated shading.",
    "A modular grid in the plan allows future spatial flexibility and adaptive reuse.",
    "The floating staircase with a hidden structure ensures children's safety while acting as a sculptural interior element.",
  ],
  phases: [
    {
      title: "Understanding Phase",
      points: [
        "Multiple meetings with the client to identify the needs of a 6-member family",
        "Site analysis and mountain view studies",
        "Research on successful international family villa designs",
      ],
    },
    {
      title: "Conceptual Design & Sketches",
      points: [
        "Developing the concept of blending nature and modernity in 3 initial proposals",
        "Final design selected based on: vertical spatial hierarchy, privacy layers, and optimized mountain views",
      ],
    },
    {
      title: "Design Development",
      points: [
        "3D modeling using Revit, Lumion, and Vray",
        "Material selection: façade (stone, thermo-treated wood), flooring (engineered parquet with acoustic insulation)",
        "Smart lighting design with digital control systems",
      ],
    },
    {
      title: "Construction Documents",
      points: [
        "Structural drawings with special calculations for the Kouhsar area",
        "Custom details for a suspended jacuzzi and modern fireplace",
      ],
    },
    {
      title: "Supervision",
      points: [
        "Collaboration with the selected contractor for accurate detail execution",
        "Quality control of façade materials and frameless glass",
      ],
    },
  ],
  features: [
    "Smart spatial zoning: separating loud and quiet areas",
    "Child safety solutions: spiral stairs with invisible barriers",
    "Energy management: double-glazed windows + roof insulation with rock wool",
  ],
};

const en_projectData_noshahr = {
  title: "Modern Villa in Nowshahr",
  subtitle:
    "Fusion of Contemporary Architecture with Mazandaran's Forest Nature",
  location: "Nowshahr, Mazandaran Province",
  area: "750 m²",
  style: "Modern Ecological",
  description: [
    "This project, following the approach of 'Ecological Contextualism' and a contemporary interpretation of Mazandaran’s vernacular architecture, forms an organic and fluid volume.",
    "The building's horizontal massing, inspired by the layering of Hyrcanian forests, creates floating levels and transparent connecting bridges that establish a modern dialogue with the site's topography.",
    "Full-height windows act as 'Living Frames' that blur the boundary between indoor space and the forest ecosystem.",
    "The sloped roofs at a 25-degree angle optimize northern light while channeling rainwater to the collection system.",
    "The use of a 'Hierarchy of Privacy' in the floor plan—from the semi-public pool area to the private suites—reflects the natural order of forest trees.",
    "Combining green technologies such as integrated photovoltaic panels and local materials like Alvar wood and native sandstone makes this project a pioneer of fourth-generation sustainable architecture in the region.",
  ],
  phases: [
    {
      title: "Site Analysis",
      points: [
        "Topographical study of a 15% slope descending toward the forest",
        "Microclimatic analysis for optimizing airflow (Caspian Sea winds and 85% humidity)",
        "Mapping of natural water paths using GIS software",
      ],
    },
    {
      title: "Concept Development",
      points: [
        "The idea of 'forest rhythm' implemented through 3.6m modular spacing (aligned with local tree density)",
        "Design of cable-structured glass bridges to minimize visual impact",
        "Green roofs planted with native vegetation",
      ],
    },
    {
      title: "Technological Innovations",
      points: [
        "Smart water management: collecting rainwater from sloped surfaces",
        "Phytoremediation-based pool water purification using aquatic plants",
        "Double-skin facade enabling natural ventilation control",
      ],
    },
    {
      title: "Key Execution Details",
      points: [
        "Anti-corrosion structural joints made from 316L stainless steel suitable for humid climates",
        "WPC wood-polymer flooring resistant to termites",
        "Adaptive lighting system with motion sensors and daylight spectrum adjustment",
      ],
    },
  ],
  features: [
    "Organic design integrated with natural topography",
    "Breathable, intelligent double-skin facade",
    "Renewable energy systems and rainwater harvesting",
    "Privacy zoning aligned with residential needs",
  ],
};

const fa_projectData_noshahr = {
  title: "ویلای مدرن نوشهر",
  subtitle: "تلفیق معماری معاصر با طبیعت جنگلی مازندران",
  location: "نوشهر، استان مازندران",
  area: "۷۵۰ مترمربع",
  style: "مدرن اکولوژیک",
  description: [
    'این پروژه با رویکرد "معماری زمینه‌گرای اکولوژیک" و با خوانشی نوین از بوم‌گرایی مازندران، فرمی ارگانیک و سیال خلق کرده است.',
    "حجم‌بندی افقی ساختمان با الهام از لایه‌بندی جنگل‌های هیرکانی، با ایجاد سطوح شناور و پل‌های ارتباطی شفاف، دیالوگی مدرن با توپوگرافی سایت برقرار می‌کند.",
    'پنجره‌های تمام‌قد به مثابه "چارچوب‌های زنده" مرز بین فضای داخلی و اکوسیستم جنگلی را مخدوش می‌کنند.',
    "سقف‌های شیبدار با زاویه ۲۵ درجه، هم بهره‌وری نور شمالی را بهینه کرده و هم آب باران را به سیستم جمع‌آوری هدایت می‌کنند.",
    'استفاده از "سلسله مراتب حریم‌ها" در پلان، از فضای نیمه‌عمومی استخر تا سوئیت‌های اختصاصی، بازتابی از نظم درختان جنگل است.',
    "ترکیب تکنولوژی‌های سبز مانند پنل‌های فتوولتائیک و مصالح بومی چون چوب آلوار و سنگ ماسه‌ای محلی، این پروژه را به نمونه‌ای پیشرو از معماری پایدار نسل چهارم تبدیل کرده است.",
  ],
  phases: [
    {
      title: "مرحله شناخت",
      points: [
        "تحلیل توپوگرافی سایت با شیب ۱۵٪ به سمت جنگل",
        "مطالعات میکروکلیماتیک برای بهینه‌سازی جریان هوا (بادهای دریای خزر و رطوبت ۸۵٪)",
        "آنالیز مسیرهای آبی موجود در سایت با نرم‌افزار GIS",
      ],
    },
    {
      title: "توسعه کانسپت",
      points: [
        'ایده "ریتم جنگل" در مدول‌بندی فضاها با فاصله ۳.۶ متر (متناسب با تراکم درختان منطقه)',
        "طراحی پل‌های شیشه‌ای با سازه کابلی برای حداقل مداخله بصری",
        "سقف‌های سبز با پوشش گیاهی بومی",
      ],
    },
    {
      title: "نوآوری‌های فناورانه",
      points: [
        "سیستم مدیریت هوشمند آب: جمع‌آوری آب باران از سطوح شیبدار",
        "تصفیه آب استخر با گیاهان آبزی (Phytoremediation)",
        "نمای دوپوسته با قابلیت تنظیم تهویه طبیعی",
      ],
    },
    {
      title: "جزئیات اجرایی کلیدی",
      points: [
        "اتصالات سازه‌ای ضدخوردگی از جنس استنلس استیل ۳۱۶L مناسب مناطق مرطوب",
        "کف‌پوش‌های چوب-پلیمری (WPC) با مقاومت بالا در برابر موریانه",
        "نورپردازی تطبیقی با سنسورهای حرکتی و تنظیم طیف نور براساس ساعت روز",
      ],
    },
  ],
  features: [
    "طراحی ارگانیک متناسب با توپوگرافی طبیعی",
    "نمای دوپوسته تنفسی و هوشمند",
    "استفاده از انرژی تجدیدپذیر و سیستم‌های جمع‌آوری آب باران",
    "حریم‌بندی فضایی متناسب با نیازهای سکونت",
  ],
};

const en_projectData_elahieh = {
  title: "Villa Renovation in District 1, Tehran",
  subtitle: "A Fusion of Past and Present",
  location: "Fereshteh Street, Tehran",
  area: "1200 m²",
  style: "Contemporary Neoclassical",
  description: [
    "This project adopts an 'Architectural Mnemonics' approach to create a dialogue between historical and contemporary layers. While preserving original arches and white cement as a 'memory skeleton', the addition of minimal black volumes acts as 'contemporary annotations'.",
    "The central axis design is inspired by a Shirazi cypress tree, symbolizing a 'three-generational timeline', and uses perspective arches to narrate the cinematic growth of the tree.",
    "New full-width steel-framed windows provide a modern frame to classical façades, while linear cove lighting integrated into niches creates a calculated contrast between the warmth of light and the coldness of white cement.",
    "This renovation exemplifies 'intelligent historical continuity' where each new element—such as the underground cinema with wave acoustic panels—enhances the building’s original identity.",
  ],
  phases: [
    {
      title: "Historical Layer Discovery (Preservation Audit)",
      points: [
        "Precise documentation of original stucco ornaments using 3D laser scanning",
        "Structural damage assessment in 1960s load-bearing arches",
        "Restoration of original white cement color via micro-abrasion technique",
      ],
    },
    {
      title: "Intervention Strategy",
      points: [
        "Black anodized aluminum skin with concealed joints",
        "Floating staircase of polished steel with embedded handrails",
        "Black double-glazed Low-E windows",
        "Reinforced iconic entry arches",
        "Epoxy-resin treated travertine floors",
      ],
    },
    {
      title: "Symbolic Landscape Design",
      points: [
        "Stepped arches framing changing shadows of the Shirazi cypress tree",
        "Smart root irrigation system with humidity sensors",
        "Ground lighting (uplighting) emphasizing the 8-meter tree height",
      ],
    },
    {
      title: "Renovation Technologies",
      points: [
        "Integrated BMS controlling motorized blinds and underground HVAC with humidity recovery",
        "Custom acoustic design for cinema with perforated MDF walls and floating floor",
      ],
    },
  ],
  features: [
    "Fusion of titanium-enhanced white cement and patina-treated black metal panels",
    "Duplex spatial layout with spiral circulation around central skylight",
    "Installation of custom artworks inspired by original stucco motifs",
  ],
};

const fa_projectData_elahieh = {
  title: "بازسازی ویلا در منطقه یک تهران",
  subtitle: "تلفیق گذشته و حال",
  location: "خیابان فرشته، تهران",
  area: "۱۲۰۰ مترمربع",
  style: "نئوکلاسیک معاصر",
  description: [
    'این پروژه با رویکرد "حافظه معماری" (Architectural Mnemonics)، دیالوگی میان لایه‌های تاریخی و معاصر برقرار می‌کند. با حفظ ساختارهای قوسی اصلی و سیمان سفید به عنوان "اسکلت خاطره‌انگیز"، افزودن حجم‌های مشکی مینیمال به مثابه "یادداشت‌های معاصر" عمل می‌نماید.',
    'طراحی محور مرکزی بر اساس درخت سرو شیرازی (به عنوان "محور زمانی سه‌نسلی") با ایجاد طاق‌های پرسپکتیوی، روایتی سینماتیک از رشد تدریجی درخت ارائه می‌دهد.',
    "پنجره‌های سرتاسری جدید با قاب‌های فولادی سیاه، چارچوبی مدرن برای نماهای کلاسیک ایجاد کرده، در حالی که سیستم نورپردازی خطی توکار در طاقچه‌ها، تضادی حساب‌شده بین گرمای نور و سردی سیمان سفید خلق می‌نماید.",
    'این بازسازی نمونه‌ای از "تداوم تاریخی هوشمند" است که در آن هر المان افزوده‌شده، مانند سالن سینمای زیرزمینی با آکوستیک پنل‌های موجی، در خدمت تقویت هویت اصیل بنا قرار گرفته است.',
  ],
  phases: [
    {
      title: "کشف لایه‌های تاریخی (Preservation Audit)",
      points: [
        "مستندسازی دقیق تزئینات گچبری اصیل با اسکن 3D لیزری",
        "تحلیل آسیب‌های سازه‌ای در قوس‌های باربر دهه ۴۰",
        "بازیابی رنگ اصلی سیمان سفید با تکنیک میکروابریژن",
      ],
    },
    {
      title: "استراتژی مداخله (Intervention Strategy)",
      points: [
        "پوسته مشکی از جنس آلومینیوم آنودایز با درزهای مخفی",
        "راه‌پله شناور از جنس استیل براق با دستگیره‌های توکار",
        "پنجره‌های سیاه دبل‌گلیر با شیشه Low-E",
        "طاق‌های نمادین ورودی با تقویت سازه‌ای",
        "کف‌پوش تراورتن اصلاح‌شده با رزین اپوکسی",
      ],
    },
    {
      title: "طراحی منظره نمادین (Symbolic Landscape)",
      points: [
        "طراحی طاق‌های پلکانی برای سایه‌انداز متغیر درخت سرو شیرازی",
        "سیستم آبیاری هوشمند ریشه‌ای با سنسور رطوبت",
        "نورپردازی زمین‌نمای برای تأکید بر ارتفاع ۸ متری درخت",
      ],
    },
    {
      title: "فناوری‌های نوسازی",
      points: [
        "سیستم BMS برای پرده‌های موتورایز و تهویه هوشمند زیرزمین",
        "آکوستیک سالن سینما با دیوارهای MDF پرفوراته و کف شناور",
      ],
    },
  ],
  features: [
    "ترکیب سیمان سفید با اکسید تیتانیوم و ورق‌های مشکی پتینه‌خورده",
    "طراحی دوبلکس با مسیر حرکتی حلزونی حول نورگیر مرکزی",
    "نصب آثار هنری سفارشی با الهام از گچبری‌های اصیل",
  ],
};

const fa_projectData_khaji = {
  title: "پروژه نمای فروشگاه لوازم خانگی و ساختمانی هایپر مارکت خاجی",
  subtitle: "جریان همیشگی زندگی",
  location: "جاده ملارد، استان تهران",
  style: "پویانمایی معماری (Kinetic Architecture)",
  description: [
    'این طراحی با کانسپت "جنبش سیال" (Fluid Motion)، زبان بصری منحنی‌های موازی را به عنوان استعاره‌ای از جریان زندگی شهری تفسیر می‌کند.',
    "خطوط آلومینیومی آنودایز شده با ضخامت متغیر (از ۱۵ تا ۴۰ سانتیمتر)، با ایجاد پرسپکتیوهای پویا، توهم حرکتی (Motion Illusion) را برای عابران و رانندگان در سرعت‌های مختلف خلق می‌نمایند.",
    'سیستم نورپردازی خطی RGBW هوشمند در شیارهای افقی، با تغییر تدریجی رنگ براساس ساعات روز (از آبی سحرگاهی تا نارنجی غروب)، شعار "همیشگی بودن" را به صورت حسی تجسم می‌بخشد.',
    "نمای دوپوسته با فاصله ۸۰ سانتیمتری، علاوه بر کنترل حرارتی، امکان نصب پنل‌های تبلیغاتی متحرک را در لایه میانی فراهم کرده است.",
  ],
  phases: [
    {
      title: "آنالیز سایت و رفتارشناسی",
      points: [
        "مطالعه میدانی ترافیک خودروها (سرعت ۵۰-۷۰ کیلومتر بر ساعت)",
        "تحلیل زوایای دید عابران پیاده از ارتفاع ۱۶۰ تا ۱۸۰ سانتیمتر",
        "شبیه‌سازی نورپردازی با نرم‌افزار Dialux برای شرایط جوی مختلف",
      ],
    },
    {
      title: "جزئیات اجرایی کلیدی",
      points: [
        "قاب‌های فولادی گالوانیزه پیش‌ساخته با انحنای متغیر",
        "اتصالات مفصلی ضدلرزه برای تحمل نیروهای باد",
        "ورق‌های کامپوزیت آلومینیومی با پوشش نانو ضدجرم",
        "شیارهای آب‌گذر ۴۵ درجه برای جلوگیری از تجمع باران",
      ],
    },
    {
      title: "تکنولوژی‌های تعاملی",
      points: [
        "سنسورهای حرکتی برای تغییر الگوی نور در شب",
        "نمایشگرهای LED باریک در خطوط منحنی جهت تبلیغات پویا",
        "سیستم جمع‌آوری آب باران در سقف موجی برای آبیاری فضای سبز محوطه",
      ],
    },
  ],
  features: [
    "کاهش خستگی بصری رانندگان با منحنی‌های نرم",
    "تلفیق نمای هنری با عملکرد تبلیغاتی",
    "دسترسی آسان به تاسیسات از طریق راهروی پشتیبان بین دو پوسته",
  ],
};

const en_projectData_khaji = {
  title: "Facade Design of Khaji Hypermarket",
  subtitle: "The Constant Flow of Life",
  location: "Malard Road, Tehran Province",
  style: "Kinetic Architecture",
  description: [
    "This design, inspired by the concept of 'Fluid Motion', interprets the visual language of parallel curves as a metaphor for urban life's continuous flow.",
    "Anodized aluminum lines with variable thickness (from 15 to 40 cm) create dynamic perspectives, producing a motion illusion for pedestrians and drivers at different speeds.",
    "The smart RGBW linear lighting system embedded in horizontal grooves gradually shifts colors throughout the day (from dawn blue to sunset orange), embodying the idea of 'everlasting presence'.",
    "The double-skin facade, with an 80 cm gap, not only provides thermal control but also enables the installation of dynamic advertising panels in the middle layer.",
  ],
  phases: [
    {
      title: "Site Analysis and Behavioral Study",
      points: [
        "Field study of vehicular traffic (speed range 50–70 km/h)",
        "Analysis of pedestrian viewpoints from 160 to 180 cm eye level",
        "Lighting simulations with Dialux software for various weather conditions",
      ],
    },
    {
      title: "Key Construction Details",
      points: [
        "Prefabricated galvanized steel frames with varying curvature",
        "Seismic-resistant articulated joints to withstand wind forces",
        "Aluminum composite panels with nano anti-stain coating",
        "45° sloped drainage grooves to prevent water accumulation",
      ],
    },
    {
      title: "Interactive Technologies",
      points: [
        "Motion sensors to adjust lighting patterns at night",
        "Slim LED displays integrated into curved lines for dynamic advertising",
        "Rainwater harvesting system on wavy roof for landscape irrigation",
      ],
    },
  ],
  features: [
    "Psychological impact: reduces visual fatigue for drivers through soft curves",
    "Functional fusion: artistic facade with advertising capability",
    "Easy maintenance: access to systems via service corridor between facade layers",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Kamranieh Mansion",
    en_name: "Kamranieh Mansion",
    fa_name: "عمارت کامرانیه",
    src: "https://ik.imagekit.io/picwagmpd/images/1.webp?updatedAt=1752737814445",
    en_description: en_projectData,
    fa_description: fa_projectData,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/1-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-4.webp",
    ],
  },
  {
    id: 2,
    name: "Kordan Villa",
    en_name: "Kordan Villa",
    fa_name: "ویلای مدرن کوهسار البرز",
    src: "https://ik.imagekit.io/picwagmpd/images/2.webp?updatedAt=1752737815182",
    en_description: en_projectData,
    fa_description: fa_projectData,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/2-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-6.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-7.webp",
      "https://ik.imagekit.io/picwagmpd/images/2-8.webp",
    ],
  },
  {
    id: 3,
    en_name: "Khaji Store",
    name: "Khaji Store",
    fa_name: "فروشگاه خواجی",
    src: "https://ik.imagekit.io/picwagmpd/images/3.webp?updatedAt=1752737811295",
    en_description: en_projectData_khaji,
    fa_description: fa_projectData_khaji,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/5.webp",
      "https://ik.imagekit.io/picwagmpd/images/1.webp",
    ],
  },
  {
    id: 4,
    name: "Noshahr Villa",
    en_name: "Noshahr Villa",
    fa_name: "ویلای مدرن نوشهر",
    src: "https://ik.imagekit.io/picwagmpd/images/4.webp?updatedAt=1752737819373",
    en_description: en_projectData_noshahr,
    fa_description: fa_projectData_noshahr,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/4-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-6.webp",
      "https://ik.imagekit.io/picwagmpd/images/4-7.webp",
    ],
  },
  {
    id: 5,
    name: "Elahieh House",
    en_name: "Elahieh House",
    fa_name: "عمارت الهیه",
    src: "https://ik.imagekit.io/picwagmpd/images/5.webp?updatedAt=1752737819339",
    en_description: en_projectData_elahieh,
    fa_description: fa_projectData_elahieh,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/5-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/5-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/5-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/5-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/5-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/5-6.webp",
    ],
  },
];
