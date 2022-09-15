import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'
import './products.css'
import { getDatabase, ref, child, get } from "firebase/database";
import LoadingScreen from './LoadingScreen'
import 'firebase/compat/storage'
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from 'firebase/storage';

function Mac({slideFront,slideBack,imageState}) {
    const dbRef = ref(getDatabase());
  const [data,setData]=useState(null)
  const storage=getStorage()

  const [colorSelected,setColorSelected]=useState('Pride Edition') //don't use
  const [watchImage,setWatchImage]=useState('products/mac/mac_def1.jpeg')
  const [prevselected,setPrevselected]=useState('pride')
  const [type1Selected,setType1Selected] = useState(false)

  useEffect(()=>{ //fetches data on first render
    get(child(dbRef, 'products/mac')).then((snapshot) => { 
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
  return (
    <div>
      <Header position='static' />
      {data ?
       <div className='product-page'>
          <div className='product-header def-font'>
            <div className='product-header-text'>{data.headerTitle}</div>
          </div>
          <div className='installment-header flex def-font flex'>
          Last chance to get a gift card up to $150 for college.° And save on Mac or iPad with an education discount.<sup>◊ </sup><div className='link'>Shop now</div> 
          </div> 
          <div className='product-container flex' style={{width: '80vw'}}>
            <div className='left-container' style={{width: '58%'}}>
              <div className='product-images-container flex column center'>
                  <div className='content-wrapper'>
                    <div className='product-images flex center'>
                      <img className='product-image'  id='1' src={getUrl('1',watchImage)} />
                      <img className='product-image' style={{opacity: '0'}} id='2' src={getUrl('2','products/mac/mac_def2.jpeg')} />
                      <img className='product-image' style={{opacity: '0'}} id='3' src={getUrl('3','products/mac/mac_def3.jpeg')} />
                    </div>
                    { imageState ===1  ? null : <div className='left-scroll scroll-button flex center'  onClick={()=>slideBack()}><i className='material-icons' style={{fontSize:'50px'}}>chevron_left</i></div> }
                    { imageState ===3 ? null : <div className='right-scroll scroll-button flex center'  onClick={()=>slideFront()}><i className='material-icons' style={{fontSize:'50px'}}>chevron_right</i></div> }
                  </div>
                  <div className='offers-container'>
                    <div className='offer-container'>
                      <i className='material-icons'>local_shipping</i>
                      <div className='offer-text'>Get free delivery, or pick up available items at an Apple Store</div>
                    </div>
                    <div className='offer-container'>
                      <i className='material-icons'>assignment_return</i>
                      <div className='offer-text'>Free and easy returns</div>
                    </div>
                  </div>
              </div>
            </div>
            <div className='right-container'> 
              <div className='product-title def-font'>{data.productTitle}</div>
              <div className='product-brief def-font'>{data.productBrief}</div>
              <div className='base-price def-font'>{data.productBasePrice}</div>
              <div className='product-description def-font flex column' style={{gap: '10px',borderBottom: '1px solid #d2d2d7',paddingBottom:'40px'}}>
                <div>Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine </div>
                <div>16GB unified memory </div> 
                <div>67W USB-C Power Adapter </div>
                <div> 14-inch Liquid Retina XDR display </div>
                <div>Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port</div>
                <div> Backlit Magic Keyboard with Touch ID - US English</div>
              </div>
              <div className='types-container def-font'>
                <div className='choice-header'>System on a Chip (Processor) </div>
                <div className='def-font link sub-link'>Which chip size is right for you?</div>
                <div className='type-container flex pointer' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column'>
                    <div className='type-header' style={{width: '50%'}}>Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >Apple M1 Pro with 10-core CPU, 14-core GPU, 16-core Neural Engine</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>+$200</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>+$300</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >Apple M1 Max with 10-core CPU, 24-core GPU, 16-core Neural Engine</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>+$500</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >Apple M1 Max with 10-core CPU, 32-core GPU, 16-core Neural Engine</div>
                  </div>
                  <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                    <div className='type-price'>+$700</div>
                  </div>
                </div>
                <div className='def-font link sub-link'>Which case size is right for you?</div>
              </div>
              <div className='types-container def-font'>
                <div >Memory</div>
                <div className='def-font link sub-link'>How much memory is right for you?</div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >16GB unified memory</div>
                    </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >32GB unified memory</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$400</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >64GB unified memory</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$800</div>
                  </div>
                </div>
                <div className='def-font link sub-link'>Learn more about Family Setup</div>
              </div>
              <div className='types-container def-font'>
                <div >Storage</div>
                <div className='def-font link sub-link'>How much storage is right for you?</div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >512GB SSD storage</div>
                    </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >1TB SSD storage</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$200</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >2TB SSD storage</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$600</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >4TB SSD storage</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$1,200</div>
                  </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >8TB SSD storage</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$2,400</div>
                  </div>
                </div>
              </div>
              <div className='types-container def-font'>
                <div >Power Adapter</div>
                <div className='def-font link sub-link'>Which Power Adapter is right for you?</div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >67W USB-C Power Adapter</div>
                    </div>
                </div>
                <div className='type-container flex' onClick={()=>{setType1Selected(true)}}>
                  <div className='flex column' style={{width: '50%'}}>
                    <div className='type-header' >96W USB-C Power Adapter</div>
                    </div>
                    <div className='flex column'style={{width: '65%', textAlign:'right'}}> 
                      <div className='type-price'>+$20</div>
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

export default Mac