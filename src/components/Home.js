import './home.css'
import watch_logo from '../images/watch_logo.png'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import LoadingScreen from './LoadingScreen'
import 'firebase/compat/storage'
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from 'firebase/storage';
import Header from './Header';

function Home() { //dynamic homepage that renders page based off of values in the database

    const dbRef = ref(getDatabase());
    const [data,setData]=useState(null)

    const storage=getStorage()

    useEffect(()=>{ //fetches data on first render
        get(child(dbRef, 'home/')).then((snapshot) => { 
            if (snapshot.exists()) {
                setData(snapshot.val())
                console.log(snapshot.val().heroTitle)
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    }, [])

    function getUrl(id,loc){
        getDownloadURL(sRef(storage, loc)).then((url)=>{document.getElementById(id).src=url})
    }

    return ( //renders home page when data is recieved
       data ? <div className='main-container flex column'>
            <Header position={'sticky'}/>
            <div className='hero-card flex column center'>
                <div className='text-container flex column center'>
                    <div className='title'>{data.heroTitle}</div>
                    <div className='tag'>{data.heroTag}</div>
                    <div className='links-container flex'>
                        <a className='product-link pointer flex center'>Learn More <i className='material-icons'>chevron_right</i></a>
                        <a className='product-link pointer flex center'>Buy <i className='material-icons'>chevron_right</i></a>
                    </div>
                </div>
                <img className='hero-image' id='hero' src={getUrl('hero','home/hero')} alt='' />
            </div>
            <div className='hero-card flex column center'>
            <div className='text-container flex column center'>
                <div className='title'>{data.subheroTitle}</div>
                <div className='tag'>{data.subheroTag}</div>
                <div className='links-container flex'>
                    <a className='product-link pointer flex center'>Learn More <i className='material-icons'>chevron_right</i></a>
                    <a className='product-link pointer flex center'>Buy <i className='material-icons'>chevron_right</i></a>
                </div>
            </div>
                <img className='hero-image' id='subhero' src={getUrl('subhero','home/subhero')} alt='' />
            </div>
            <div className='cards-container'>
                <div className='card-container flex column center'>
                    <img className='card-image' id='card1' src={getUrl('card1','home/card1')} alt=''  />
                    <div className='card-title' style={{fontWeight: '500',fontSize: '40px',top: '34%',color: 'white'}} >{data.card1Title}</div>
                    <div className='card-tag' style={{color: 'white', fontSize: '1.3em', top: '39%'}}>{data.card1Tag}</div>
                    <a className='product-link pointer flex center' style={{position: 'absolute',top: '42%',fontSize: '1em'}}>Learn More <i className='material-icons'>chevron_right</i></a>
                </div>
                <div className='card-container flex column center'>
                    <img className='card-image' id='card2' src={getUrl('card2','home/card2')} alt=''  />
                    <img src={watch_logo} width='180px' height='120px' style={{position: 'absolute', top: '2%'}} />
                    <div className='card-title' style={{top: '8.5%',color: '#cd0303', fontWeight: '500',letterSpacing:'0.2em',fontSize: '0.9em'}}>{data.card2Title}</div>
                    <div className='card-tag' style={{top: '10.5%',fontSize: '1.3em'}}>{data.card2Tag}</div>
                    <div className='links-container flex' style={{top: '12.5%', position: 'absolute'}}>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Learn More <i className='material-icons'>chevron_right</i></a>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Buy <i className='material-icons'>chevron_right</i></a>
                    </div>
                </div>
                <div className='card-container flex column center'>
                    <img className='card-image' id='card3' src={getUrl('card3','home/card3')} alt=''  />
                    <div className='card-title' style={{top: '55.5%', fontWeight: '500',fontSize: '2.3em'}}>{data.card3Title}</div>
                    <div className='card-tag' style={{top: '59.5%',fontSize: '1.3em'}}>{data.card3Tag}</div>
                    <div className='links-container flex' style={{top: '61.5%', position: 'absolute'}}>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Learn More <i className='material-icons'>chevron_right</i></a>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Buy <i className='material-icons'>chevron_right</i></a>
                    </div>
                </div>
                <div className='card-container flex column center'>
                    <img className='card-image' id='card4' src={getUrl('card4','home/card4')} alt=''  />
                    <div className='card-title' style={{fontWeight: '500',fontSize: '40px',top: '55.5%',color: 'white'}} >{data.card4Title}</div>
                    <div className='card-tag' style={{color: 'white', fontSize: '1.3em', top:'59.5%'}}>{data.card4Tag}</div>
                    <div className='links-container flex' style={{top: '61.5%', position: 'absolute'}}>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Learn More <i className='material-icons'>chevron_right</i></a>
                        <a className='product-link pointer flex center' style={{fontSize:'1em'}}>Buy <i className='material-icons'>chevron_right</i></a>
                    </div>
                </div>
            </div>

        </div> : <LoadingScreen />
    )
}

export default Home