<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDEgiGuOIM9I5YiMpvmCYui9ZhQ2PI9ddg",
    authDomain: "kisanvalley-7eb44.firebaseapp.com",
    projectId: "kisanvalley-7eb44",
    storageBucket: "kisanvalley-7eb44.firebasestorage.app",
    messagingSenderId: "218678917117",
    appId: "1:218678917117:web:b967bba8b1d028055f0b94",
    measurementId: "G-QREJESP6MX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>