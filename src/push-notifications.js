import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "502490522309"
    });

    navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then((registration) =>{
            firebase.messaging().useServiceWorker(registration);
    })
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