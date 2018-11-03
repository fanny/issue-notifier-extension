import firebase from 'firebase';
import firebaseOptions from '../config/firebaseOptions';
import axios from 'axios';

const initializeFirebase = () => {    
    firebase.initializeApp(firebaseOptions);

    navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then((registration) => {
            firebase.messaging().useServiceWorker(registration);
        });
}

const askForPermissionToReceiveNotifications = async () => {
    try{
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log(`token do usuario: ${token}`);
        axios({
            url: 'http://localhost:5000/register',
            method: 'post',
            headers: { 'crossDomain': true },
            data: { userToken: token }
        }).then((response) => {
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })

        return token;
    }catch(error){
        console.log(error);
    }
}

export {
    initializeFirebase,
    askForPermissionToReceiveNotifications
}