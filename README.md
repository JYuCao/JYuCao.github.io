# JYCao.github.io

曹家宇的个人主页与技术博客，使用 Astro 构建并部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 检查与构建

```bash
npm run build
```

构建产物位于 `dist/`。推送到 `master` 后，GitHub Actions 会自动构建并发布网站。

## 修改内容

- 主页内容和个人资料：`src/content/pages/home.md`
- 博客文章：`src/content/blog/`
- 新增普通页面：在 `src/content/pages/` 添加 Markdown 文件；文件名会成为页面地址
- 在普通页面 frontmatter 中设置 `navigation` 后，该页面会自动出现在顶部导航
- 站点名称和固定导航：`src/config/site.ts`

内容文件只负责文字和元数据，页面结构由 `src/components/ContentPage.astro` 统一渲染，视觉样式集中在 `src/styles/global.css`。

新增页面示例：

```md
---
title: 项目
description: 我的项目记录。
eyebrow: PROJECTS
navigation:
  label: 项目
  order: 15
---

## 第一个项目

这里直接编写 Markdown 内容。
```

将它保存为 `src/content/pages/projects.md` 后，会自动生成 `/projects/` 页面并加入导航。省略 `navigation` 即可生成不显示在顶部导航中的独立页面。
