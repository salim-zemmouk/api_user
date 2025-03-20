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

        stage('Run Cypress Tests') {
            steps {
                // Exécuter Cypress avec Mocha pour générer un rapport
                sh 'npx cypress run'
            }
        }




        }
    }
}
