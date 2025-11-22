import logo from "/p_l.png";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-20 w-full bg-gradient-to-r from-purple to-saumon px-20 py-5">
     <div className="flex items-center justify-between max-sm:justify-center">
     <img src={logo} alt="" className="w-[100px]"/>
      <div className="flex gap-2 text-yellow-500 max-sm:hidden">
        <FaFacebook size={22}/>
        <FaInstagram size={22}/>
        <FaTiktok size={22}/>
        <FaYoutube size={22}/>
      </div>
     </div> 
    </div>
  )
}

export default Footer;
