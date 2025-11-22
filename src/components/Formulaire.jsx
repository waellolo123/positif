import { FaArrowRight } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

const Formulaire = () => {

  

  return (
    <div className="flex-1">
     <p className="text-amber-500 font-semibold">Choisissez la formule qui vout convient si dessous</p>
      {/*buttons  */}

      <div className="p-5 max-sm:p-2  mt-5 flex items-center justify-around bg-gradient-to-r from-purple to-saumon cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-white text-xl max-sm:text-sm font-bold">1 Pièce</span>
        <FaArrowRight className="size-6 text-amber-500"/>
        <span className="text-white text-xl max-sm:text-sm font-bold">29, 900dt</span>
        </div>
        <span className="text-amber-500 font-semibold text-xl max-sm:text-sm">+7 dt de livraison</span>
        <TbHandClick className="size-8 text-white"/>
      </div>


      <div className="p-5 max-sm:p-2 mt-5 flex items-center justify-around bg-gradient-to-r from-purple to-saumon cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-white text-xl max-sm:text-sm font-bold">2 Pièces</span>
        <FaArrowRight className="size-6 text-amber-500"/>
        <span className="text-white text-xl max-sm:text-sm font-bold">55, 900dt</span>
        </div>
        <span className="text-amber-500 font-semibold text-xl max-sm:text-sm">+7 dt de livraison</span>
        <TbHandClick className="size-8 text-white"/>
      </div>


      <div className="p-5 max-sm:p-2 mt-5 flex items-center justify-around bg-white border border-purple cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-purple text-xl max-sm:text-sm font-bold border-b-4 border-amber-500">3 Pièces</span>
        <FaArrowRight className="size-6 text-amber-500"/>
         <span className="text-purple text-xl max-sm:text-sm font-bold">55, 900dt</span>
        </div>
        {/* ****************************************************************** */}
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-2">
           <TbTruckDelivery className="size-6 max-sm:size-4 text-purple"/>
           <span className="text-purple max-sm:text-xs">Livraison Gratuite</span>
          </div>
          <div className="px-6 max-sm:px-1 py-1 border border-purple">
            <p className="text-purple max-sm:text-xs">20% d'économies</p>
          </div>
        </div>
        {/* ****************************************************************** */}
        <TbHandClick className="size-8 text-purple"/>
      </div>

     {/* formulaire */}
      <div className="mt-10 p-5 border border-purple">

      {/* section prix */}
      <div className="">
       <div className="flex items-center justify-between">
        <span className="text-lg text-purple font-semibold">Quantité: 2</span>
        <span className="text-lg text-purple font-semibold">55.900 dt</span>
       </div>
       <hr className="my-3 border-purple"/>
        <div className="flex items-center justify-between">
        <span className="text-lg text-purple font-semibold">Livraison</span>
        <span className="text-lg text-purple font-semibold">7.000 dt</span>
       </div>
      </div>

      {/* section formulaire */}
       <form action="" className="mt-10">
        <div className="flex items-center justify-between gap-4">
         <input type="text" placeholder="Nom" className="p-4 border border-purple w-full"/>
         <input type="text" placeholder="Prénom" className="p-4 border border-purple w-full"/>
        </div>
         <input type="text" placeholder="Numéro de Tel" className="mt-4 p-4 border border-purple w-full"/>
         <input type="text" placeholder="Addresse de livraison" className="mt-4 p-4 border border-purple w-full"/>
         <input type="text" placeholder="Email (optionnel)" className="mt-4 p-4 border border-purple w-full"/>
         <textarea rows={4} type="text" placeholder="Message..." className="mt-4 p-4 border border-purple w-full"/>
       </form>

       <button className="p-5 w-full max-sm:p-2 mt-5 flex items-center justify-center gap-4 bg-gradient-to-r from-purple to-saumon cursor-pointer text-white text-center text-lg font-semibold">
        Je valide ma commande
        <TbHandClick className="size-8 text-white"/>
       </button>


      </div>
    


    </div>
  )
}

export default Formulaire;
