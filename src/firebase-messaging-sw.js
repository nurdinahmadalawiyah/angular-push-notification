importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDpgdIHtw4Lne3To9k9-3P5RsNsJPpwV7Y",
  authDomain: "angular-push-notificatio-6874d.firebaseapp.com",
  projectId: "angular-push-notificatio-6874d",
  storageBucket: "angular-push-notificatio-6874d.appspot.com",
  messagingSenderId: "875347825210",
  appId: "1:875347825210:web:d24dd3bc218a99369e5b03"
});
const messaging = firebase.messaging.isSupported();
console.log("Firebase initialized successfully!");
