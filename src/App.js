
import './App.css';
import './reset.css'
import './site.css'
import './components/header.css'
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import { getDownloadURL, getStorage,ref } from "firebase/storage";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  //firebase functionality here------>
  const firebaseConfig = {
    apiKey: "AIzaSyDk5DbbIbpXTx7-U2J9TlMKR3kOcd3w_mw",
    authDomain: "apple-store-97936.firebaseapp.com",
    projectId: "apple-store-97936",
    storageBucket: "apple-store-97936.appspot.com",
    messagingSenderId: "990699559013",
    appId: "1:990699559013:web:4c89bdc51d85f4c4524e8c"
  };
  
  firebase.initializeApp(firebaseConfig)

  const storage = getStorage();
  

  console.log(getDownloadURL(ref(storage, 'home/hero')))

  function fetchProductData(){//gets data from server about each product
    let imgLocation //set it to image urI given in product info
    let imageUrl
    imageUrl=getDownloadURL(ref(storage, imgLocation))
  }
  return (
   <div>
    <Header />
    <Home />
    <Footer />
   </div>
  );
}

export default App;
