import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getPostUrl(post: BlogPost) {
  return `/posts/${post.id.replace(/\.(md|mdx)$/i, '')}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Shanghai',
  }).format(date);
}

export function getSummary(post: BlogPost, maxLength = 120) {
  if (post.data.description) return post.data.description;

  const paragraph = (post.body ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith('#') && !line.startsWith('!['));

  if (!paragraph) return '曹家宇的技术文章。';

  const plain = paragraph
    .replace(/<[^>]*>/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return plain.length > maxLength ? `${plain.slice(0, maxLength)}…` : plain;
}

export function readingMinutes(body: string | undefined) {
  body ??= '';
  const cjkCount = (body.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const latinCount = (body.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ').match(/[\p{L}\p{N}]+/gu) ?? []).length;
  return Math.max(1, Math.ceil(cjkCount / 300 + latinCount / 200));
}

export function tagSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}
