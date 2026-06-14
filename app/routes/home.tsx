import { Link } from "react-router";

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Welcome to the Recipe Gallery! 🍳</h1>
      <p>Discover, explore, and cook your favorite dishes.</p>
      <div style={{ marginTop: "20px" }}>
        <Link 
          to="/gallery" 
          style={{ 
            padding: "10px 20px", 
            background: "#0070f3", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px",
            display: "inline-block"
          }}
        >
          Explore the Gallery
        </Link>
      </div>
    </div>
  );
}