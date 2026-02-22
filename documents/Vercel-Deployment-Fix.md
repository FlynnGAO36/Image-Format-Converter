# Vercel 部署修复记录

## 问题描述

**日期**: 2026-02-22  
**错误信息**: 
```
Error: Vulnerable version of next-mdx-remote detected (4.4.1). 
Please update to version 6.0.0 or later. 
Learn More: https://vercel.link/CVE-2026-0969
```

## 根本原因

项目的 `package.json` 中包含了一个有安全漏洞的依赖：
- **包名**: `next-mdx-remote`
- **版本**: 4.4.1
- **漏洞编号**: CVE-2026-0969
- **问题**: 这个包实际上在项目中**没有被使用**

## 分析过程

1. 检查了所有 TypeScript/JavaScript 文件
2. 搜索关键词 `next-mdx-remote` 和 `MDXRemote`
3. 确认项目使用的是 `react-markdown` 来渲染博客内容，而不是 `next-mdx-remote`
4. 结论：这是一个遗留的未使用依赖

## 解决方案

### 步骤 1: 移除依赖
从 `package.json` 中删除 `next-mdx-remote`：

```json
// 删除前
"dependencies": {
  ...
  "next-mdx-remote": "^4.4.1",
  ...
}

// 删除后
"dependencies": {
  ...
  // 已移除 next-mdx-remote
  ...
}
```

### 步骤 2: 重新安装依赖
```bash
npm install
```

**结果**: 成功移除 83 个包（包括有漏洞的包及其依赖）

### 步骤 3: 验证构建
```bash
npm run build
```

**结果**: ✅ 构建成功，所有 13 个页面正常生成

### 步骤 4: 提交并推送
```bash
git add package.json package-lock.json
git commit -m "fix: remove vulnerable next-mdx-remote dependency (CVE-2026-0969)"
git push origin main
```

**结果**: ✅ 成功推送到 GitHub

## 验证清单

- ✅ 本地构建成功
- ✅ 所有页面正常生成 (13/13)
- ✅ Linting 通过
- ✅ TypeScript 类型检查通过
- ✅ 性能指标保持良好 (First Load JS < 120kB)
- ✅ 博客文章仍然正常渲染（使用 react-markdown）
- ✅ 代码已推送到 GitHub
- ⏳ 等待 Vercel 自动重新部署

## 技术说明

### 当前使用的 Markdown 渲染方案

项目使用 `react-markdown` 来渲染博客内容，这是一个更简单且安全的方案：

**文件**: `app/blog/[slug]/page.tsx`
```typescript
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// 在组件中使用
<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{...}}
>
  {post.content}
</ReactMarkdown>
```

### 为什么不需要 next-mdx-remote？

- `react-markdown`: 简单的 Markdown 渲染，适合博客文章
- `next-mdx-remote`: 更高级的 MDX 支持（可以在 Markdown 中使用 React 组件）
- 我们的需求：只需要渲染标准 Markdown + GFM（GitHub Flavored Markdown）
- 结论：`react-markdown` 完全满足需求，无需额外复杂性

## 后续监控

1. 检查 Vercel 部署日志，确认没有安全警告
2. 访问部署的网站，验证所有功能正常
3. 检查博客文章渲染是否正常
4. 定期运行 `npm audit` 检查其他潜在漏洞

## 相关链接

- [Vercel CVE 信息](https://vercel.link/CVE-2026-0969)
- [next-mdx-remote GitHub](https://github.com/hashicorp/next-mdx-remote)
- [react-markdown 文档](https://github.com/remarkjs/react-markdown)

---

**修复完成时间**: 2026-02-22 10:16 AM AEDT  
**提交哈希**: 9d95852  
**状态**: ✅ 修复成功，等待 Vercel 重新部署
