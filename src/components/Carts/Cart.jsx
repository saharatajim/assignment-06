import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cart,setCart}) => {

    const total=cart.reduce((sum,item)=>sum+item.price,0)
    const handleOrder=()=>{
        setCart([])
        toast.success("Order proceeded successfully ")
    }
    const handleRemove=(item)=>{
        toast.warn("item removed from cart")
        console.log(item)
const filteredCart=cart.filter(product=>product.id!==item.id)
console.log(filteredCart)
setCart(filteredCart)
    }
    return (
            <div className='space-y-4 mt-10'>
                {
                    cart.map((item,index)=>
<div key={index}>
                        <div className=' flex justify-between items-center bg-gray-100 rounded-lg p-4'>
                        <div className='flex gap-8'>
                             <div className="shadow w-10 h-10 rounded-full flex items-center justify-center ">
                             <img className="scale-75" src={item.icon} alt="" />
                        </div>

                                <div>
                                    <h1>{item.name}</h1>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            <div><button onClick={()=>handleRemove(item)} className='text-lg active:scale-95 text-pink-500'>Remove</button></div>
                        </div>

</div>
                    )
                }
                                        <div>
                            <div className='flex p-2 justify-between item-center'>
                                <p>Total</p>
                                <p className='font-bold text-2xl'> ${total}</p>
                            </div>
                            <div><button onClick={handleOrder} className=' btn w-full rounded-full gradient-bg text-white'>Proceed to Checkout</button></div>
                        </div>
            </div>
    );
};

export default Cart;