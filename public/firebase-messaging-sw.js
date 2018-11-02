importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA5j-DLK2oLZQBJNTt02WZl-y8WE62E-cI",
    authDomain: "teste-69df9.firebaseapp.com",
    databaseURL: "https://teste-69df9.firebaseio.com",
    projectId: "teste-69df9",
    storageBucket: "teste-69df9.appspot.com",
    messagingSenderId: "502490522309"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const notificationTitle = payload.notification.data.title;
    const notificationOptions = {
      body: payload.notification.data.body,
      icon: payload.notification.data.icon
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

self.addEventListener("push", event => {
    const data = event.data.json()
    const title = data.notification.title;
    console.log(title);
    const body = {
        body: data.notification.body,
        icon: data.notification.icon
    }
    event.waitUntil(self.registration.showNotification(title, body))
});
  