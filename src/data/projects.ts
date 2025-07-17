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

export const projects: Project[] = [
  {
    id: 1,
    name: "Kamranieh Mansion",
    en_name: "Kamranieh Mansion",
    fa_name: "عمارت کامرانیه",
    src: "https://ik.imagekit.io/picwagmpd/images/1.webp?updatedAt=1752737814445",
    en_description: en_projectData,
    fa_description: fa_projectData,
  },
  {
    id: 2,
    name: "Kordan Villa",
    en_name: "Kordan Villa",
    fa_name: "ویلای مدرن کوهسار البرز",
    src: "https://ik.imagekit.io/picwagmpd/images/2.webp?updatedAt=1752737815182",
    en_description: en_projectData,
    fa_description: fa_projectData,
  },
  {
    id: 3,
    en_name: "Khaji Store",
    name: "Khaji Store",
    fa_name: "فروشگاه خواجی",
    src: "https://ik.imagekit.io/picwagmpd/images/3.webp?updatedAt=1752737811295",
    en_description: en_projectData,
    fa_description: fa_projectData,
  },
  {
    id: 4,
    name: "Noshahr Villa",
    en_name: "Noshahr Villa",
    fa_name: "ویلای مدرن نوشهر",
    src: "https://ik.imagekit.io/picwagmpd/images/4.webp?updatedAt=1752737819373",
    en_description: en_projectData,
    fa_description: fa_projectData,
  },
  {
    id: 5,
    name: "Elahieh House",

    en_name: "Elahieh House",
    fa_name: "عمارت الهیه",
    src: "https://ik.imagekit.io/picwagmpd/images/5.webp?updatedAt=1752737819339",
    en_description: en_projectData,
    fa_description: fa_projectData,
  },
];
