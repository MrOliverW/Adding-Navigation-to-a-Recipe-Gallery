# 🍳 Recipe Gallery Router App

A modern, multi-page web application built using **React Router v7** (part of the Remix framework). This project transitions a legacy single-page state-based recipe component into a server-aware client-side routed experience featuring file-based path definitions, dynamic URL parameters, and a shared data layer.

## 🎯 Project Objectives
* **File-Based Routing Architecture:** Implement structured layout routing using the native React Router v7 conventions.
* **Dynamic Route Processing:** Generate specific recipe detail pages dynamically based on URL parameters.
* **State Hooks Integration:** Use the `useParams` hook to read and evaluate parameters safely directly from the client window context.
* **Seamless Global Navigation:** Provide structural linking layouts utilizing optimized client-side SPA links (`<Link>`).

---

## 🛠️ Tech Stack & Dependencies
* **Framework:** React Router v7 (Remix Framework Engine)
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+) / TypeScript 
* **UI Structure:** React (Functional Components + Hooks)

---

## 📂 Project Architecture

The core framework configuration leverages explicit route mappings pointing directly to isolated view components within the routes directory:

```text
app/
├── recipeData.js         # Shared central recipe data matrix
├── root.jsx             # Core application layout assembly
├── routes.ts            # Master React Router v7 configuration mapping
└── routes/              # Page view modules
    ├── home.tsx         # Welcome dashboard view (/)
    ├── gallery.jsx      # Multi-item thumbnail grid view (/gallery)
    └── recipe.jsx       # Dynamic individual recipe details view (/recipe/:id)

```

---

## ⚙️ Router Configuration (`app/routes.ts`)

Routes are explicitly declared and mapped to match URL endpoints cleanly with their respective route files:

```typescript
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Maps base URL to Home view
  route("gallery", "routes/gallery.jsx"), // Maps /gallery URL
  route("recipe/:id", "routes/recipe.jsx"), // Maps /recipe/:id dynamic parameters
] satisfies RouteConfig;

```

---

## 🚀 Getting Started

### 1. Installation

Clone the repository, navigate to the root folder, and install all required framework node packages:

```bash
npm install

```

### 2. Development Server

Launch the local Vite development instance:

```bash
npm run dev

```

Open your browser and navigate to `http://localhost:5173` to interact with the application.

### 3. Production Compilation

To optimize, bundle, and compile the application assets for live production deployment:

```bash
npm run build

```

---

## 💡 Key Implementations

### Dynamic Parameter Lookup

The `recipe.jsx` component seamlessly extracts the target identifier from the active endpoint string to perform cross-reference matching against the local object store:

```jsx
import { useParams } from "react-router";
import { recipes } from "../recipeData";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);
  
  // Implements conditional fallback UI rendering if object lookup returns undefined
  if (!recipe) return <h2>Recipe Not Found</h2>;
  
  return (
    // Component Layout Logic
  );
}

