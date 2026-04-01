import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product,cart,setCart}) => {
const [selectedCardButton,setSelectedCardbutton]=useState(false)
const handleCardButton=(product)=>{

    const findProduct=cart.find(item=>item.id===product.id)
   if(findProduct){
    toast.error("Item already in cart")
    return
   }
    setSelectedCardbutton(true)
    setCart([...cart,product])
     toast.success("Product added successfully")
}

    return (
                    <div className="scale-90 md:scale-100 card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
   <div className='flex justify-end '>
     <span className=" p-2 badge  badge-xs bg-[#E1E7FF]"><p className='gradient-text font-medium'>{product.tag}</p></span>
   </div>
  <div className="shadow w-10 h-10 rounded-full flex items-center justify-center ">
        <img className="scale-75" src={product.icon} alt="" />
    </div>
   
    <div >
      <h2 className="text-[24px] font-bold">{product.name}</h2>

      <p>{product.description}</p>
      <p className="font-bold text-[24px] mt-4">${product.price}/<span className='font-medium text-[16px]'>Mo</span>
       </p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        product.features.map((feature,index)=>

            <li key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        )
      }

    </ul>
    <div className="mt-6">
      <button onClick={()=>handleCardButton(product)} className={`btn gradient-bg rounded-full ${selectedCardButton===true && 'btn-disabled'} w-full text-white`}>{selectedCardButton===true?"Subscribed":"Buy Now"}</button>
    </div>
  </div>
                    </div>
    );
};

export default ProductCard;