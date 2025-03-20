const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();

// Configurer la connexion à la base de données PostgreSQL
const db = pgp({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'users_db', // Modifie cela selon ta base de données
});

const app = express();
const port = 3001; // Le port de l'API pour réinitialiser la base de données

// Activer CORS (si tu exécutes Cypress sur un autre domaine)
app.use(cors());


// Créer une route pour réinitialiser la base de données
app.delete('/reset-database', async (req, res) => {
    try {
        await db.none('DELETE FROM users'); // Remplace cette requête selon ta base de données
        res.status(200).send('Database reset successfully');
    } catch (error) {
        console.error('Error resetting database:', error);
        res.status(500).send('Failed to reset database');
    }
});

app.listen(port, () => {
    console.log(`Database reset API listening at http://localhost:${port}`);
});
