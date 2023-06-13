import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleSignIn = ({ SignIn }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyAXAanSerFxps6fjkx5Q_9TyplVXU6UOWU",
        authDomain: "webjudi-b9f85.firebaseapp.com",
        projectId: "webjudi-b9f85",
        storageBucket: "webjudi-b9f85.appspot.com",
        messagingSenderId: "35615155119",
        appId: "1:35615155119:web:16e81c50e98c4655ae455a",
        measurementId: "G-PST9E4HNY7"
    };

    // Initialize Firebase

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const userName = result.user.displayName;
                const userPhoto = result.user.photoURL;
                setDisplayName(userName);
                setPhotoURL(userPhoto);
                // console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            {displayName && (
                <div className="flex items-center">
                    <p className="mr-2">{displayName}</p>
                    <img
                        src={photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            )}
            {!displayName && (
                <button
                    onClick={signInWithGoogle}
                    className='inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
                >
                    Sign In
                </button>
            )}
        </div>
    );
}

export default GoogleSignIn;