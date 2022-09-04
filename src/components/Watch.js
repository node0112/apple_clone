import React, { useEffect, useState } from 'react'
import Header from './Header'
import './products.css'
import { getDatabase, ref, child, get } from "firebase/database";
import LoadingScreen from './LoadingScreen'
import 'firebase/compat/storage'
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from 'firebase/storage';

function Watch() {

  const dbRef = ref(getDatabase());
    const [data,setData]=useState(null)

    const storage=getStorage()

  useEffect(()=>{ //fetches data on first render
    get(child(dbRef, 'products/watch')).then((snapshot) => { 
        if (snapshot.exists()) {
            setData(snapshot.val())
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

var imageCount=1
const [imageState,setImageState]=useState(1)
function slideImage(direction){
  console.log(imageCount)
  let container=document.querySelector('.product-images')
  if(direction === 'ahead'){
      let image=document.getElementById(imageCount+1)
      image.style.opacity='1'
      if(imageCount === 1){
        container.style.transform='translateX(0px)'
        document.getElementById(1).style.opacity='0'
      }
      if(imageCount === 2){
        container.style.transform='translateX(-450px)'
        document.getElementById(2).style.opacity='0'
      }
      imageCount=imageCount+1
      console.log(imageCount)
      setImageState(imageCount) //used to render chevrons
  }
  else if(direction === 'back'){
    console.log(imageCount)
    let image=document.getElementById(imageCount-1)
    image.style.opacity='1'
    if(imageCount === 3){
      container.style.transform='translateX(0px)'
      document.getElementById(3).style.opacity='0'
    }
    if(imageCount === 2){
      container.style.transform='translateX(-450px)'
      document.getElementById(2).style.opacity='0'
    }
    imageCount=imageCount-1
    setImageState(imageCount) //used to render chevrons
  }
}

  return (
    <div>
      <Header position='static' />
      {data ? <div className='product-page'>
          <div className='product-header def-font'>
            <div className='product-header-text'>{data.headerTitle}</div>
          </div>
          <div className='installment-header flex def-font flex'>
            Pay for your Apple Watch over time, interest-free when you choose to check out with Apple Card Monthly Installments.<sup>◊ </sup><div className='link'>Learn more</div> 
          </div> 
          <div className='product-container' style={{width: '80vw'}}>
          <div className='left-container' style={{width: '58%'}}>
            <div className='product-images-container'>
                <div className='content-wrapper'>
                  <div className='product-images'>
                    <img className='product-image'  id='1' src={getUrl('1','products/watch/pride_edition_band.jpeg')} />
                    <img className='product-image' style={{opacity: '0'}} id='2' src={getUrl('2','products/watch/watch_def_2.png')} />
                    <img className='product-image' style={{opacity: '0'}} id='3' src={getUrl('3','products/watch/watch_def_3.png')} />
                  </div>
                  { imageState ===1  ? null : <div className='left-scroll scroll-button flex center'  onClick={()=>{slideImage('back')}}><i className='material-icons' style={{fontSize:'50px'}}>chevron_left</i></div> }
                  { imageState ===3 ? null : <div className='right-scroll scroll-button flex center'  onClick={()=>{slideImage('ahead')}}><i className='material-icons' style={{fontSize:'50px'}}>chevron_right</i></div> }
                </div>
            </div>
            </div>
          </div>
        </div>
          : <LoadingScreen />}
      </div>
  )
}

export default Watch