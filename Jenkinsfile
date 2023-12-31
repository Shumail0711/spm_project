pipeline {
    agent any

    stages {
        stage('Testing') {
            steps {
                echo 'Running tests...'
                // Add your testing commands or scripts here
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your build commands or scripts here
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQubeScanner' // Update this with the correct tool name
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=abcd \
                            -Dsonar.projectName='abcd' \
                            -Dsonar.host.url=http://localhost:9000 \
                            -Dsonar.token=sqp_3777dacafc4fe317060bccfc91e491625506215b"
                    }
                }
            }
        }

        stage('Deployment') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands or scripts here
            }
        }
    }
}
