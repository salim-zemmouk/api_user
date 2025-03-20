pipeline {
    agent any

    environment {
        CYPRESS_BASE_URL = 'http://localhost:8081' // Remplace par l'URL de ton application
    }

    stages {
        stage('Checkout') {
            steps {
                // Cloner le dépôt Git
                git branch: 'main', url: 'https://github.com/salim-zemmouk/api_user.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installer les dépendances Node.js
                sh 'npm install'
            }
        }

        stage('Install Cypress Binary') {
            steps {
                // Télécharger le binaire Cypress si nécessaire
                sh 'npx cypress install'
            }
        }

        stage('Fix Cypress Permissions') {
            steps {
                // Donner les permissions d'exécution à Cypress (si nécessaire)
                sh 'chmod +x node_modules/.bin/cypress'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Exécuter Cypress avec Mocha
                sh 'npx cypress run'
            }
        }
    }
}
