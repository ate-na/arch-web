import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";

interface Props {
  isProjectPage: boolean;
}

const MainHelmet: React.FC<Props> = ({ isProjectPage }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "fa" | "en";

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "fa" ? "دفتر طراحی دَت" : "ThatLab",
    url: "https://thatlab.art",
    logo: "https://thatlab.art/TabLogo.png",
    description:
      lang === "fa"
        ? "دفتر طراحی دَت ،ارائه‌دهنده خدمات حرفه‌ای معماری و طراحی داخلی"
        : "ThatLab, a professional architectural and interior design studio",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2191017779",
      contactType: "customer service",
      areaServed: "IR",
    },
  };

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project[`${lang}_name`],
      image: project.src,
      description: project[`${lang}_description`]?.description[0]?.substring(
        0,
        200
      ),
      url: `https://thatlab.art/projects/${project.name}`,
      creator: {
        "@type": "Organization",
        name: lang === "fa" ? "دفتر طراحی دَت" : "ThatLab",
        url: "https://thatlab.art",
      },
    })),
  };

  return (
    <Helmet>
      <title>
        {lang === "fa"
          ? "دفتر طراحی دَت | معماری و طراحی داخلی"
          : "ThatLab | Architectural & Interior Design Studio"}
      </title>
      <meta
        name="description"
        content={
          lang === "fa"
            ? "دفتر طراحی دَت: ارائه‌دهنده خدمات حرفه‌ای معماری و طراحی داخلی با پروژه‌های خلاقانه و معمارانه"
            : "ThatLab: Creative and professional architecture & interior design projects"
        }
      />
      <link rel="canonical" href="https://thatlab.art" />
      <link rel="alternate" hrefLang="fa" href="https://thatlab.art" />
      <link rel="alternate" hrefLang="en" href="https://thatlab.art/en" />

      {!isProjectPage && (
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      )}

      {isProjectPage && (
        <script type="application/ld+json">
          {JSON.stringify(itemListStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MainHelmet;
