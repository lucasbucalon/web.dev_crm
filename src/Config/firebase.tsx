import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBeZd8MOH7g2LZCMsBUUyrtRsAT8XHVm2c',
  authDomain: 'web-dev-crm-8acee.firebaseapp.com',
  projectId: 'web-dev-crm-8acee',
  storageBucket: 'web-dev-crm-8acee.appspot.com',
  messagingSenderId: '440373949970',
  appId: '1:440373949970:web:a9a2b67ecec5fc2c5dcacb',
  measurementId: 'G-CLEQGDVJYH',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
