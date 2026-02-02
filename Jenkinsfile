pipeline {
    agent {
        docker {
            // Use a recent Node LTS version (Node 20 or 18 works great for CRA in 2025/2026)
            image 'node:20-alpine'
            // Reuse npm cache between builds → much faster second+ runs
            args '-u root:root -v npm-cache:/root/.npm'
        }
    }

    environment {
        // Optional: force CI mode (helps with some warnings / behaviors)
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                // Jenkins automatically checks out your GitHub repo when using SCM
                // No extra git step needed in most cases
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // Use npm ci → faster, reproducible, respects package-lock.json
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                // --watchAll=false → non-interactive mode (required in CI)
                // --ci → better reporting & exit codes
                sh 'npm test -- --watchAll=false --ci'
            }
        }

        stage('Build production app') {
            steps {
                sh 'npm run build'
            }
        }

        // Optional: Archive the build folder so you can download it from Jenkins
        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true, allowEmptyArchive: false
            }
        }
    }

    post {
        always {
            // Clean workspace (optional but good practice)
            cleanWs()
        }
        success {
            echo '🎉 Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed – check the console output'
        }
    }
}