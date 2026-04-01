import React from 'react';
import badge from '../../assets/assets/essential/Group 5.png'
import play from '../../assets/assets/essential/Play.png'
import banner from '../../assets/assets/essential/banner.png'
const Banner = () => {
    return (
        <div className='container mx-auto md:flex gap-14 justify-center items-center py-14'>
            <div className='scale-70 md:scale-100 space-y-4'>
                <div className='badge flex gap-2 bg-[#E1E7FF]'>
                    <img className='scale-50' src={badge} alt="" />
                    <p className='gradient-text'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='font-extrabold text-7xl'>Supercharge Your Digital Workflow</h1>
                <p className='text-xl text-base-350'>Access premium AI tools, design assets, templates, and productivity
                 software—all in one place. Start creating faster today.Explore Products
</p>
                <div className='flex'>
                    <button className='btn btn-outline gradient-bg text-white rounded-full'>Explore Products</button>
                  <button className="active:scale-95 rounded-full p-[2px] gradient-bg">
                      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
                      <img className="scale-50" src={play}   alt="" />
                     <p className='gradient-text font-bold'> Watch Demo</p>
                       </div>
                </button>
                </div>
            </div>

            <div>
                <img className='shadow-xl scale-80 md:scale-100' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;