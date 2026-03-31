import React from 'react';

const Workflow = () => {
    return (
        <div className='gradient-bg py-[120px] container mx-auto text-center text-white'>
            <div className='space-y-5'>
                <h1 className='font-extrabold text-4xl '>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex gap-4 justify-center'>
                    <button className='bg-white rounded-full btn'><div className='gradient-text '>Explore Products</div></button>
                    <button className='btn btn-outline rounded-full'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;