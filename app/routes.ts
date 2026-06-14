// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // This maps the home URL (/) to your existing home.tsx file
  index("routes/home.tsx"), 
  
  // 1. Map the /gallery URL to your gallery component
  route("gallery", "routes/gallery.jsx"),
  
  // 2. Map the /recipe/:id URL to your dynamic recipe component
  route("recipe/:id", "routes/recipe.jsx"),
] satisfies RouteConfig;