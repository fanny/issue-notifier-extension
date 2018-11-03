import firebase from 'firebase';
import firebaseOptions from '../config/firebase';

export const initializeFirebase = () => {
    console.log(firebaseOptions);
    
    firebase.initializeApp(firebaseOptions);

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
        console.log(`token do usuario: ${token}`);

        return token;
    }catch(error){
        console.log(error);
    }
}