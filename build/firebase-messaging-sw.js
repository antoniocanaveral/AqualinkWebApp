/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

// Inicializar Firebase en el Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyAabQmINeIefJJy51XFSfdLtkM_fbEp9LQ",
  authDomain: "aqualink-97d36.firebaseapp.com",
  projectId: "aqualink-97d36",
  storageBucket: "aqualink-97d36.firebasestorage.app",
  messagingSenderId: "760923336751",
  appId: "1:760923336751:web:7fb33a0cb35600493896da"
});

// Obtener instancia de Messaging
const messaging = firebase.messaging();

console.log('[SW] Service Worker inicializado y Firebase Messaging listo.');
console.log('[SW] Firebase Messaging:', messaging);

// Manejar notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification?.title || 'Título por defecto';
  const notificationOptions = {
    body: payload.notification?.body || 'Mensaje por defecto',
    icon: payload.notification?.image || '/firebase-logo.png',
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 🚀 Forzar activación inmediata del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando nuevo SW... ejecutando skipWaiting()');
  self.skipWaiting();
});

// 🧠 Tomar control de las pestañas inmediatamente
self.addEventListener('activate', (event) => {
  console.log('[SW] Activado. Ejecutando clients.claim()');
  event.waitUntil(self.clients.claim());
});
