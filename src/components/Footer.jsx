import React, { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* 1st box start here  */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-purple-600 lg:px-10 py-8  grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10 place-items-center "
      >
        <img
          src={client1}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client2}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client3}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client4}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client5}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client6}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
      </div>
      {/* 1st box end here */}

      {/* 2nd box start here */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-5 grid-cols-1 justify-center items-start lg:gap-3 gap-10">
        <div
          dat-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-10 grow"
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl font-bold text-purple-600 underline italic">
              Finest Finds
            </h1>
            <p className="text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              amet iure impedit hic sunt tempore enim nostrum eligendi animi
              sint.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-black text-xl font-semibold capitalize">
              Download Our App
            </h1>
            <div className="flex justify-center items-center gap-4">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in " data-aos-delay="200" className="ml-15">
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Home
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              About
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Contect
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Service
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Blogs
            </li>
          </ul>
        </div>

        <div data-aos="zoom-in " data-aos-delay="200" className="ml-15">
          <h1 className="text-black text-xl font-semibold capitalize">
            Information
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Return Policy
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Privacy Policy
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Refund Policy
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Agreement
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              We Our Brand
            </li>
          </ul>
        </div>

        <div data-aos="zoom-in " data-aos-delay="200" className="ml-15">
          <h1 className="text-black text-xl font-semibold capitalize">
            Top Categories
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Wireless headphone
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Bluetooth speakers
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Portable devices
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Monio live camera
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Movie projector T6
            </li>
          </ul>
        </div>

        <div data-aos="zoom-in " data-aos-delay="200" className="ml-15">
          <h1 className="text-black text-xl font-semibold capitalize">
            Contect Info
          </h1>

          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Phone: +1 234 567 890
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
              Email: info@domain.com
            </li>
            <li className="text-gray-500 cursor-pointer hover:text-black">
             401 Broadway, 24th floor,
orchard view, london, UK
            </li>
          </ul>
        </div>
      </div>
      {/* 2nd box end here */}



      {/* 3rd box start here */}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
    
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            <img src={pay1} alt="" className="w-[50px] rounded-lg" />
            <img src={pay2} alt="" className="w-[50px] rounded-lg" />
            <img src={pay3} alt="" className="w-[50px] rounded-lg" />
            <img src={pay4} alt="" className="w-[50px] rounded-lg" />
          </div>
          <div className="lg:w-[60%] w-full flex flex-col justify-center items-center gap-4 flex-grow">
            <h1 className="text-black text-2xl font-semibold">Subscribe Newsletter</h1>

            <div>
            <input type="email" placeholder="Enter your email" className="lg:w-auto w-full px-6 py-3 bg-amber-50 border-1 border-gray-400 lg:rounded-l-lg rounded-lg" />
            <button className="bg-purple-600 lg:w-auto w-full text-white hover:bg-yellow-300 hover:text-black
            px-6 py-3 lg:rounded-r-lg rounded-lg font-semibold">Submit</button>
            </div>
          </div>
          
        <div className="lg:w-[20%] w-full"><p className="text-gray-500 lg:text-end text-center">2024 Powered by Debug Entity</p>
        </div>
       </div>
      </div>
      {/* 3rd box end here */}
    </div>
  );
};

export default Footer;
