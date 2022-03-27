import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA0N2eCSHtEmY7v-z2Mk7V_vU_yESSLiKQ",
    authDomain: "scrumpoker-nl.firebaseapp.com",
    projectId: "scrumpoker-nl",
    storageBucket: "scrumpoker-nl.appspot.com",
    messagingSenderId: "453511217365",
    appId: "1:453511217365:web:7695e1c678159358da625c",
    measurementId: "G-JTB2P138MY"
};

export const firebaseApp = initializeApp(firebaseConfig)