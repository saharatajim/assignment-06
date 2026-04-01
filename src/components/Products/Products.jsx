import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise,cart,setCart}) => {
    // console.log(productsPromise)
    const productsData=use(productsPromise)
    // console.log(productsData)
    return (
        <div className='container mx-auto justify-center grid md:grid-cols-3 gap-4 pb-12'>
            {
                productsData.map((product,index)=>
                
                <div key={index} >
                   <ProductCard 
                   cart={cart}
                   setCart={setCart}
                    product={product}/>
                </div>
            
            )
            }
        </div>
    );
};

export default Products;