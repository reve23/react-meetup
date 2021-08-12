import firebase from 'firebase'
import "firebase/storage"

const config= {
	apiKey: "AIzaSyDPMWGFBZj_MP7sYqv7c4Ff4KI7qthKblI",
    authDomain: "react-meetup-15ccd.firebaseapp.com",
    databaseURL: "https://react-meetup-15ccd-default-rtdb.firebaseio.com",
    projectId: "react-meetup-15ccd",
    storageBucket: "react-meetup-15ccd.appspot.com",
    messagingSenderId: "990682267598",
    appId: "1:990682267598:web:9f64e70cc7476646eff59f"
}

firebase.initializeApp(config);

const storage = firebase.storage();
export { storage, firebase as default };