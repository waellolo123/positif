import jog1 from "../assets/jog1_clean.png";
import jog2 from "../assets/jog2_clean.png";
import jog3 from "../assets/jog3_clean.png";
import jog4 from "../assets/jog4_clean.png";
import jog5 from "../assets/jog5_clean.png";
import jog6 from "../assets/jog6_clean.png";
import jog7 from "../assets/jog7_clean.png";
import Text from "./Text";


const ImageDetails = () => {



  return (
    <div className='flex-1'>
     {/* image container */}
      <div className="relative w-full h-[500px] bg-slate-100">
        <img src={jog1} alt="" className="absolute w-[400px] inset-0 m-auto"/>

        <div className="bg-amber-500 flex flex-col items-center  px-6 py-1 absolute bottom-0 right-0">
         <span className="text-white line-through">32.000</span>
         <span className="text-purple font-bold">29.900</span>
        </div>

        <div className="bg-purple px-4 py-2 absolute left-5 top-5 rounded-full">
          <p className="text-white text-xs">Super Promo</p>
        </div>

        <div className=""></div>
       
      </div>
      {/* images container */}
      <div className="mt-5 grid grid-cols-6 gap-2">
       <img src={jog2} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
       <img src={jog3} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
       <img src={jog4} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
       <img src={jog5} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
       <img src={jog6} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
       <img src={jog7} alt="" className="w-[110px] bg-slate-100 border-gray border-1"/> 
      </div>

      <Text title={"Tailles disponibles"} subtitle={"toutes les tailles d'enfants"}/> 

      {/* tailles */}
      <div className="mt-3 flex gap-2">
       <span className="bg-amber-500 px-2 py-1 font-bold text-purple">6 mois</span> 
       <span className="bg-amber-500 px-2 py-1 font-bold text-purple">1 an</span> 
       <span className="bg-amber-500 px-2 py-1 font-bold text-purple">2 ans</span> 
       <span className="bg-amber-500 px-2 py-1 font-bold text-purple">4 ans</span> 
       <span className="bg-amber-500 px-2 py-1 font-bold text-purple">6 ans</span> 
      </div>

      <Text title={"Couleurs"} subtitle={"des couleurs et modèles variés"}/> 

      {/* couleurs  */}
      <div className="mt-3 flex gap-2">
       <div className="w-[50px] h-[50px] bg-[#E1826C] "></div> 
       <div className="w-[50px] h-[50px] bg-[#434343] "></div> 
       <div className="w-[50px] h-[50px] bg-[#E19D0E] "></div> 
       <div className="w-[50px] h-[50px] bg-[#77A66C] "></div> 
       <div className="w-[50px] h-[50px] bg-[#6E0E10] "></div> 
      </div>
        
      <Text title={"Description"} subtitle={"Détails et fiche technique du produit"}/> 
      {/* description */}
        <p className="w-full text-slate-800">Nos joggings pour enfants allient confort, résistance et style. 
        Confectionnés dans des tissus doux et respirants, ils offrent une liberté 
        de mouvement idéale pour le quotidien, l’école ou les activités sportives. 
        Grâce à des finitions solides et des matières durables, ils résistent aux 
        lavages fréquents tout en gardant leurs couleurs éclatantes. Pratiques 
        et modernes, nos joggings assurent aux enfants un look tendance et 
        une aisance incomparable, jour après jour.</p>




    </div>
  )
}

export default ImageDetails;
