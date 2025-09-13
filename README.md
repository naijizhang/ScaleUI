# ScaleUI

⚡ **ScaleUI** is a high-performance React UI library for **big data presentation at scale**.  
It provides blazing-fast, virtualized components to explore, visualize, and interact with **massive datasets** (JSON, logs, grids, trees) without performance bottlenecks.

---

## ✨ Features

- 🚀 **Performance-first** — built with virtualization, lazy rendering, and async fetching
- 📊 **Big Data Ready** — handle JSON, logs, and tabular data with millions of records
- 🔍 **On-demand Fetching** — dynamically load data as users expand or scroll
- 🎨 **Customizable** — theming, dark/light mode, and pluggable renderers
- 🧩 **Composable** — core building blocks for dashboards, admin panels, or data-intensive UIs

---

## 📦 Components (Roadmap)

- **`VirtualList`** → core list renderer for 100k+ items
- **`JsonViewer`** → explore massive JSON with lazy expansion & fetch-on-expand
- **`DataGrid`** → high-performance grid for millions of rows (sticky headers, infinite scroll)
- **`LogViewer`** → real-time log streaming with search & highlighting
- **`TreeViewer`** → scalable tree explorer (filesystem/config style)

---

## 🚀 Getting Started

### Installation

```bash
npm install scale-ui
# or
yarn add scale-ui
# or
pnpm add scale-ui
```

### Usage

```tsx
import { JsonViewer } from "scale-ui";

export default function App() {
  const data = {
    users: Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `User ${i}`,
    })),
  };

  return (
    <div style={{ height: 400 }}>
      <JsonViewer data={data} />
    </div>
  );
}
```

---

## 🛠 Development (Local Setup)

Clone and run locally:

```bash
git clone https://github.com/naijizhang/ScaleUI.git
cd ScaleUI
npm install
npm run dev
```

Build the library:

```bash
npm run build
```

Run Storybook (once added):

```bash
npm run storybook
```

---

## 📈 Roadmap

- [ ] Initial release with `VirtualList` + `JsonViewer`
- [ ] Add `DataGrid` and `LogViewer`
- [ ] Documentation site (Docusaurus or VitePress)
- [ ] Performance benchmarks & tests
- [ ] Advanced theming and accessibility support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an [issue](https://github.com/naijizhang/ScaleUI/issues) or submit a PR.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).  
Copyright © 2025 **Naiji Zhang**
