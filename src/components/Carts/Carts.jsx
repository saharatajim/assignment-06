import React from 'react';

const Carts = () => {
    return (
<div className='container mx-auto rounded-lg shadow p-7 m-6 '>
<div>
            <div className='font-bold text-2xl mb-4'>
            Your Cart
            </div>
            <div className='text-center text-3xl p-10 bg-gray-100 rounded-lg h-60 flex justify-center items-center'>
                Your cart is Empty
            </div>
</div>

</div>
    );
};

export default Carts;