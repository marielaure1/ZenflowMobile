import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleAuthProvider } from "firebase/auth";



// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhUnu0Ho7WgBMrWhHdK_HwHANIvsLOXj8",
  authDomain: "zenflow-ee53d.firebaseapp.com",
  projectId: "zenflow-ee53d",
  storageBucket: "zenflow-ee53d.appspot.com",
  messagingSenderId: "983545724805",
  appId: "1:983545724805:web:8bc668ebe13a7852ff4eec",
  measurementId: "G-5D85V46904"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// const provider = new GoogleAuthProvider();

export { app, auth, getApp, getAuth };