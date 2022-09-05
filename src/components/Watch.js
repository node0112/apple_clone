import React, { useEffect, useState } from 'react'
import Header from './Header'
import './products.css'
import { getDatabase, ref, child, get } from "firebase/database";
import LoadingScreen from './LoadingScreen'
import 'firebase/compat/storage'
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from 'firebase/storage';

import black from '../images/watch/black_color.jpeg'
import pride from '../images/watch/pride_color.jpeg'
import white from '../images/watch/white_color.jpeg'
import cargoKhaki from '../images/watch/cargo_khaki_color.jpeg'

function Watch({slideFront,slideBack,imageState}) {
  const dbRef = ref(getDatabase());
  const [data,setData]=useState(null)
  const storage=getStorage()

  const [colorSelected,setColorSelected]=useState('Pride Edition')
  const [watchImage,setWatchImage]=useState('products/watch/pride_edition_band.jpeg')
  const [prevselected,setPrevselected]=useState('pride')

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

  function changeColor(colorName,imgName,id){
    document.getElementById(prevselected).classList.remove('selected')
    document.getElementById(id).classList.add('selected')
    setPrevselected(id)
    setWatchImage(imgName)
    setColorSelected(colorName)
  }

 //redner on data?
  return (
    <div>
      <Header position='static' />
      {data ?
       <div className='product-page'>
          <div className='product-header def-font'>
            <div className='product-header-text'>{data.headerTitle}</div>
          </div>
          <div className='installment-header flex def-font flex'>
            Pay for your Apple Watch over time, interest-free when you choose to check out with Apple Card Monthly Installments.<sup>◊ </sup><div className='link'>Learn more</div> 
          </div> 
          <div className='product-container flex' style={{width: '80vw'}}>
            <div className='left-container' style={{width: '58%'}}>
              <div className='product-images-container'>
                  <div className='content-wrapper'>
                    <div className='product-images'>
                      <img className='product-image'  id='1' src={getUrl('1',watchImage)} />
                      <img className='product-image' style={{opacity: '0'}} id='2' src={getUrl('2','products/watch/watch_def_2.png')} />
                      <img className='product-image' style={{opacity: '0'}} id='3' src={getUrl('3','products/watch/watch_def_3.png')} />
                    </div>
                    { imageState ===1  ? null : <div className='left-scroll scroll-button flex center'  onClick={()=>slideBack()}><i className='material-icons' style={{fontSize:'50px'}}>chevron_left</i></div> }
                    { imageState ===3 ? null : <div className='right-scroll scroll-button flex center'  onClick={()=>slideFront()}><i className='material-icons' style={{fontSize:'50px'}}>chevron_right</i></div> }
                  </div>
              </div>
            </div>
            <div className='right-container'> 
              <div className='product-title def-font'>{data.productTitle}</div>
              <div className='product-brief def-font'>{data.productBrief}</div>
              <div className='base-price def-font'>{data.productBasePrice}</div>
              <div className='product-description def-font'>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. <div style={{height: '14px'}}/>The Nike Sport Loop is made from a breathable nylon weave featuring the iconic Nike swoosh logo, in colors exclusive to Nike.</div>
              <div className='style-selection-menu flex'>
                <div className='selection-item def-font' style={{borderBottom:'1px solid black'}}>Band Colors</div>
                <div className='selection-item def-font' style={{color:'#6e6e73'}}>Your Style</div>
              </div>
              <div className='color-selected def-font'>Color - {colorSelected}</div>
              <div className='color-selectors-container flex'>
                <img className='color-selector selected' id='pride' src={pride} onClick={()=>changeColor('Pride Edition','products/watch/pride_edition_band.jpeg','pride')}/>
                <img className='color-selector ' id='cargo' src={cargoKhaki} onClick={()=>changeColor('Cargo Khaki','products/watch/cargo_khaki_band.jpeg','cargo')}/>
                <img className='color-selector ' id='black' src={black} onClick={()=>changeColor('Black','products/watch/black_band.jpeg','black')}/>
                <img className='color-selector ' id='white' src={white} onClick={()=>changeColor('Summit White','products/watch/summit_white_band.jpeg','white')}/>
              </div>
              <div className='style-text def-font'>See even more band types. Try different case materials. Express your personal style in the Apple Watch Studio. Only at Apple. </div>
              <div className='types-container def-font'>
                <div className='choice-header'>Case Size </div>
                <div className='type-container flex'>
                  <div className='flex column'>
                    <div className='type-header'>41mm</div>
                    <div className='type-description'>Fits 130-200mm wrists</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>From $399</div>
                    <div className='type-price'>or $16.62/mo.</div>
                    <div className='type-price'>for 24 mo.*</div>
                  </div>
                </div>
                <div className='type-container flex'>
                  <div className='flex column'>
                    <div className='type-header'>45mm</div>
                    <div className='type-description'>Fits 140-220mm wrists</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>From $429</div>
                    <div className='type-price'>or $17.87/mo.</div>
                    <div className='type-price'>for 24 mo.*</div>
                  </div>
                </div>
              </div>
              <div className='types-container def-font'>
                <div className='choice-header'>Connectivity</div>
                <div className='type-container flex'>
                  <div className='flex column'>
                    <div className='type-header'>GPS</div>
                    <div className='type-description'>Make calls and send messages with your iPhone nearby.</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>From $399</div>
                    <div className='type-price'>or $16.62/mo.</div>
                    <div className='type-price'>for 24 mo.*</div>
                  </div>
                </div>
                <div className='type-container flex'>
                  <div className='flex column'>
                    <div className='type-header'>GPS + Cellular</div>
                    <div className='type-description'>Make calls and send messages with just your Apple Watch. Works with Family Setup.</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>From $429</div>
                    <div className='type-price'>or $17.87/mo.</div>
                    <div className='type-price'>for 24 mo.*</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
        :<LoadingScreen />}
    </div>
  )
}

export default Watch