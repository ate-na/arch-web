import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const projects = [
  {
    id: 1,
    name: "Kamranieh Mansion",
    en_name: "Kamranieh Mansion",
    fa_name: "عمارت کامرانیه",
    src: "https://ik.imagekit.io/picwagmpd/images/1.webp?updatedAt=1752737814445",
  },
  {
    id: 2,
    name: "Kordan Villa",
    en_name: "Kordan Villa",
    fa_name: "ویلای مدرن کوهسار البرز",
    src: "https://ik.imagekit.io/picwagmpd/images/2.webp?updatedAt=1752737815182",
  },
  {
    id: 3,
    name: "Khaji P1 | Facade",
    en_name: "Khaji P1 | Facade",
    fa_name: "خاجی فاز یک | نما",
    src: "https://ik.imagekit.io/picwagmpd/images/3.webp?updatedAt=1752737811295",
  },
  {
    id: 4,
    name: "Noshahr Villa",
    en_name: "Noshahr Villa",
    fa_name: "ویلای مدرن نوشهر",
    src: "https://ik.imagekit.io/picwagmpd/images/4.webp?updatedAt=1752737819373",
  },
  {
    id: 5,
    name: "Elahieh House",
    en_name: "Elahieh House",
    fa_name: "عمارت الهیه",
    src: "https://ik.imagekit.io/picwagmpd/images/5.webp?updatedAt=1752737819339",
  },
  {
    id: 6,

    name: "Khaji P2 | Concept Store",
    en_name: "Khaji P2 | Concept Store",
    fa_name: "خاجی فاز دو | کانسپت استور",
    src: "https://ik.imagekit.io/picwagmpd/images/6.webp",
  },
];

const BASE_URL = "https://thatlab.art";
const LANGS = ["", "/en"];
const staticRoutes = ["/", "/projects", "/about", "/blog"];

const getSlug = (name) => name.trim().toLowerCase().replace(/\s+/g, "-");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const outputPath = path.resolve(__dirname, "../sitemap.xml");
const sitemapStream = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(outputPath);
sitemapStream.pipe(writeStream);

for (const lang of LANGS) {
  for (const route of staticRoutes) {
    sitemapStream.write({
      url: `${lang}${route}`,
      lastmod: new Date(),
      changefreq: "monthly",
      priority: route === "/" ? 1.0 : 0.7,
    });
  }

  for (const project of projects) {
    sitemapStream.write({
      url: `${lang}/projects/${getSlug(project.name)}`,
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    });
  }
}

sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    console.log("✅ sitemap.xml created at /public/sitemap.xml");
  })
  .catch((err) => {
    console.error("❌ Failed to generate sitemap:", err);
  });
