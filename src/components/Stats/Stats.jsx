import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto gradient-bg text-center py-14'  >
            <div className='scale-85 md:scale-100 grid md:grid-cols-3 gap-10 justify-center'>
                <div className=' md:border-r-2 space-y-5 border-gray-100'>
                    <h1 className='font-extrabold text-white text-6xl'>50K+</h1>
                    <p className='font-medium text-2xl text-white'>Active Users</p>
                </div>
                <div className=' md:border-r-2 space-y-5 border-gray-100'>
                    <h1 className='font-extrabold text-white text-6xl'>200+</h1>
                    <p className='font-medium text-2xl text-white'>Premium Tools</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='font-extrabold text-white text-6xl'>4.9</h1>
                    <p className='font-medium text-2xl text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;