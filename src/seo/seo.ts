/**
 * SEO utilities for setting page metadata and JSON-LD structured data
 */

interface PageMetaOptions {
  title: string;
  description: string;
}

/**
 * Sets the page title and meta description
 */
export function setPageMeta({ title, description }: PageMetaOptions): void {
  // Set document title
  document.title = title;

  // Set or update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
}

