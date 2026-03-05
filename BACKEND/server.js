const express = require('express');
const app = express();
const port = 3001;

// IMPORTANT: Permettre au frontend d'appeler le backend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Une route test
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend OK !' });
});
# Ajoute un commentaire dans le backend
echo "// Déploiement automatique réussi !" >> BACKEND/server.js
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Backend démarré sur http://localhost:${port}`);
});