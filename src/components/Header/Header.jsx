import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(){

    return(
        <header className="shadow sticky z-50 top-0">
             <nav className="bg-blue-400 border-blue-400 px-4 lg:px-6 py-2.5">
             <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"> 
             <Link to="/" className="flex items-center"> 
             <img
                            src="https://as2.ftcdn.net/v2/jpg/03/57/86/03/1000_F_357860335_GNedLJMESR2xo0doCadbyphiclVDwQi2.jpg"
                            className="mr-3 h-12 text-white rounded-full size-full"
                            alt="Big Shopper"
                            />
                            <h1 className="text-2xl font-bold">Big Shopper</h1>
                            </Link>
                            
               <div className="flex items-center lg:order-2">
                    <Link
                            to="Login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                </div>        
                <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/Home"
                                    className={({isActive}) =>
                                        `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Menu"
                                    className={({isActive}) =>
                                        `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none`
                                    }
                                >
                                    Menu
                                </NavLink>
                            </li>       

                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none`
                                    }
                                >
                                    ContactUs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none`
                                    }
                                >AboutUs
                                   
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/Cart"
                                    className={({isActive}) =>
                                        `text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none`
                                    }
                                >Add to Cart
                                   
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
 
       </div>
    </nav>
 </header>                  
   
);

}