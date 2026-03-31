import React, { use } from 'react';

const Products = ({productsPromise}) => {
    // console.log(productsPromise)
    const productsData=use(productsPromise)
    // console.log(productsData)
    return (
        <div className='container mx-auto justify-center grid grid-cols-3 gap-4 pb-12'>
            {
                productsData.map(product=>
                
                <div >
                    <div className="card w-96 bg-base-100 shadow-sm">
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
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        product.features.map(feature=>

            <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        )
      }

    </ul>
    <div className="mt-6">
      <button className="btn gradient-bg rounded-full w-full text-white">Buy Now</button>
    </div>
  </div>
</div>
                </div>
            
            )
            }
        </div>
    );
};

export default Products;