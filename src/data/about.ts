type AboutInfo = {
  image: string;
  description: string;
  email: string[];
  address: string;
  phones: string[];
  workers?: {
    name: string;
    description: string;
  }[];
  lang: string;
  whatsApp?: string;
};

export const aboutData: AboutInfo[] = [
  {
    image:
      "https://ik.imagekit.io/picwagmpd/images/about2.webp?updatedAt=1753079721182",
    description: `Born five years ago amidst the <strong>COVID-19 pandemic</strong> and an <strong>unprecedented downturn in the architecture market</strong>, THAT Office has evolved into an established practice through perseverance and the successful completion of <strong>30+ projects</strong> across residential, commercial, and interior design domains.<br/>
At THAT, we view architecture as a <strong>living process</strong> – where ideas emerge at the intersection of user needs, site constraints, and <strong>architectural creativity</strong>. <strong>"The THAT Moment"</strong> represents that pivotal instant when designs transcend blueprints to become integrated with space and human experience.<br/>
While we take pride in our journey thus far, our focus remains firmly on <strong>THAT's future</strong> – continuously redefining the <strong>relationship between people and their built environment</strong> through thoughtful, human-centered design.`,
    email: ["support@thatlab.art"],
    address: `Agiou NIkolaou 9,11741 Koukaki Athens, Greece`,
    phones: ["+21 91017779"],
    whatsApp: "+2191017779",
    lang: "en",
  },
  {
    image:
      "https://ik.imagekit.io/picwagmpd/images/about2.webp?updatedAt=1753079721182",
    description: `
پنج سال پیش در بحبوحه‌ی <strong>همه‌گیری کووید-۱۹</strong> و در میان <strong>رکود بی‌سابقه‌ی بازار معماری</strong> متولد شد. امروز با گذر از چالش‌های متعدد و اجرای موفق <strong>بیش از ۳۰ پروژه</strong> در حوزه‌های مسکونی، تجاری و طراحی داخلی، به هویت مستحکمی در عرصه‌ی معماری دست یافته‌ایم.<br/>
ما در دَت به معماری به عنوان <strong>فرآیندی زنده</strong> می‌نگریم؛ جایی که ایده‌ها در تقاطع نیازهای کاربران، محدودیت‌های سایت و <strong>خلاقیت معمارانه</strong> شکل می‌گیرند.<br/> <strong>آن لحظه -دَت-</strong> همان نقطه‌ی عطفی است که طرح از دنیای مجازی نقشه‌ها بیرون می‌آید و با فضا و زندگی مردم عجین می‌شود.<br/>
امروز با افتخار به گذشته نگاه می‌کنیم، اما <strong>تمرکز ما همواره بر آینده‌ی دَت</strong> است؛ جایی که به دنبال <strong>بازتعریف رابطه‌ی انسان با محیط ساخته‌شده</strong> هستیم.`,
    email: ["support@thatlab.art"],
    address: "خیابان ولی‌عصر، شماره ۹، طبقه دوم، کدپستی ۱۵۹۴۷، تهران، ایران",
    phones: ["۰۲۱۹۱۰۱۷۷۷۹"],
    whatsApp: "+2191017779",
    lang: "fa",
  },
];

export const metaData = {
  fa: {
    title: "درباره ما | دفتر طراحی دَت",
    description:
      "ما در دَت با بیش از ۳۰ پروژه موفق در حوزه‌های مسکونی، تجاری و طراحی داخلی، معماری را به عنوان فرآیندی زنده می‌بینیم.",
    keywords: "دفترطراحی دَت,thatlab,معماری, طراحی داخلی, شرکت معماری, دَت",
    canonical: "https://thatlab.art/about",
    org: {
      name: "دفتر طراحی دَت",
      url: "https://thatlab.art",
      logo: "https://ik.imagekit.io/picwagmpd/images/about2.webp",
      email: "syavashaps@gmail.com",
      address: {
        streetAddress: "خیابان ولی‌عصر، شماره ۹، طبقه دوم",
        postalCode: "۱۵۹۴۷",
        addressLocality: "تهران",
        addressCountry: "ایران",
      },
      phones: ["+98 912 345 6789"],
    },
  },
  en: {
    title: "About Us | THAT Design Office",
    description:
      "Born five years ago amidst the COVID-19 pandemic and an unprecedented downturn in the architecture market...",
    keywords:
      "Thatlab ,THAT Office, architecture, interior design, design studio",
    canonical: "https://thatlab.art/en/about",
    org: {
      name: "Thatlab",
      url: "https://thatlab.art",
      logo: "https://ik.imagekit.io/picwagmpd/images/about2.webp",
      email: "syavashaps@gmail.com",
      address: {
        streetAddress: "Agiou Nikolaou 9",
        postalCode: "11741",
        addressLocality: "Athens",
        addressCountry: "Greece",
      },
      phones: ["+30 210 22 01 978"],
    },
  },
};
