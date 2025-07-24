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
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          {lang === "fa" ? "پروژه‌ها | دفترطراحی دَت" : "Projects | ThatLab"}
        </title>
        <meta
          name="description"
          content={
            lang === "fa"
              ? "نگاهی به پروژه‌های معماری و طراحی داخلی دَت"
              : "Explore architectural and interior projects by ThatLab"
          }
        />
        <link rel="canonical" href="https://thatlab.art/projects" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    </>
  );
};

export default ProjectHelmetList;
