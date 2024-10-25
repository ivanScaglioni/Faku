import ogImageSrc from "@images/mendoza_metalurgica_logo.png";

export const SITE = {
  title: "Medoza Metalúrgica",
  tagline: "Soldamos lo que necesites en Medoza Metalúrigca",
  description: "Taller metalúrgico en Mendoza, Godoy Cruz",
  description_short: "Taller metalúrgico en Mendoza, Godoy Cruz",
  url: "https://faku.pages.dev/",
  author: "Facundo Masman",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es-Es",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Soldamos lo que necesites en Medoza Metalúrigca`,
  description: "Taller metalúrgico en Mendoza, Godoy Cruz",
  image: ogImageSrc,
};
