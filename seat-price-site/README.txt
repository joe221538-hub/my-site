# SeatPrice AI 原型说明

这一版把项目改成了两层：

- 根目录前端：`index.html` / `styles.css` / `app.js`
- Cloudflare Worker 后端：`src/index.js`

目标是先把这条链路跑通：

1. 用户输入一句自然语言需求
2. AI / 规则解析出结构化条件
3. 后端返回候选航班
4. 系统生成推荐理由、风险提示、公开评价摘要
5. 前端展示成清晰的决策界面

## 现在有哪些文件

- `index.html`
  页面骨架，方便你后面直接改前端结构
- `styles.css`
  当前样式。你可以随便重做，不影响后端接口
- `app.js`
  前端交互逻辑。会优先调用 `/api/*`，如果本地直接打开文件，则自动退回本地演示模式
- `src/index.js`
  Cloudflare Worker API
- `src/engine.js`
  演示数据、规则解析、搜索和兜底摘要逻辑
- `wrangler.jsonc`
  Cloudflare Worker 配置
- `.assetsignore`
  避免把后端代码当成静态资源公开上传

## API 现在有哪 3 个

- `POST /api/intent`
  把自然语言需求拆成结构化字段
- `POST /api/search`
  根据结构化条件返回候选航班和推荐顺序
- `POST /api/summary`
  根据候选结果生成推荐理由、风险提示和公开评价摘要

## OpenAI 怎么接

如果 Cloudflare Worker 环境里有这些变量：

- `OPENAI_API_KEY`
- `OPENAI_MODEL`（可选，默认是 `gpt-5-mini`）

那么：

- `intent` 会优先用 OpenAI 解析
- `summary` 会优先用 OpenAI 写推荐摘要

如果没有配置，也不会坏：

- 系统会自动退回规则模式
- 本地直接打开 `index.html` 也能看到完整演示

## 你现在怎么预览

最简单：

1. 直接打开 `index.html`
2. 页面会进入“本地演示模式”
3. 你可以先看流程和布局，再决定怎么重画前端

## 以后怎么部署到 Cloudflare

这一版已经不是“纯静态文件上传”了，而是 `静态前端 + Worker API`。

更合适的部署方式是：

1. 把这个项目放进 GitHub
2. 用 Cloudflare Workers / Pages 连接仓库
3. 让 Cloudflare 读取 `wrangler.jsonc`
4. 在 Cloudflare 里配置 `OPENAI_API_KEY`

## 你后面最适合改哪里

- `index.html`
  重新排版信息结构
- `styles.css`
  完全重做视觉
- `app.js`
  如果你要换模块顺序或增加页面状态，可以改这里

后端接口可以先不动，继续由我来做。
