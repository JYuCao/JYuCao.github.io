import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostUrl, getSummary, sortPosts } from '../lib/blog';

export async function GET(context) {
  const posts = sortPosts(await getCollection('blog', ({ data }) => !data.draft));
  return rss({
    title: 'JYCao 的文章',
    description: '曹家宇的技术文章与实践记录。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: getSummary(post),
      pubDate: post.data.date,
      link: getPostUrl(post),
    })),
    customData: '<language>zh-CN</language>',
  });
}
