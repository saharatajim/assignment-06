import React from 'react';

const NavBar = ({cart}) => {
    return (
        <div>


<div className="container mx-auto navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>
    </div>
   <a className="btn btn-ghost  gradient-text font-bold text-3xl scale-80 md:scale-100">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4 font-semibold">
    <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end scale-80 md:scale-100">
       <div className='flex items-center gap-4'>
                <div  role="button" className="btn   btn-ghost btn-circle ">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                       <span className="badge badge-sm bg-red-100 rounded-full indicator-item">{cart.length}</span>
                     </div>
                </div>
               <p className='font-semibold'>Login</p>
                <button className='scale-80 md:scale-100 btn rounded-full gradient-bg text-white'>Get Started</button>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default NavBar;