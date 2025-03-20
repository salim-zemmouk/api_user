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
                // Installer les dépendances Node.js, y compris Cypress
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Exécuter Cypress sans générer de rapport
                sh 'npx cypress run'
            }
        }
    }
}
