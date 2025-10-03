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

/**
 * Sets or updates JSON-LD structured data in the document head
 */
export function setJsonLd(data: Record<string, any>): void {
  const scriptId = 'jsonld-structured-data';

  // Remove existing JSON-LD script if present
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script element
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
