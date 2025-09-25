# Koa + TypeScript 后端脚手架

- Node: >=20
- 语言: TypeScript
- 框架: Koa (@koa/router, koa-bodyparser)
- 质量: ESLint + Prettier（分号 + 双引号）
- 提交钩子: Husky + lint-staged
- 测试: Vitest + Supertest

## 常用脚本

- `npm run dev` 本地开发热重载
- `npm run build` 编译到 `dist`
- `npm start` 运行编译产物
- `npm run test` 运行单测
- `npm run test:watch` 监听测试
- `npm run lint` 代码检查
- `npm run format` 统一格式

## 目录结构

```
src/
  app.ts
  index.ts
tests/
  app.test.ts
```
