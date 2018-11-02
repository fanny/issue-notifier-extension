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
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: payload.data.icon
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
  