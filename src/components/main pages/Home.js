import React from 'react'
import Block1 from "../../assets/block1.png"
import Block2 from "../../assets/block2.jpg"
import Block3 from "../../assets/block3.jpg"
import Footer from './Footer'


const Home = () => {
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
      <img src={Block1} className="d-block w-100" alt="..." style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src={Block2} className="d-block w-100 " alt="..." style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src={Block3} className="d-block w-100 " alt="..." style={{height:"500px"}}/>
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

<h1 className='d-flex align-items-center justify-content-center '>What is BlockChain?</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
A blockchain is a distributed database or ledger that is shared among the nodes of a computer network.
As a database, a blockchain stores information electronically in digital format. Blockchains are best 
known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and 
decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity
and security of a record of data and generates trust without the need for a trusted third party.
</p>

<p>
One key difference between a typical database and a blockchain is how the data is structured. A blockchain
 collects information together in groups, known as blocks, that hold sets of information. Blocks have certain 
 storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain
 of data known as the blockchain. All new information that follows that freshly added block is compiled into 
a newly formed block that will then also be added to the chain once filled.
</p>
</div>
<div className="keyword p-5">
<h3>KEY TAKEAWAYS</h3>
  <ul >
  
    <li className='lh-lg'>Blockchain is a type of shared database that differs from a typical database in the way that it 
    stores information; blockchains store data in blocks that are then linked together via cryptography.</li>
    <li className='lh-lg'>As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is
     chained onto the previous block, which makes the data chained together in chronological order.</li>
     <li className='lh-lg'>Different types of information can be stored on a blockchain, but the most common use so far 
     has been as a ledger for transactions. </li>
     <li className='lh-lg'>In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group
      has control—rather, all users collectively retain control.</li>
     <li className='lh-lg'>
     Decentralized blockchains are immutable, which means that the data entered is irreversible. For 
     Bitcoin, this means that transactions are permanently recorded and viewable to anyone.
     </li>
  </ul>
</div>

<h1 className='d-flex align-items-center justify-content-center'>How Are Blockchains Used?</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. 
Today, there are more than 10,000 other cryptocurrency systems running on blockchain. 
But it turns out that blockchain is actually a reliable way of storing data about other 
types of transactions as well.
</p>

<p>
Some companies that have already incorporated blockchain include Walmart, Pfizer, AIG, 
Siemens, Unilever, and a host of others. For example, IBM has created its Food Trust 
blockchain to trace the journey that food products take to get to their locations.
</p>

<p>
Why do this? The food industry has seen countless outbreaks of E. coli, salmonella, and listeria,
as well as hazardous materials being accidentally introduced to foods. In the past, it has taken 
weeks to find the source of these outbreaks or the cause of sickness from what people are eating. 
Using blockchain gives brands the ability to track a food product’s route from its origin, through 
each stop it makes, and finally, its delivery. If a food is found to be contaminated, then it can 
be traced all the way back through each stop to its origin. Not only that, but these companies can 
also now see everything else it may have come in contact with, allowing the identification of the 
problem to occur far sooner and potentially saving lives. This is one example of blockchain in practice, 
but there are many other forms of blockchain implementation.
</p>
</div>
<h1 className='d-flex align-items-center justify-content-center '>Currency</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
Blockchain forms the bedrock for cryptocurrencies like Bitcoin. The U.S. dollar is controlled by the
 Federal Reserve. Under this central authority system, a user’s data and currency are technically at the whim of their bank or government. If a user’s bank is hacked, the client’s private information is at risk. If the client’s bank collapses or the client lives in a country with an unstable government, the value of their currency may be at risk. In 2008, several failing banks were bailed out—partially using taxpayer money. These are the worries out of which Bitcoin was first conceived and developed.
</p>

<p>
By spreading its operations across a network of computers, blockchain allows Bitcoin and other cryptocurrencies to operate without the need for a central authority. This not only reduces risk but also eliminates many of the processing and transaction fees. It can also give those in countries with unstable currencies or financial infrastructures a more stable currency with more applications and a wider network of individuals and institutions with whom they can do business, both domestically and internationally.
</p>

<p>
Using cryptocurrency wallets for savings accounts or as a means of payment is especially profound for those who have no state identification. Some countries may be war-torn or have governments that lack any real infrastructure to provide identification. Citizens of such countries may not have access to savings or brokerage accounts—and, therefore, no way to safely store wealth.
</p>
</div>
  
<Footer/>
    </>
  )
}

export default Home