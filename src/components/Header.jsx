import React, { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50">
      <h1 className="text-purple-800 font-bold lg:text-[35px] text-3xl underline italic">
        Finest Finds
      </h1>
      <ul className="lg:flex hidden justify-center items-center gap-10 ">
        {navItems.map(({ link, path }) =>(
          <Link key={path} className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white" to={path} spy={true} offset={-100} smooth={true}>{link}
          </Link>
        ))}
      </ul>
      {/* <ul className="lg:flex hidden justify-center items-center gap-10 ">
        <li className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
          Home
        </li>
        <li className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
          About
        </li>
        <li className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
          Products
        </li>
        <li className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
          Testimonial
        </li>
        <li className="text-block text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
          Contect
        </li>
      </ul> */}
      <div className="lg:flex hidden justify-center items-center gap-6 text-black">
        <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-600" />
        <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-600" />
        <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-600" />
        <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-purple-600" />
      </div>

      {/* mobileMenu  */}
     
        <div className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-purple-600 text-3xl cursor-pointer " />
          ) : (
            <FaBars className="text-purple-600 text-3xl cursor-pointer " />
          )}
        </div>
      
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-purple-600 lg:hidden p-4 absolute top-[80px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-300 hover:text-black w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
