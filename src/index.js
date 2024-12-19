import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7c5v1eNBzHsfthFyeWWIA06qSGIH8Jzc",
  authDomain: "bon-voyage-917cd.firebaseapp.com",
  projectId: "bon-voyage-917cd",
  storageBucket: "bon-voyage-917cd.firebasestorage.app",
  messagingSenderId: "930479362945",
  appId: "1:930479362945:web:576b7b11afb8c4ae0d4e80",
};

initializeApp(firebaseConfig);
const auth = getAuth();

function showError(element, message) {
  const errorElement = document.querySelector(element);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function redirectToHome() {
    window.location.href = '../dist/home.html';
}

const signupForm = document.querySelector('.signup');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user created:', cred.user);
        signupForm.reset();
        showError('.signup-error', ''); 
        redirectToHome();
      })
      .catch((err) => {
        console.error(err.code, err.message);

        let message = 'An error occurred';
        switch (err.code) {
          case 'auth/email-already-in-use':
            message = 'This email is already in use. Try logging in.';
            break;
          case 'auth/invalid-email':
            message = 'Please enter a valid email address.';
            break;
          case 'auth/weak-password':
            message = 'Password must be at least 6 characters.';
            break;
          default:
            message = 'Failed to sign up. Please try again.';
        }
        showError('.signup-error', message);
      });
  });
}

const loginForm = document.querySelector('.login');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user logged in:', cred.user);
        loginForm.reset();
        showError('.login-error', ''); 
        redirectToHome();
      })
      .catch((err) => {
        console.error(err.code, err.message);

        let message = 'An error occurred';
        switch (err.code) {
          case 'auth/user-not-found':
            message = 'No account found with this email.';
            break;
          case 'auth/wrong-password':
            message = 'Incorrect password. Please try again.';
            break;
          case 'auth/invalid-email':
            message = 'Please enter a valid email address.';
            break;
          default:
            message = 'Failed to log in. Please try again.';
        }
        showError('.login-error', message);
      });
  });
}



