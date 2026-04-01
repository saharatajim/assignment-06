import React from 'react';
import account from '../../assets/assets/essential/user.png'
import product from '../../assets/assets/essential/package.png'
import rocket from '../../assets/assets/essential/rocket.png'

const StepsSection = () => {
    return (
        <div className='container mx-auto bg-[#F9FAFC] py-[60px]'>
            <div className='text-center p-10 space-y-6'>
                <h1 className='font-extrabold text-5xl'>Get Started in 3 Steps </h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='card shadow p-5 space-y-6' >
                        <div className='flex justify-end  '><p className=' gradient-bg text-white w-8 font-semibold h-8 rounded-full flex items-center justify-center'>01</p></div>
                          <div className='flex justify-center  '>
                            <div className='bg-purple-200 w-30 h-30 rounded-full flex items-center justify-center'>
                                <img className='' src={account} alt="" />
                            </div>
                          </div>
                        <h1 className='font-bold text-2xl'>Create Account</h1>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='card shadow p-5 space-y-6' >
                        <div className='flex justify-end  '><p className=' gradient-bg text-white w-8 font-semibold h-8 rounded-full flex items-center justify-center'>02</p></div>
                          <div className='flex justify-center  '>
                            <div className='bg-purple-200 w-30 h-30 rounded-full flex items-center justify-center'>
                                <img className='' src={product} alt="" />
                            </div>
                          </div>
                        <h1 className='font-bold text-2xl'>Choose Products</h1>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='card shadow p-5 space-y-6' >
                        <div className='flex justify-end  '><p className=' gradient-bg text-white w-8 font-semibold h-8 rounded-full flex items-center justify-center'>03</p></div>
                          <div className='flex justify-center  '>
                            <div className='bg-purple-200 w-30 h-30 rounded-full flex items-center justify-center'>
                                <img className='' src={rocket} alt="" />
                            </div>
                          </div>
                        <h1 className='font-bold text-2xl'>Start Creating</h1>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default StepsSection;