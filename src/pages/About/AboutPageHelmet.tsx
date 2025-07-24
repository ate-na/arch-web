import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { metaData } from "../../data/about";

const AboutPageHelmet = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "fa" ? "fa" : "en";
  console.log(lang);
  const meta = metaData[lang];
  console.log(meta);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: meta.org.name,
    url: meta.org.url,
    logo: meta.org.logo,
    email: meta.org.email,
    address: {
      "@type": "PostalAddress",
      ...meta.org.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: meta.org.phones[0],
      contactType: "Customer Service",
    },
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={meta.canonical} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default AboutPageHelmet;
