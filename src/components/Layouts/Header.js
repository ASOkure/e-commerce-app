import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-18" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <span className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <span className="bi bi-cart-fill cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <span className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
