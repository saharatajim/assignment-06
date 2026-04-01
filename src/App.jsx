import React, { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
import Stats from './components/Stats/Stats.jsx';
import Workflow from './components/Workflow/Workflow';
import StepsSection from './components/StepsSection/StepsSection';
import PricingSection from './components/PricingSection/PricingSection';
import Products from './components/Products/Products.jsx';
import Carts from './components/Carts/Carts.jsx';

const productsPromise=fetch("/data.json").then(res=>res.json())
// console.log(productsPromise)


const App = () => {
 const [selectedTab,setSelectedTab]=useState("products")
 const [cart,setCart]=useState([])
// console.log(cart)

  return (
   <>
   <NavBar cart={cart}></NavBar>
   <Banner></Banner>
   <Stats></Stats>
   <section className='text-center container mx-auto my-15'>

    <div className='space-y-5'> 
      <h1 className='font-extrabold text-[48px]'>Premium Digital Tools</h1>
      <p>Choose from our curated collection of premium digital products designed <br />
         to boost your productivity and creativity.</p>
      <div>
        <button onClick={()=>setSelectedTab("products")} className={`btn ${selectedTab==="products" &&'gradient-bg text-white' } rounded-l-full `}>Products</button>
        <button onClick={()=>setSelectedTab("cart")} className={`btn bg-base-100 rounded-r-full ${selectedTab==="cart"&& 'gradient-bg text-white'}`}>Cart ({cart.length})</button>
      </div>
    
    </div>
   </section>

   <div>
    {
      selectedTab==="products" &&  <Products cart={cart} setCart={setCart} productsPromise={productsPromise}></Products>
    }
   </div>
   <div>
    {
      selectedTab==="cart" &&  <Carts cart={cart} setCart={setCart}></Carts>
    }
   </div>
  
   <StepsSection></StepsSection>
  <PricingSection></PricingSection>
   <Workflow></Workflow>
   <Footer></Footer>
   </>
  );
};

export default App;