"use client";

import Image from 'next/image'
import { useEffect } from 'react';

export const Header = () => {

    useEffect(() => {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu-2');
    
        if (menuButton && mobileMenu) {
            const toggleMenu = () => {
                mobileMenu.classList.toggle('hidden');
            };
    
            menuButton.addEventListener('click', toggleMenu);
    
            return () => {
                menuButton.removeEventListener('click', toggleMenu);
            };
        }
    }, []);

  return (
    <>
     <header>
        <nav className=" px-4 lg:px-6 py-3 md:py-0 bg-gradient-to-b from-blue-500 to-blue-600">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                <Image
                src="/images/logo.png"
                className="mr-3 h-14 sm:h-20 w-14 sm:w-20"
                alt="Milkyway Logo"
                width={300}
                height={300}
            />
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white">Milkyway Casino</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <button data-collapse-toggle="mobile-menu-2" id="mobile-menu-button" type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/"
                                className="block py-3 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/#best-milkyway-casino-games"
                                className="block py-3 pr-4 pl-3 text-white border-b border-blue-300 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Games</a>
                        </li>
                        <li>
                            <a href="/#play-online-games"
                                className="block py-3 pr-4 pl-3 text-white border-b border-blue-300 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Play
                                online</a>
                        </li>

                       
                        <li>
                            <a href="privacy"
                                className="block py-3 pr-4 pl-3 text-white border-b border-blue-300 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Privacy
                                Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
