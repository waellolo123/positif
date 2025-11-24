import { useState } from "react";
import Text from "./Text";



const ImageDetails = () => {


  
  const models = [
    { id: 1, name: "Modèle 1", src: "/jog1_clean.png" },
      { id: 2, name: "Modèle 2", src: "/jog2_clean.png" },
      { id: 3, name: "Modèle 3", src: "/jog3_clean.png" },
      { id: 4, name: "Modèle 4", src: "/jog4_clean.png" },
      { id: 5, name: "Modèle 5", src: "/jog5_clean.png" },
      { id: 6, name: "Modèle 6", src: "/jog6_clean.png" },
      { id: 7, name: "Modèle 7", src: "/jog7_clean.png" },
    ];
    
    
    const [selectedImage, setSelectedImage] = useState(models[0].src);



  return (
    <div className='flex-1'>
     {/* image container */}
      <div className="relative w-full h-[500px] bg-slate-100">

          <img src={selectedImage} alt="" className="absolute w-[400px] inset-0 m-auto"/>


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
         {models.map((model) => (
          <img
            key={model.id}
            src={model.src}
            alt={model.alt}
            style={{
              width: '80px',
              cursor: 'pointer',
              border: selectedImage === model.src ? '2px solid #67285f' : 'none',
              borderRadius: '6px',
            }}
            onClick={() => setSelectedImage(model.src)}
          />
        ))}
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

      {/* <Text title={"Couleurs"} subtitle={"des couleurs et modèles variés"}/>  */}

      {/* couleurs  */}
      {/* <div className="mt-3 flex gap-2">
       <div className="w-[50px] h-[50px] bg-[#E1826C] "></div> 
       <div className="w-[50px] h-[50px] bg-[#434343] "></div> 
       <div className="w-[50px] h-[50px] bg-[#E19D0E] "></div> 
       <div className="w-[50px] h-[50px] bg-[#77A66C] "></div> 
       <div className="w-[50px] h-[50px] bg-[#6E0E10] "></div> 
      </div> */}
        
      {/* <Text title={"Description"} subtitle={"Détails et fiche technique du produit"}/>  */}
      {/* description */}
        {/* <p className="w-full text-gray">Nos joggings pour enfants allient confort, résistance et style. 
        Confectionnés dans des tissus doux et respirants, ils offrent une liberté 
        de mouvement idéale pour le quotidien, l’école ou les activités sportives. 
        Grâce à des finitions solides et des matières durables, ils résistent aux 
        lavages fréquents tout en gardant leurs couleurs éclatantes. Pratiques 
        et modernes, nos joggings assurent aux enfants un look tendance et 
        une aisance incomparable, jour après jour.</p> */}




    </div>
  )
}

export default ImageDetails;
