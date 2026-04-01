import React from 'react';
import Cart from './Cart';

const Carts = ({cart,setCart}) => {
    
    return (
<div className='container mx-auto rounded-lg shadow p-7 m-6 '>
<div>
            <div className='font-bold text-2xl mb-4'>
            Your Cart
            </div>
            <div>

                {
                    cart.length===0
            ?            
            <div className='text-center text-3xl p-10 bg-gray-100 rounded-lg h-60 flex justify-center items-center'>
                Your cart is Empty
            </div>
            :
<Cart cart={cart}
setCart={setCart}/>
                }
            </div>


</div>

</div>
    );
};

export default Carts;