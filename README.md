# Personal Website

陈江悦的静态个人网站，面向大模型算法、多模态检索、RAG 与 Agent 相关实习申请。

## Local Preview

直接双击打开 [index.html](/Users/cjy/Personal%20Website/index.html) 即可查看。

如果希望用本地 HTTP 预览：

```bash
npm run dev
```

默认地址是 [http://localhost:3000](http://localhost:3000)。

## Public Links

- 主站：[https://personal-website-delta-sable-76.vercel.app/](https://personal-website-delta-sable-76.vercel.app/)
- 镜像：[https://YUEcjy13.github.io/personal-website/](https://YUEcjy13.github.io/personal-website/)
- 仓库：[https://github.com/YUEcjy13/personal-website](https://github.com/YUEcjy13/personal-website)

## Project Structure

- `index.html`：首页入口
- `research/`：研究详情页
- `projects/`：项目详情页
- `data/site-data.js`：站点内容数据
- `scripts/`：前端渲染与构建脚本
- `styles/site.css`：共享样式
- `assets/`：公开图片、简历和证书副本
- `materials/`：私有原始材料，不参与公网部署
- `dist/`：部署产物目录，由 `npm run build` 生成

## Build For Deployment

```bash
npm run build
```

构建后会生成 `dist/`，其中只保留可公开部署的站点文件，不包含 `materials/`。

## GitHub Pages

1. 将仓库命名为 `personal-website`
2. 推送到 `YUEcjy13/personal-website`
3. 在 GitHub 仓库的 `Settings -> Pages` 中选择 `GitHub Actions`
4. 推送后会自动执行 `.github/workflows/deploy-pages.yml`

正式地址：
[https://YUEcjy13.github.io/personal-website/](https://YUEcjy13.github.io/personal-website/)

## Vercel

1. 在 Vercel 中导入 `YUEcjy13/personal-website`
2. 保持仓库根目录为项目根目录
3. `vercel.json` 会指定构建命令为 `npm run build`
4. 输出目录固定为 `dist`

正式地址：
[https://personal-website-delta-sable-76.vercel.app/](https://personal-website-delta-sable-76.vercel.app/)

## Update Workflow

1. 在仓库根目录更新 `data/`、`scripts/`、`styles/` 或 `assets/`
2. 运行 `npm run build`
3. 本地检查 `dist/` 中页面与资源是否正常
4. 推送到 GitHub 后，GitHub Pages 与 Vercel 都会自动更新
