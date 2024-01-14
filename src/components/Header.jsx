"use client";
import Logo from './Logo'
const Header = () => {
    return(
        <div className="fixed top-0 left-0 w-full bg-white flex justify-between items-center py-3 px-8 z-10 drop-shadow-xl">
        <div className="flex items-center">
            <Logo />
          <p className="text-blue-100 text-3xl font-light ml-2">
            <span className="font-bold">OMEGA</span>INITIATIVE
          </p>
        </div>
  
        <div className=" px-5 py-0.4 text-blue-100 text-xl ml-auto font-light">
          <button className="px-24">About Us</button>
        </div>

      </div>
    );
};

export default Header