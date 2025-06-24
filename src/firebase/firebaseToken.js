// src/firebase/firebaseToken.ts
import { messaging } from './firebaseClient';
import { getToken } from 'firebase/messaging';

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('🔒 Permiso de notificaciones no concedido');
      return null;
    }

    const swRegistration = await navigator.serviceWorker.register('/aqualinkdemo/firebase-messaging-sw.js');
    console.log('✅ Service Worker registrado en /aqualinkdemo/firebase-messaging-sw.js');

    const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;

    const token = await getToken(messaging, {
      vapidKey,
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
