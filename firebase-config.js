// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDglDGMO-cknnl7JR7cD89_4yWdLRkvLBY",
    authDomain: "ssdfashion-af744.firebaseapp.com",
    projectId: "ssdfashion-af744",
    storageBucket: "ssdfashion-af744.appspot.com",
    messagingSenderId: "233163735482",
    appId: "1:233163735482:web:14ecbc0b46a28fb02e9d83",
    measurementId: "G-VJ0L1WHX3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);


// --- ImgBB UPLOAD HELPER FUNCTION ---
const IMGBB_API_KEY = "fd49c76998051779cbe0f58f9e048ccc"; // <-- මේ වගේ ඔයාගේ key එක දාන්න// !! IMPORTANT: මෙතනට ඔයාගේ ImgBB API Key එක දාන්න

export async function uploadImageToImgBB(file, statusCallback) {
    const formData = new FormData();
    formData.append('key', IMGBB_API_KEY);
    formData.append('image', file);

    if (statusCallback) {
        statusCallback(`Uploading ${file.name}...`);
    }

    const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
    });
    
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(`ImgBB upload failed: ${jsonResponse.error.message}`);
    }
    
    return jsonResponse.data.url;
}
