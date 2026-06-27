import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical = "/",
  image = "/banner.webp",
  robots = "index, follow",
  type = "website",
}) {
  const siteName = "Jesta Healthcare";
  const siteUrl = "https://jestahealthcare.com";

  const fullTitle = title?.includes(siteName) ? title : `${title} | ${siteName}`;

  const fullUrl = `${siteUrl}${canonical}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}

export default SEO;
