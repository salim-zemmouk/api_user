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
                sh 'npm install'
            }
        }

        stage('Installer Cypress') {
            steps {
                sh 'npm install cypress --save-dev'
            }
        }

        stage('Verify Cypress Permissions') {
            steps {
                sh 'ls -l node_modules/.bin/cypress'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/reports,overwrite=false,html=true,json=true"'
            }
        }

        stage('Generate HTML Report') {
            steps {
                sh 'npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json'
                sh 'npx marge cypress/reports/report.json -f report -o cypress/reports'
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/report.html', fingerprint: true
            }
        }
    }
}
