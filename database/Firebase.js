import firebase from "firebase"

const firebaseConfig ={
    apiKey: "AIzaSyC_OA2cP37g8WHQjf0PPYJhEF_g8wb5EkU",
    authDomain: "proyectolibro-c6ff4.firebaseapp.com",
    databaseURL: "https://proyectolibro-c6ff4-default-rtdb.firebaseio.com",
    projectId: "proyectolibro-c6ff4",
    storageBucket: "proyectolibro-c6ff4.appspot.com",
    messagingSenderId: "475067252407",
    appId: "1:475067252407:web:eb0ed4346bdc543f5d9732",
    measurementId: "G-T8NTYJGD8H"
}

firebase.initializeApp(firebaseConfig);

export default firebase