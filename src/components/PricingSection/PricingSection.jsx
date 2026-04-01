import React from 'react';

const PricingSection = () => {
    return (
        <div>
            <div className='container mx-auto  py-15'>
                        <div className='text-center p-10 space-y-6'>
                            <h1 className='font-extrabold text-5xl'>Simple, Transparent Pricing </h1>
                            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime..</p>
                            {/* cards container */}
                           <div className='grid md:grid-cols-3 gap-4 justify-center'>
{/* card-1 */}
 <div className="card  bg-base-100 shadow-sm max-w-112.5">
  <div className="card-body rounded-2xl p-10 bg-[#F2F2F2] flex flex-col justify-between">

           <div>
                   <div className="text-left">
                     <h2 className="text-3xl font-bold">Starter</h2>
                     <span className="text-xl">Perfect for getting started</span>
                   </div>
                   <div>
                       <h1 className='text-black my-4 text-left'><span className='text-5xl font-bold'>$0</span>/Month
                       </h1>
                   </div>
                    <ul className="mt-6 flex flex-col  gap-2 text-xs text-left">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Access to 10 free tools</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Basic templates</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Community support</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Community support</span>
               </li>
              
             
                   </ul>
           </div>

             <div className="mt-6">
                 <button className="btn btn-primary btn-block gradient-bg rounded-full">Get Started Free</button>
            </div>
  </div>
</div> 
{/* card-2 */}
 <div className="card  bg-base-100 shadow-sm max-w-112.5">
    
    

  <div className="card-body rounded-2xl p-10 relative gradient-bg text-white flex flex-col justify-between">
 <div className="badge badge-secondary bottom-107 bg-amber-200 absolute border-none text-amber-900 left-50">Most Popular </div>

           <div>
                   <div className="text-left">
                     <h2 className="text-3xl font-bold">Pro</h2>
                     <span className="text-xl">Best for professionals</span>
                   </div>
                   <div>
                       <h1 className=' my-4 text-left'><span className='text-5xl font-bold'>$29</span>/Month
                       </h1>
                   </div>
                    <ul className="mt-6 flex flex-col  gap-2 text-xs text-left">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Unlimited templates</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Priority support</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Unlimited projects</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Cloud sync</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Advanced analytics</span>
               </li>
           
              
             
                   </ul>
           </div>

             <div className="mt-6">
                 <button className="btn btn-base btn-block rounded-full"><p className='gradient-text'>Start Pro Trial</p></button>
            </div>
  </div>
</div> 
{/* card-3 */}
 <div className="card  bg-base-100 shadow-sm max-w-112.5">
  <div className="card-body rounded-2xl p-10 bg-[#F2F2F2] flex flex-col justify-between">

           <div>
                   <div className="text-left">
                     <h2 className="text-3xl font-bold">Enterprise</h2>
                     <span className="text-xl">For teams and businesses</span>
                   </div>
                   <div>
                       <h1 className='text-black my-4 text-left'><span className='text-5xl font-bold'>$99</span>/Month
                       </h1>
                   </div>
                    <ul className="mt-6 flex flex-col  gap-2 text-xs text-left">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Everything in Pro</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Team collaboration</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Custom integrations</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Dedicated support</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>SLA guarantee</span>
               </li>
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 <span>Custom branding</span>
               </li>
              
             
                   </ul>
           </div>

             <div className="mt-6">
                 <button className="btn btn-primary btn-block gradient-bg rounded-full">Contact Sales</button>
            </div>
  </div>
</div> 




                           </div>
                        </div>
                    </div>
        </div>
    );
};

export default PricingSection;