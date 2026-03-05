import React from "react"
import { motion } from "framer-motion"
import "./Card.css"
import "./styles.css"
import "./produit.css"
import "./Card.css"

function Produit({nom, prix}) {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2>{nom}</h2>
      <p>Prix: {prix} $</p>
    </motion.div>
  )
}

export default Produit