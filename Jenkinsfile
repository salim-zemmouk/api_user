pipeline {
    agent any

    environment {
        CYPRESS_BASE_URL = 'http://localhost:8081' // Remplace par l'URL de ton application
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/salim-zemmouk/api_user.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installer les dépendances Node.js, incluant Mocha et Mochawesome
                sh 'npm install'
            }
        }

        stage('Installer Cypress') {
            steps {
                // Installer cypress
                sh 'npm install cypress --save-dev'
            }
        }

        stage('Install Mocha and Mochawesome') {
            steps {
                // Installer Mocha et Mochawesome
                sh 'npm install mocha mochawesome mochawesome-merge mochawesome-report-generator --save-dev'
            }
        }

        stage('Verify Cypress Permissions') {
            steps {
                // Vérifier les permissions de Cypress
                sh 'ls -l node_modules/.bin/cypress'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Exécuter Cypress avec Mocha pour générer un rapport
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
}
