import logo from "/p_l.png";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple to-saumon px-20 py-5">
     <div className="flex items-center justify-between max-sm:justify-center">
      <img src={logo} alt="" className="w-[100px]"/>
      <div className="flex gap-2 text-yellow-500 max-sm:hidden">
        <FaFacebook size={22}/>
        <FaInstagram size={22}/>
        <FaTiktok size={22}/>
        <FaYoutube size={22}/>
      </div>
     </div>
     <div className="max-sm:mt-5 flex items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-2 text-white">
        <FaPhone className="size-4 max-sm:text-amber-500"/>
         <span className="text-sm max-sm:text-amber-500">24232329</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-white">
        <IoIosMail className="size-5 max-sm:text-amber-500"/>
        <span className="text-sm max-sm:text-amber-500">Positif.shopping@gmail.com</span>
      </div>
     </div>
    </div>
  )
}

export default Header;
