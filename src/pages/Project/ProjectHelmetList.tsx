import { Helmet } from "react-helmet";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";

const ProjectHelmetList = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "fa" | "en";

  // ساخت JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    publisher: {
      "@type": "Organization",
      name: lang === "fa" ? "دفترطراحی دَت" : "ThatLab",
      url: "https://thatlab.art",
      logo: "https://thatlab.art/TabLogo.png",
      description:
        lang === "fa"
          ? "دفترطراحی دَت، ارائه‌دهنده خدمات حرفه‌ای معماری و طراحی داخلی"
          : "ThatLab, a professional architectural and interior design studio",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+98-xxx-xxx-xxxx",
        contactType: "customer service",
        areaServed: "IR",
      },
    },
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project[`${lang}_name`],
      image: project.src,
      description: project[`${lang}_description`].description[0].substring(
        0,
        200
      ),
      url: `https://thatlab.art/projects/${project.name}`,
      creator: {
        "@type": "Organization",
        name: lang === "fa" ? "دفترطراحی دَت" : "ThatLab",
        url: "https://thatlab.art",
      },
    })),
  };

  console.log("structuredData================", structuredData);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          {lang === "fa"
            ? "دفترطراحی دَت | پروژه‌های معماری و طراحی داخلی"
            : "ThatLab | Architectural & Interior Design Projects"}
        </title>
        <meta
          name="description"
          content={
            lang === "fa"
              ? "دفترطراحی دَت: ارائه‌دهنده خدمات حرفه‌ای معماری و طراحی داخلی با پروژه‌های خلاقانه و نوآورانه"
              : "ThatLab: Professional architectural and interior design services with creative and innovative projects"
          }
        />
        <meta
          property="og:title"
          content={
            lang === "fa"
              ? "دفترطراحی دَت | پروژه‌های معماری و طراحی داخلی"
              : "ThatLab | Architectural & Interior Design Projects"
          }
        />
        <meta
          property="og:description"
          content={
            lang === "fa"
              ? "دفترطراحی دَت: ارائه‌دهنده خدمات حرفه‌ای معماری و طراحی داخلی با پروژه‌های خلاقانه"
              : "ThatLab: Professional architectural and interior design services with creative projects"
          }
        />
        <meta property="og:url" content="https://thatlab.art" />
        <meta property="og:image" content="https://thatlab.art/TabLogo.png" />
        <link rel="canonical" href="https://thatlab.art" />
        <link rel="alternate" hrefLang="en" href="https://thatlab.art/en" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </>
  );
};

export default ProjectHelmetList;
