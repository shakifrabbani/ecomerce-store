import React, { useEffect } from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md'
import Aos from 'aos';
import "aos/dist/aos.css";

const ProductsGrid = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='text-purple-600 text-xl font-semibold '>
        Browse Collection</h1>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='text-black font-semibold text-[42px] leading-[50px] text-center '>Trending Products</h1>
    </div>
    
  )
}


export default ProductsGrid
