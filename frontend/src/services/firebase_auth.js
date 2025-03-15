import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyAWtn_E_I3-XRYwnfBn6KCWca00b9VsEx8",
  authDomain: "softarch-f3dd7.firebaseapp.com",
  projectId: "softarch-f3dd7",
  storageBucket: "softarch-f3dd7.firebasestorage.app",
  messagingSenderId: "768335134575",
  appId: "1:768335134575:web:e2ed58bca4b95e04a9f29a",
  measurementId: "G-E038Y4ZF20"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

// Google ile Giriş Fonksiyonu
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Kullanıcı bilgilerini al
    console.log("Giriş yapan kullanıcı:", user);

    // Google ID token'ı al
    const token = await user.getIdToken();
    console.log("Token:", token);

    // Token'ı backend'e gönder
    sendTokenToBackend(token);
  } catch (error) {
    console.error("Google ile giriş hatası: ", error.message);
  }
};

// Backend'e token gönderme
const sendTokenToBackend = async (token) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/verify_token/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })  // Token'ı JSON olarak gönderiyoruz
    });

    const data = await response.json();
    console.log("Backend'den gelen yanıt:", data);
  } catch (error) {
    console.error("Backend'e istek gönderilirken hata oluştu:", error);
  }
};

// Google giriş fonksiyonunu dışa aktar
export { signInWithGoogle };
