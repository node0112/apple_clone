
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
import Watch from './components/Watch';
import { useState,useEffect } from 'react';
import Iphone from './components/Iphone';
import Mac from './components/Mac';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  let imageCount=0

  useEffect(() => {
    imageCount=1
  }, [])
  

  const [imageState,setImageState]=useState(1)

  function slideFront(){ //slides image forward
    const container=document.querySelector('.product-images')
    let image=document.getElementById(imageState+1)
    image.style.opacity='1'
    if(imageState === 1){
      container.style.transform='translateX(0px)'
      document.getElementById(1).style.opacity='0'
      setImageState(2)
    }
    else if(imageState === 2){
      container.style.transform='translateX(-450px)'
      document.getElementById(2).style.opacity='0'
      setImageState(3)
    }
  }

  function slideBack(){ //slides image backward
    const container=document.querySelector('.product-images')
    let image=document.getElementById(imageState-1)
    image.style.opacity='1'
    if(imageState === 3){
      container.style.transform='translateX(0px)'
      document.getElementById(3).style.opacity='0'
      setImageState(2)
    }
    else if(imageState === 2){
      container.style.transform='translateX(450px)'
      document.getElementById(2).style.opacity='0'
      setImageState(1)
    }
  }

  
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

  
  function fetchProductData(){//gets data from server about each product
    let imgLocation //set it to image urI given in product info
    let imageUrl
    imageUrl=getDownloadURL(ref(storage, imgLocation))
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mac" element={<Mac slideFront={slideFront} slideBack={slideBack} imageState={imageState}/>}/>
          <Route path="/watch" element={<Watch slideFront={slideFront} slideBack={slideBack} imageState={imageState}/>}/>
      </Routes>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
