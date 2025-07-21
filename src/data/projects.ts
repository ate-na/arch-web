import type { Project, ProjectDescription } from "../pages/Project/types";

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

const kamraniehProjectEn: ProjectDescription = {
  title: "A House for Sensory Perception",
  subtitle: "Reviving a Kamraniyeh home for a non-visual experience",
  location: "Kamraniyeh, Tehran",
  area: "1000 sqm",
  floors: 1,
  style: "Restoration & Reinterpretation",
  description: [
    "Hidden within the historic fabric of Kamraniyeh lies a house that was once home to a blind woman — someone who experienced the house not with sight, but through her other senses. Reviving this place is not merely a physical renovation, but a reawakening of a lived experience — one centered on hearing, smelling, touching, and the feeling of anticipation.",
    "The core concept in this project is the 'non-visual perception of space' — a spatial experience understood through alternative senses, with the 'corner of waiting' at its heart; a spot where this woman would sit daily, awaiting the return of her family. This point holds the house's emotional memory.",
  ],
  phases: [
    {
      title: "Tactile and Auditory Pathways",
      points: [
        "Circulation is designed based on floor and wall textures — from polished stone to textured wood, each surface conveys a different feeling.",
        "At key points, sound-triggered systems activate subtle cues — the gentle flow of water, nostalgic melodies, or a soft bell as the main door opens.",
      ],
    },
    {
      title: "Light as a Guide, Not a Display",
      points: [
        "Lighting is designed not for aesthetic display, but for orientation and a sense of security.",
        "Soft linear lights along edges and corners enhance spatial awareness and peace.",
      ],
    },
    {
      title: "Reimagining the Corner of Waiting",
      points: [
        "This space has been preserved and reinterpreted using warm materials and ambient sounds.",
        "A distinct scent fills the area — a blend of wood, dried flowers, and lingering memory.",
        "A fabric-textured bench and a window opening to the courtyard make it the emotional heart of the home.",
      ],
    },
    {
      title: "The Audible Courtyard",
      points: [
        "The courtyard was redesigned with natural sounds in mind: water trickles, rustling leaves, and birdsong.",
        "Scented plants enhance the olfactory experience — a garden meant to be smelled and heard, not just seen.",
      ],
    },
    {
      title: "Human-Centered Furniture & Details",
      points: [
        "Furniture and architectural details are recognizable by touch — soft edges and inviting forms.",
        "Every element is designed to convey its function and form through tactile interaction.",
      ],
    },
  ],
  features: [],
};

const kamraniehProjectFa: ProjectDescription = {
  title: "خانه‌ای برای ادراک حسی",
  subtitle: "باززنده‌سازی خانه‌ای در کامرانیه برای تجربه‌ای غیر بصری",
  location: "کامرانیه، تهران",
  area: "۱۰۰۰ متر مربع",
  floors: 1,
  style: "باززنده‌سازی بنا",
  description: [
    "در دل بافت قدیمی کامرانیه، عمارتی نهفته است که سال‌ها مأمن زنی نابینا بوده؛ زنی که با نبودِ دید، خانه را نه با چشم بلکه با سایر حواسش زیسته است. بازسازی این بنا، صرفاً نوسازی کالبدی نیست، بلکه احیای تجربه‌ای زیسته است — تجربه‌ای که شنیدن، بوییدن، لمس کردن و حس انتظار در مرکز آن قرار دارند.",
    'در این پروژه، کانسپت اصلی "ادراک غیر بصری فضا" است؛ فضایی که از دریچه‌ی دیگر حواس درک می‌شود و در قلب آن، "کنج انتظار" جای گرفته؛ جایی از خانه که این زن هر روز در آن می‌نشسته و منتظر رسیدن اعضای خانواده می‌مانده. این نقطه، حافظه‌ی عاطفی خانه است.',
  ],
  phases: [
    {
      title: "مسیرهای لمسی و آوایی",
      points: [
        "سیرکولاسیون خانه بر اساس بافت‌های مختلف زیر پا و دیوار طراحی شده‌است؛ از سنگ‌های صیقلی تا چوب‌های بافت‌دار، هر مسیر حس متفاوتی منتقل می‌کند.",
        "در نقاط کلیدی خانه، سیستم‌هایی طراحی شده که صداهای ظریفی را فعال می‌کنند — صدای ملایم آب، موسیقی‌های خاطره‌انگیز، یا حتی ناقوسی کوچک در هنگام باز شدن در اصلی.",
      ],
    },
    {
      title: "نور به عنوان راهنما، نه نمایشگر",
      points: [
        "نورپردازی‌ها، نه برای نمایش زیبایی بصری، بلکه برای جهت‌دهی و ایجاد حس امنیت طراحی شده‌اند.",
        "نورهای خطی کم‌نور در لبه‌ها و کنج‌ها، حس جهت‌گیری و آرامش را تقویت می‌کنند.",
      ],
    },
    {
      title: "بازتعریف کنج انتظار",
      points: [
        "این فضا نه تنها حفظ شده، بلکه با استفاده از متریال‌های گرم و صداهای محیطی بازآفرینی شده است.",
        "عطر خاصی در این فضا منتشر می‌شود — ترکیبی از چوب، گل‌های خشک و یادآور یک خاطره ماندگار.",
        "نیمکتی با بافت پارچه‌ای خاص و پنجره‌ای که به حیاط باز می‌شود، آن را به نقطه‌ی عاطفی خانه تبدیل کرده است.",
      ],
    },
    {
      title: "حیاطِ شنیدنی",
      points: [
        "بازسازی حیاط با تمرکز بر اصوات طبیعی انجام شده است: صدای ریزش آب، خش‌خش برگ‌ها، و پرندگان.",
        "استفاده از گیاهانی که رایحه‌ خاص دارند، تجربه بویایی را تقویت می‌کند — یک باغ برای بوییدن و شنیدن، نه فقط دیدن.",
      ],
    },
    {
      title: "مبلمان و جزئیات انسانی",
      points: [
        "مبلمان و جزئیات معماری با دست قابل شناسایی‌اند؛ لبه‌ها نرم و فرم‌ها دعوت‌کننده‌اند.",
        "تمامی اجزا به‌گونه‌ای طراحی شده‌اند که لمس آن‌ها اطلاعاتی از فرم و عملکردشان منتقل کند.",
      ],
    },
  ],
  features: [],
};

const khajiProjectDescriptionFa: ProjectDescription = {
  title: "پروژه طراحی داخلی هایپر مارکت خاجی",
  subtitle: "فاز یک",
  location: "تهران",
  area: "۱۲۰۰ مترمربع",
  style: "مینیمال صنعتی با تأکید بر نورپردازی محصول-محور",
  description: [
    'این طراحی با کانسپت "موزه‌ای از مصالح ساختمانی"، فضایی خنثی (Neutral Canvas) خلق کرده که در آن محصولات به عنوان آثار هنری نمایش داده می‌شوند.',
    "سیستم نورپردازی سه‌لایه (Task-Accent-Ambient) با دمای رنگ متغیر (۲۷۰۰K برای چوب تا ۴۰۰۰K برای فلزات)، بافت و رنگ هر متریال را به دقت برجسته می‌نماید.",
    "سقف بازشو (Exposed Ceiling) با شبکه‌ای از ریل‌های مغناطیسی، امکان تغییر پویای موقعیت اسپات‌لایت‌ها را براساس چیدمان محصول فراهم می‌آورد.",
    "دیوارهای بتنی اکوستیک با پوشش میکروسمنت، همزمان هم زمینه‌ای خنثی برای نمایش محصولات است و هم بازتاب‌های صوتی فضای بزرگ را کنترل می‌کند.",
  ],
  phases: [
    {
      title: "سونوگرافی فضایی",
      points: [
        "نورپردازی تطبیقی:",
        " اسپات‌لایت‌های هوشمند با قابلیت تنظیم زاویه ۳۶۰ درجه",
        " سنسورهای حرکتی برای افزایش شدت نور در محدوده محصولات پرتناوب",
        "گردش فضایی:",
        "مسیر مارپیچی با عرض ۳.۵ متر برای دسترسی بهینه به تمام بخش‌ها",
        "ایستگاه‌های مشاوره با میزهای نمایش تعاملی (Interactive Kiosks)",
      ],
    },
    {
      title: "جزئیات اجرایی کلیدی",
      points: [
        "ویترین‌های نمایش:",
        "پایه‌های شیشه‌ای ضد UV با ضخامت ۱۲ میلی‌متر",
        "قفسه‌های معلق از کابل‌های استیل ضدزنگ",
        "کف‌پوش:",
        "اپوکسی متالیک با خطوط راهنمای نورانی (Guided Lighting)",
        "زون‌بندی رنگی براساس دسته محصولات (آبی برای سرویس بهداشتی، خاکستری برای مصالح ساختمانی)",
      ],
    },
    {
      title: "تکنولوژی‌های فروشگاهی",
      points: [
        "سیستم AR برای پیش‌نمایش محصولات در فضای واقعی مشتری",
        "قفسه‌های RFID دار برای مدیریت هوشمند موجودی",
        "دیوارهای ویدئویی ۴K برای نمایش نحوه نصب محصولات",
      ],
    },
  ],
  features: [
    "تجربه مشتری: طراحی مسیر خرید براساس توالی منطقی پروژه‌های ساختمانی (از مصالح خام تا محصولات نهایی)",
    "انعطاف‌پذیری: سیستم ماژولار قفسه‌بندی با قابلیت تغییر ابعاد در ۲۴ ساعت",
    "پایداری: بازیافت ۱۰۰% نور توسط بازتابنده‌های سقفی",
  ],
};

const khajiProjectDescriptionEn: ProjectDescription = {
  title: "Interior Design Project for Khaji Hypermarket",
  subtitle: "Phase One",
  location: "Tehran",
  area: "1,200 sqm",
  style: "Industrial Minimalism with a Product-Focused Lighting Approach",
  description: [
    'This design, based on the concept of a "Museum of Building Materials", creates a neutral canvas where products are displayed as artworks.',
    "A three-layer lighting system (Task–Accent–Ambient) with variable color temperatures (2700K for wood to 4000K for metals) highlights the texture and color of each material precisely.",
    "An exposed ceiling with a grid of magnetic rails allows for dynamic repositioning of spotlights based on product layout.",
    "Acoustic concrete walls with microcement coating serve both as a neutral display background and as a means of controlling sound reflections in the large space.",
  ],
  phases: [
    {
      title: "Spatial Sonography",
      points: [
        "Adaptive Lighting:",
        "Smart spotlights with 360° adjustable angles",
        "Motion sensors to boost lighting intensity in high-traffic product zones",
        "Circulation Design:",
        "A 3.5-meter-wide spiral path for optimal access to all sections",
        "Consultation stations with interactive display kiosks",
      ],
    },
    {
      title: "Key Execution Details",
      points: [
        "Display Showcases:",
        "UV-resistant glass stands, 12mm thick",
        "Suspended shelves using stainless steel cables",
        "Flooring:",
        "Metallic epoxy with guided lighting lines",
        "Color zoning based on product categories (blue for bathroom, gray for building materials)",
      ],
    },
    {
      title: "Retail Technologies",
      points: [
        "AR system for real-time product visualization in customer spaces",
        "RFID-enabled shelving for smart inventory management",
        "4K video walls displaying product installation methods",
      ],
    },
  ],
  features: [
    "Customer Experience: A purchase journey designed around the logical sequence of construction projects (from raw materials to finished products)",
    "Flexibility: Modular shelving system with adjustable dimensions within 24 hours",
    "Sustainability: 100% light recycling using ceiling reflectors",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Kamranieh Mansion",
    en_name: "Kamranieh Mansion",
    fa_name: "عمارت کامرانیه",
    src: "https://ik.imagekit.io/picwagmpd/images/1.webp?updatedAt=1752737814445",
    en_description: kamraniehProjectEn,
    fa_description: kamraniehProjectFa,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/1-6.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/1-1.webp",
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
    name: "Khaji P2 | Concept Store",
    en_name: "Khaji P2 | Concept Store",
    fa_name: "خاجی فاز دو | کانسپت استور",
    src: "https://ik.imagekit.io/picwagmpd/images/3.webp?updatedAt=1752737811295",
    en_description: en_projectData_khaji,
    fa_description: fa_projectData_khaji,
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/3-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-6.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-7.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-8.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-9.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-10.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-11.webp",
      "https://ik.imagekit.io/picwagmpd/images/3-12.webp",
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
  {
    id: 6,
    name: "Khaji P1 | Facade",
    en_name: "Khaji P1 | Facade",
    fa_name: "خاجی فاز یک | نما",

    fa_description: khajiProjectDescriptionFa,
    en_description: khajiProjectDescriptionEn,
    src: "https://ik.imagekit.io/picwagmpd/images/6.webp",
    galleries: [
      "https://ik.imagekit.io/picwagmpd/images/6-1.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-2.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-3.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-4.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-5.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-6.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-7.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-8.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-9.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-10.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-11.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-12.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-13.webp",
      "https://ik.imagekit.io/picwagmpd/images/6-14.webp",
    ],
  },
];
