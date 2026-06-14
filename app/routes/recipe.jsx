import { useParams, Link } from "react-router";
import { recipes } from "../recipeData";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Recipe Not Found</h2>
        <Link to="/gallery" style={{ color: "#0070f3" }}>← Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/gallery" style={{ display: "inline-block", marginBottom: "20px", color: "#0070f3", textDecoration: "none" }}>
        ← Back to Gallery
      </Link>
      <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "8px" }} />
      <h1>{recipe.title}</h1>
      <div style={{ marginTop: "20px", padding: "15px", background: "#f9f9f9", borderRadius: "8px", borderLeft: "5px solid #0070f3" }}>
        <h3>料理 Cooking Instructions</h3>
        <p style={{ lineHeight: "1.6" }}>{recipe.instructions}</p>
      </div>
    </div>
  );
}