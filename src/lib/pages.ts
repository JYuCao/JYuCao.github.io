import type { CollectionEntry } from 'astro:content';

export type ContentPage = CollectionEntry<'pages'>;

export function getPageUrl(page: ContentPage) {
  return page.id === 'home' ? '/' : `/${page.id.replace(/\.(md|mdx)$/i, '')}/`;
}
