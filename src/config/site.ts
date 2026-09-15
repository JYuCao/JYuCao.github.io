export const SITE = {
  name: 'JYCao',
  owner: '曹家宇',
  description: '曹家宇的个人主页与技术博客，记录软件开发、人工智能和嵌入式相关实践。',
} as const;

export const SECTION_NAVIGATION = [
  { label: '文章', href: '/posts/', order: 20 },
  { label: '标签', href: '/tags/', order: 30 },
] as const;
