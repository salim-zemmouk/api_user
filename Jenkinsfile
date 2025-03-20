pipeline {
    agent any

    environment {
        // Définir les variables d'environnement si nécessaire
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

        stage('Run Cypress Tests') {
            steps {
                // Exécuter les tests Cypress avec Mocha
                sh 'npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/reports,overwrite=false,html=true,json=true"'
            }
        }

        stage('Generate HTML Report') {
            steps {
                // Générer le rapport HTML à partir des fichiers JSON
                sh 'npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json'
                sh 'npx marge cypress/reports/report.json -f report -o cypress/reports'
            }
        }

        stage('Archive Report') {
            steps {
                // Archiver le rapport HTML pour le rendre disponible dans Jenkins
                archiveArtifacts artifacts: 'cypress/reports/report.html', fingerprint: true
            }
        }
    }

    post {
        always {
            // Nettoyer après l'exécution (optionnel)
            sh 'rm -rf cypress/reports/*.json'
        }
    }
}