import React from "react"
import Navbar from "./components/Navbar"
// On importe les composants que l'on a créés
import User from "./components/User"      // composant pour afficher un utilisateur
import Produit from "./components/Produit"// composant pour afficher un produit
import Post from "./components/Post"      // composant pour afficher un post/article

// On importe le fichier CSS pour aligner les cartes
import "./App.css"                         // contient la classe .container avec display:flex

// Composant principal de l'application
function App() {

  // Tableau d'objets représentant les utilisateurs
  const users = [
    {nom:"Omar", metier:"Dev"},
    {nom:"Sara", metier:"Designer"},
    {nom:"Ali", metier:"AI"}
  ]

  // Tableau d'objets représentant les produits
  const produits = [
    {nom:"Iphone", prix:1000},
    {nom:"PC", prix:2000},
    {nom:"Clavier", prix:100}
  ]

  // Tableau d'objets représentant les posts/articles
  const posts = [
    {titre:"React debutant", contenu:"Apprendre React pas à pas"},
    {titre:"CSS moderne", contenu:"Faire des interfaces propres"},
    {titre:"Map() + Props", contenu:"Créer des listes dynamiques"}
  ]

  // Retour du JSX (ce que React va afficher)
  return (
    <div>
         {/* Navbar en haut */}
      <Navbar />

      {/* Titre principal de la page */}
      <h1>Mini site React pro</h1>

      {/* Section Users */}
      <h2>Users</h2>
      {/* Container pour aligner les cartes horizontalement */}
      <div className="container">
        {/* map() parcourt le tableau users et crée un composant User pour chaque utilisateur */}
        {users.map((u,index) => (
          <User 
            key={index}         // clé unique pour React, important pour la performance
            nom={u.nom}         // envoie la donnée "nom" au composant User via props
            metier={u.metier}   // envoie la donnée "metier" au composant User via props
          />
        ))}
      </div>

      {/* Section Produits */}
      <h2>Produits</h2>
      <div className="container">
        {/* map() parcourt le tableau produits */}
        {produits.map((p,index) => (
          <Produit 
            key={index}        // clé unique pour React
            nom={p.nom}        // prop "nom" envoyée au composant Produit
            prix={p.prix}      // prop "prix" envoyée au composant Produit
          />
        ))}
      </div>

      {/* Section Posts */}
      <h2>Posts</h2>
      <div className="container">
        {/* map() parcourt le tableau posts */}
        {posts.map((p,index) => (
          <Post 
            key={index}        // clé unique pour React
            titre={p.titre}    // prop "titre" envoyée au composant Post
            contenu={p.contenu}// prop "contenu" envoyée au composant Post
          />
        ))}
      </div>
      

    </div>
  )
}

// On exporte le composant App pour qu'il soit utilisé dans index.js
export default App