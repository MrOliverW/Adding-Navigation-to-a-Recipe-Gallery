import { Link } from "react-router";
import { recipes } from "../recipeData"; // We will create this data file next!

export default function Gallery() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Recipe Gallery</h2>
      <p>Select a recipe to view its details:</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <h4 style={{ margin: "10px 0" }}>{recipe.title}</h4>
            <Link to={`/recipe/${recipe.id}`} style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}