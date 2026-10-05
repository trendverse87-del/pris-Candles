/**
 * PRIS Candles - Firebase Cloud Architecture
 * Connected Project: my-shop-lk-pk
 */

const firebaseConfig = {
  apiKey: "AIzaSyASLJRZVXhnMFaqyjLsVz9dN-1lx5Psf6M",
  authDomain: "my-shop-lk-pk.firebaseapp.com",
  databaseURL: "https://my-shop-lk-pk-default-rtdb.firebaseio.com",
  projectId: "my-shop-lk-pk",
  storageBucket: "my-shop-lk-pk.firebasestorage.app",
  messagingSenderId: "963146613545",
  appId: "1:963146613545:web:1fe259255e0daed5c06d38",
  measurementId: "G-1KP1TGCEW2"
};

window.APP_CONFIG = {
  brandName: "PRIS Candles",
  tagline: "Artisanal Ceylon Cinnamon & Botanical Candles",
  address: "Kosgoda, Sri Lanka",
  whatsappNumber: "94760753587",
  displayPhone: "076 075 3587",
  currency: "Rs.",
  adminEmail: "trendverse87@gmail.com",
  adminPin: "8386",
  developerName: "Studio Axis",
  developerUrl: "https://studioaxis.online",
  logoUrl: "https://i.ibb.co/tPXMYjJK/ammi-1.png",
  firebaseEnabled: false
};

let fbApp = null, fbAuth = null, fbDb = null, fbRtdb = null;
try {
  if (typeof firebase !== 'undefined') {
    fbApp = firebase.initializeApp(firebaseConfig);
    fbAuth = firebase.auth();
    
    // Firestore DB
    if (typeof firebase.firestore === 'function') {
      try { fbDb = firebase.firestore(); } catch(e) {}
    }
    // Realtime DB
    if (typeof firebase.database === 'function') {
      try { fbRtdb = firebase.database(); } catch(e) {}
    }
    
    window.APP_CONFIG.firebaseEnabled = true;
    console.log("🔥 Firebase Cloud Initialized (Auth, Firestore, RTDB)!");
  }
} catch (e) {
  console.warn("Firebase Init status:", e);
}

window.fbAuth = fbAuth;
window.fbDb = fbDb;
window.fbRtdb = fbRtdb;

// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('pris_theme') || 'dark';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
    icon.className = isDark ? 'fa-solid fa-sun text-amber-400 theme-toggle-icon' : 'fa-solid fa-moon text-zinc-700 theme-toggle-icon';
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('pris_theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

document.addEventListener('DOMContentLoaded', initTheme);
