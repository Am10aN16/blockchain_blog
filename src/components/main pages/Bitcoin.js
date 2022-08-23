import React from 'react'
import Bit1 from "../../assets/bit4.avif"
import Bit2 from "../../assets/bit5.avif"
import Bit3 from "../../assets/bit6.avif"
import Footer from './Footer'

const Bitcoin = () => {
  return (
    <>
         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Bit1} className="d-block w-100" alt="..." style={{height:"500px", objectFit:"cover"}}/>
    </div>
    <div className="carousel-item">
      <img src={Bit2} className="d-block w-100 " alt="..." style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src={Bit3} className="d-block w-100 " alt="..." style={{height:"500px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h1 className='d-flex align-items-center justify-content-center  animate'>What is BitCoin?</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
Bitcoin is a cryptocurrency, a virtual currency designed to act as money and a form of 
payment outside the control of any one person, group, or entity, and thus removing the 
need for third-party involvement in financial transactions. It is rewarded to blockchain
miners for the work done to verify transactions and can be purchased on several exchanges.
</p>

<p>
Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers
 using the name Satoshi Nakamoto.
It has since become the most well-known cryptocurrency in the world. Its popularity has 
inspired the development of many other cryptocurrencies. These competitors either attempt
to replace it as a payment system or are used as utility or security tokens in other 
blockchains and emerging financial technologies.
</p>
</div>
<div className="keyword p-5">
<h3>KEY TAKEAWAYS</h3>
  <ul >
  
    <li className='lh-lg'>Launched in 2009, Bitcoin is the world's largest cryptocurrency by market capitalization.</li>
    <li className='lh-lg'>Unlike fiat currency, Bitcoin is created, distributed, traded, and stored using a decentralized ledger system known as a blockchain.</li>
     <li className='lh-lg'>Bitcoin's history as a store of value has been turbulent; it has gone through several boom and bust cycles over its relatively short lifespan.</li>
     <li className='lh-lg'>In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group
      has control—rather, all users collectively retain control.</li>
     <li className='lh-lg'>
     As the earliest virtual currency to meet widespread popularity and success, Bitcoin has inspired a host of other cryptocurrencies in its wake.
     </li>
  </ul>
</div>
<Footer/>
    </>
  )
}

export default Bitcoin