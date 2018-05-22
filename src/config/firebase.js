import { initializeApp } from 'firebase'

const config = {
  databaseURL: 'https://<projectId>.firebaseio.com', // edit with ur db url project
  projectId: 'projectId' // edit with ur project id
}

const firebase = initializeApp(config).database()

export default firebase
