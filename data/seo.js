// Shared SEO helpers. Every page builds its metadata through pageMetadata()
// so each route gets its own canonical URL and Open Graph URL instead of
// inheriting the homepage's.

export const SITE_URL = "https://dynastyweb.co";
export const SITE_NAME = "Dynasty Web";

/**
 * @param {object} opts
 * @param {string} opts.title        Page title (template adds " · Dynasty Web")
 * @param {string} opts.description  Meta description, aim for 140–160 chars
 * @param {string} opts.path         Route path, e.g. "/solutions"
 * @param {boolean} [opts.absoluteTitle] Use title as-is, no template suffix
 */
export function pageMetadata({ title, description, path, absoluteTitle = false }) {
  const fullTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
