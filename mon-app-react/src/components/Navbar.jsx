import React from "react"
import "./Navbar.css" // CSS pour styliser la navbar

// Composant Navbar
function Navbar() {
  // tableau des items du menu
  const menu = ["Accueil", "Users", "Produits", "Posts"]

  return (
    <nav className="navbar">
      <ul>
        {/* map parcourt le tableau et crée un <li> pour chaque item */}
        {menu.map((item, index) => (
          <li key={index}>{item}</li> // key = index pour React
        ))}
      </ul>
    </nav>
  )
}

export default Navbar