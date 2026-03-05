// On importe React
import React from "react"
// On importe le CSS
import "./Card.css"
// On importe motion pour animer la carte
import { motion } from "framer-motion"

// Composant User avec animation
function User({nom, metier}) {
  return (
    // motion.div remplace div pour permettre les animations
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}    // départ invisible et décalé vers le bas
      animate={{ opacity: 1, y: 0 }}     // arrivée visible et à sa place
      transition={{ duration: 0.5 }}     // durée de l'animation 0.5 seconde
      whileHover={{ scale: 1.05 }}       // effet hover : légèrement agrandi
    >
      <h2>{nom}</h2>      {/* Nom de l’utilisateur */}
      <p>{metier}</p>     {/* Métier de l’utilisateur */}
    </motion.div>
  )
}

// Export du composant
export default User