const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCtNrrUoa96pe0vd1p68gX_oGj4zysWX9g",
    authDomain: "project-a8a3e.firebaseapp.com",
    projectId: "project-a8a3e",
    storageBucket: "project-a8a3e.appspot.com",
    messagingSenderId: "329013445424",
    appId: "1:329013445424:web:150a2240cc93853e6a3ef5",
    measurementId: "G-X2S0TWQW65"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

async function createUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
        const userToken = await userCredential.user.getIdToken();
        console.log(userToken);

        return userToken;
    } catch (error) {
        console.error('Greška pri kreiranju korisnika:', error);
        throw error;
    }
}

const email = 'bb@example.com';
const password = 'password123';

createUser(email, password);