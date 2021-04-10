pipeline{
  agent {
    label 'agent-node'
  }
  stages{
    stage('boing') {
      steps{
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins_ssh_git', url: 'https://github.com/ciclids/web-automation']]])
      }
    }
  }
}
