importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '502490522309'
});

const messaging = firebase.messaging();

self.addEventListener('push', event => {
    const notification  = event.data.json().notification;
    const { title, body, icon } = notification;
    const options = {
        body: body,
        icon: icon
    }

    event.waitUntil(self.registration.showNotification(title, options));
});
  