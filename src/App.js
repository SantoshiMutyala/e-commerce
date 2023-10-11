                                                               /*import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import Classcomponent from './Component/Classcomponent'

const App = () => {
  const[count,setCount]=useState(0);
  return (
    <div>
      <Header/>
      <Classcomponent/>
      <Container count={count} 
      incounter={()=>setCount(count+1)}
      decounter={()=>setCount(count-1)}/>
      <Footer/>
    </div>
  );
};

export default App;*/

import React from 'react'
import './App.css'
const App = () => {
  const productData=[
    {
    img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
     ,name:"HeadPhones"
    },
    {
      img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
      ,name:"SmartWatches"
    },
    {
      img:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      ,name:"Shoes"
    },
    {
      img:"https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
      ,name:"Cosmetics"
    },
    {
      img:"https://images.unsplash.com/photo-1640890959827-6307611b34a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
      ,name:"Camera"
    },
    {
      img:"https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
      ,name:"Perfumes"
    },
  ]
  return (
   
    <>
    <h1 align="center"> ONLINE SHOPPING</h1>
    <div className='gallery-wrapper'>
      {productData.map((product, index) => (
        <div className={`gallery-item item-${index + 1}`} key={index}>
          <img src={product.img} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App;
