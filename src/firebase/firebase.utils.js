import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD-mHrJGUVFNIBjYUxOhf3neZj5yVG8_jU',
  authDomain: 'crwn-db-4b5f3.firebaseapp.com',
  databaseURL: 'https://crwn-db-4b5f3.firebaseio.com',
  projectId: 'crwn-db-4b5f3',
  storageBucket: '',
  messagingSenderId: '206128365075',
  appId: '1:206128365075:web:17c204d6d5b76ca7'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
