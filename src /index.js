// Import de Express
const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
    res.send('Hello CI/CD Secure!');
});

// Nouvelle route pour test
app.get('/status', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

