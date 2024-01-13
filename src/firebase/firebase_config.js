import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC1kDtYIauw1KYF2OYK6zJBj_DtDxjuOWo",
  authDomain: "login-signup-authenticat-4fa75.firebaseapp.com",
  databaseURL: "https://login-signup-authenticat-4fa75-default-rtdb.firebaseio.com",
  projectId: "login-signup-authenticat-4fa75",
  storageBucket: "login-signup-authenticat-4fa75.appspot.com",
  messagingSenderId: "77434343036",
  appId: "1:77434343036:web:de2288d9664bae1c7483f9"
};

const app = initializeApp(firebaseConfig, "admin");
export const storage = getStorage(app) 
