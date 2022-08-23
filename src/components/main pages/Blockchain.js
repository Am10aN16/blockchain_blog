import React from 'react'
import Trans from "../../assets/transactions.webp"
import Footer from './Footer'

const Blockchain = () => {
  return (
    <div>
      <h1 className='d-flex align-items-center justify-content-center  animate'>How Does a Blockchain Work?</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
The goal of blockchain is to allow digital information to be recorded and distributed, but not edited.
 In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that 
 cannot be altered, deleted, or destroyed. This is why blockchains are also known as a Distributed 
 Ledger Technology (DLT).
</p>

<p>
First proposed as a research project in 1991, the blockchain concept predated its first widespread 
application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via
the creation of various cryptocurrencies, Decentralized Finance (DeFi) applications, Non-fungible Tokens (NFTs),
and smart contracts.
</p>
</div>
<img src={Trans} alt="" style={{
  display:" block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  marginBottom:"15px"
}} />
<h1 className='d-flex align-items-center justify-content-center  animate'>Blockchain Decentralization</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
 Imagine that a company owns a server farm with 10,000 computers used to maintain a database holding
 all of its client’s account information. This company owns a warehouse building that contains all 
 of these computers under one roof and has full control of each of these computers and all of the 
 information contained within them. This, however, provides a single point of failure. What happens
 if the electricity at that location goes out? What if its Internet connection is severed? What if 
 it burns to the ground? What if a bad actor erases everything with a single keystroke? In any case,
 the data is lost or corrupted.
</p>

<p>
 What a blockchain does is to allow the data held in that database to be spread out among several network
 nodes at various locations. This not only creates redundancy but also maintains the fidelity of the data
 stored therein—if somebody tries to alter a record at one instance of the database, the other nodes would
 not be altered and thus would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record
 of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the 
 incorrect information. This system helps to establish an exact and transparent order of events. This way,
 no single node within the network can alter information held within it.
</p>

<p>
 Because of this, the information and history (such as of transactions of a cryptocurrency) are irreversible.
 Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for 
 a blockchain to hold a variety of other information like legal contracts, state identifications, or a 
 company’s product inventory.
</p>
</div>
<h1 className='d-flex align-items-center justify-content-center  animate'>Bitcoin vs. Blockchain</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' > 
<p>
Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta,
two researchers who wanted to implement a system where document timestamps could not be 
tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin
in January 2009, that blockchain had its first real-world application.
</p>

<p>
The Bitcoin protocol is built on a blockchain. In a research paper introducing the
 digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it
 as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.”
</p>

<p>
The key thing to understand here is that Bitcoin merely uses blockchain as a means 
to transparently record a ledger of payments, but blockchain can, in theory, be used
 to immutably record any number of data points. As discussed above, this could be in
  the form of transactions, votes in an election, product inventories, state identifications,
   deeds to homes, and much more. 
</p>

<p>
Currently, tens of thousands of projects are looking to implement blockchains
 in a variety of ways to help society other than just recording transactions—for
 example, as a way to vote securely in democratic elections. The nature of blockchain’s
 immutability means that fraudulent voting would become far more difficult to occur.
 For example, a voting system could work such that each citizen of a country would be issued
 a single cryptocurrency or token. Each candidate would then be given a specific wallet address,
 and the voters would send their token or crypto to the address of whichever candidate for whom
 they wish to vote. The transparent and traceable nature of blockchain would eliminate both the
 need for human vote counting and the ability of bad actors to tamper with physical ballots.
</p>
</div>

<h1 className='d-flex align-items-center justify-content-center  animate'>Pros and Cons of Blockchain</h1>
<div className='d-flex flex-column align-items-center justify-content-center p-5 lh-lg' >
<p>For all of its complexity, blockchain’s potential as a decentralized form of record-keeping is almost
 without limit. From greater user privacy and heightened security to lower processing fees and fewer errors, 
 blockchain technology may very well see applications beyond those outlined above. But there are also some
  disadvantages.</p>

  <div className='d-flex align-items-center justify-content-between  lh-lg media'  >
    <ul>
    <i class="fa-solid fa-circle-check"> Pro's</i>
    <li className='lh-lg'>Improved accuracy by removing human involvement in verification</li>
    <li className='lh-lg'>Cost reductions by eliminating third-party verification</li>
    <li className='lh-lg'>Decentralization makes it harder to tamper with</li>
    <li className='lh-lg'>Transactions are secure, private, and efficient</li>
    <li className='lh-lg'>Transparent technology</li>
    <li className='lh-lg'>Provides a banking alternative and a way to secure 
    personal information for citizens of countries with unstable or 
    underdeveloped governments</li>
    </ul>
    <ul >
    <i class="fa-solid fa-circle-xmark"> Cons</i>
    <li className='lh-lg'>Significant technology cost associated with mining bitcoin</li>
    <li className='lh-lg'>Low transactions per second</li>
    <li className='lh-lg'>History of use in illicit activities, such as on the dark web</li>
    <li className='lh-lg'>Regulation varies by jurisdiction and remains uncertain</li>
    <li className='lh-lg'>Data storage limitations</li>
    </ul>
  </div>
</div>

<h1 className='d-flex align-items-center justify-content-center  animate'>Benefits of Blockchains</h1>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Accuracy of the Chain</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>Transactions on the blockchain network are approved by a network of thousands of computers. This removes almost all human involvement in the verification process, resulting in less human error and an accurate record of information. Even if a computer on the network were to make a computational mistake, the error would only be made to one copy of the blockchain. For that error to spread to the rest of the blockchain, it would need to be made by at least 51% of the network’s computers—a near impossibility for a large and growing network the size of Bitcoin’s</p> 
</div>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Cost Reductions</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>Typically, consumers pay a bank to verify a transaction, a notary to sign a document, or a minister to perform a marriage. Blockchain eliminates the need for third-party verification—and, with it, their associated costs. For example, business owners incur a small fee whenever they accept payments using credit cards, because banks and payment-processing companies have to process those transactions. Bitcoin, on the other hand, does not have a central authority and has limited transaction fees.</p> 
</div>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Decentralization</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>Blockchain does not store any of its information in a central location. Instead, the blockchain is copied and spread across a network of computers. Whenever a new block is added to the blockchain, every computer on the network updates its blockchain to reflect the change. By spreading that information across a network, rather than storing it in one central database, blockchain becomes more difficult to tamper with. If a copy of the blockchain fell into the hands of a hacker, only a single copy of the information, rather than the entire network, would be compromised.</p> 
</div>


<h1 className='d-flex align-items-center justify-content-center  animate'>Drawbacks of Blockchains</h1>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Technology Cost</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>Although blockchain can save users money on transaction fees, the technology is far from free. For example, the PoW system which the bitcoin network uses to validate transactions, consumes vast amounts of computational power. In the real world, the power from the millions of computers on the bitcoin network is close to what Norway and Ukraine consume annually</p>
<p>Despite the costs of mining bitcoin, users continue to drive up their electricity bills to validate transactions on the blockchain. That’s because when miners add a block to the bitcoin blockchain, they are rewarded with enough bitcoin to make their time and energy worthwhile. When it comes to blockchains that do not use cryptocurrency, however, miners will need to be paid or otherwise incentivized to validate transactions</p>
</div>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Speed and Data Inefficiency</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>Bitcoin is a perfect case study for the possible inefficiencies of blockchain. Bitcoin’s PoW system takes about 10 minutes to add a new block to the blockchain.
At that rate, it’s estimated that the blockchain network can only manage about seven transactions per second (TPS). Although other cryptocurrencies such as Ethereum perform better than bitcoin, they are still limited by blockchain. Legacy brand Visa, for context, can process 65,000 TPS.</p> 
</div>
<h4 className='d-flex align-items-center ms-5  animate'><i class="fa-solid fa-hand-point-right"></i>Illegal Activity</h4>
<div className='d-flex flex-column align-items-center ps-5 pe-5 lh-lg' >
<p>While confidentiality on the blockchain network protects users from hacks and preserves privacy, it also allows for illegal trading and activity on the blockchain network. The most cited example of blockchain being used for illicit transactions is probably the Silk Road, an online dark web illegal-drug and money laundering marketplace operating from February 2011 until October 2013, when it was shut down by the FBI</p>
<p>The dark web allows users to buy and sell illegal goods without being tracked by using the Tor Browser and make illegal purchases in Bitcoin or other cryptocurrencies. Current U.S. regulations require financial service providers to obtain information about their customers when they open an account, verify the identity of each customer, and confirm that customers do not appear on any list of known or suspected terrorist organizations.
This system can be seen as both a pro and a con. It gives anyone access to financial accounts but also allows criminals to more easily transact. Many have argued that the good uses of crypto, like banking the unbanked world, outweigh the bad uses of cryptocurrency, especially when most illegal activity is still accomplished through untraceable cash</p> 
</div>
<Footer/>
    </div>
  )
}

export default Blockchain