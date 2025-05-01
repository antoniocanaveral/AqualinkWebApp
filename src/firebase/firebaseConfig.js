/*import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

// Configuración Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inicializa Firebase y Messaging
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


// Función para generar el token
export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('🔒 Permiso de notificaciones no concedido');
      return null;
    }

    // Registra manualmente el Service Worker en la ruta correcta
    const swRegistration = await navigator.serviceWorker.register('/aqualinkdemo/firebase-messaging-sw.js');
    console.log('✅ Service Worker registrado en /aqualinkdemo/firebase-messaging-sw.js');

    // Usa el SW registrado para obtener el token
    const vapidKey = process.env.REACT_APP_FIREBASE_VAPID_KEY;
    console.log('🔑 VAPID key:', vapidKey);

    const token = await getToken(messaging, {
      vapidKey: "BBjH4m7mgGnJEN0H3qVULjnEnKhJEQ3pL3nryk0u0POJ7EgFzUgc--tbaeZjTsH-0WXf9IF0A4kYP5a_OIG-SF8",
      serviceWorkerRegistration: swRegistration,
    });

    if (token) {
      console.log('✅ FCM token generado:', token);
      return token;
    } else {
      console.warn('⚠️ No se obtuvo token FCM');
      return null;
    }
  } catch (error) {
    console.error('❌ Error obteniendo FCM token:', error);
    return null;
  }
};
*/