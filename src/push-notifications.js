import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyA5j-DLK2oLZQBJNTt02WZl-y8WE62E-cI",
        authDomain: "teste-69df9.firebaseapp.com",
        databaseURL: "https://teste-69df9.firebaseio.com",
        projectId: "teste-69df9",
        storageBucket: "teste-69df9.appspot.com",
        messagingSenderId: "502490522309"
    });

    navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then((registration) => {
            firebase.messaging().useServiceWorker(registration);
            console.log('registrando');
        });
}

export const askForPermissionToReceiveNotifications = async () => {
    try{
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('oii', token);
        console.log(`token do usuario: ${token}`);

        return token;
    }catch(error){
        console.log(error);
    }
}