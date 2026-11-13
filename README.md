# LocalDeploy 官网

**线上地址：** https://pingredsai.github.io/localdeploy/  
**仓库：** https://github.com/Pingredsai/localdeploy

静态站点，无构建步骤，可直接发布到 GitHub Pages。

## 页面

- `index.html`：首页、四档方案、工作原理、FAQ
- `plans.html`：方案对比、硬件匹配、Qwen3.8 27B 高级方案
- `enterprise.html`：企业本地 AI 交付与服务
- `404.html`：自定义 404

## 本地预览

在当前目录下运行：

```powershell
py -m http.server 4191
```

打开 `http://127.0.0.1:4191`。

## GitHub Pages

1. 新建独立公开仓库；
2. 把本目录内容放在仓库根目录；
3. Settings → Pages → Deploy from a branch → `main` / `(root)`；
4. 如需正式发布，再绑定域名。

## 方案

- 轻量版：Qwen2.5 1.5B / 8GB 内存
- 均衡版：Qwen2.5 3B / 16GB 内存
- 性能版：Qwen2.5 7B / 16GB + 8GB 显存
- 高级版：Qwen3.8 27B / NVIDIA 12GB+
