const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Dossier où les rapports seront sauvegardés
    overwrite: true, // Ne pas écraser les rapports existants
    html: true, // Générer un rapport HTML
    timestamp: 'mmddyyyy_HHMMss' // Ajouter un timestamp au nom du rapport
  },
  e2e: {
    // L'URL de base de l'application backend (backend API, front-end)
    baseUrl: 'http://localhost:8081', // Exemple pour Spring Boot

    // Définit les options des fichiers de test (en cas de projets complexes)
    specPattern: 'cypress/e2e/*.cy.js',  // Spécifie où se trouvent les tests
    supportFile: 'cypress/support/e2e.js',  // Fichier support (avant chaque test)

    // Redémarrage automatique de tests sur changement dans l'application (en mode développement)
    watchForFileChanges: true,
  },

  // Configuration pour les tests "unitaires" si vous en avez (ex: tests sur composants)
  component: {
    devServer: {
      framework: 'react', // Pour les apps React, Angular, etc.
      bundler: 'webpack', // Si vous utilisez Webpack pour bundler l'application
    }
  },
});
