import { FaArrowRight } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";


const Formulaire = () => {



     const tailles = ["6 mois", "1 ans", "2 ans", "4 ans", "6 ans"];

    const modeles = [
      { id: 1, name: "Modèle 1", img: "/jog1_clean.png" },
      { id: 2, name: "Modèle 2", img: "/jog2_clean.png" },
      { id: 3, name: "Modèle 3", img: "/jog3_clean.png" },
      { id: 4, name: "Modèle 4", img: "/jog4_clean.png" },
      { id: 5, name: "Modèle 5", img: "/jog5_clean.png" },
      { id: 6, name: "Modèle 6", img: "/jog6_clean.png" },
      { id: 7, name: "Modèle 7", img: "/jog7_clean.png" },
    ];

    const offres = {
      1: { label: "1 pièce", prix: 29.9 },
      2: { label: "2 pièces", prix: 57.9 },
      3: { label: "3 pièces", prix: 79.9 },
    };




  const [selectedOffer, setSelectedOffer] = useState(null);
  const [choix, setChoix] = useState({ quantite: 0, tailles: [], modeles: [], prix: 0 });

  const handleSelect = (offer) => {
    setSelectedOffer(offer);
    setChoix({
      quantite: offer,
      tailles: Array(offer).fill(""),
      modeles: Array(offer).fill(""),
      prix: offres[offer].prix,
    });
  };

  const updateTaille = (index, value) => {
    const newTailles = [...choix.tailles];
    newTailles[index] = value;
    setChoix({ ...choix, tailles: newTailles });
  };

  const updateModele = (index, value) => {
    const newModeles = [...choix.modeles];
    newModeles[index] = value;
    setChoix({ ...choix, modeles: newModeles });
  };
 


  

  return (

    <div className="flex-1">
     <p className="text-amber-500 font-semibold">Choisissez la formule qui vout convient si dessous</p>
      {/*buttons  */}

      <div className="w-full p-5 max-sm:p-2  mt-5 flex flex-col justify-center items-center bg-slate-100">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={`w-full p-5 max-sm:p-2  mt-5 flex items-center justify-center gap-3 text-white font-semibold bg-gradient-to-r from-purple to-saumon cursor-pointer ${
              selectedOffer === n ? "bg-blue-700" : "bg-blue-500"
            }`}
            onClick={() => handleSelect(n)}
          >
            {offres[n].label} ➔ {offres[n].prix.toFixed(3)} dt 
            <span className="animate-bounce text-amber-500 flex items-center gap-2">
            {n === 3 &&  <TbTruckDelivery className="size-6 text-amber-500"/>}
              {n === 3 && "Livraison gratuite"}
              </span>
            <TbHandClick className="size-8 text-white"/>
          </button>
        ))}
        
      </div>





      
      {/* Sélections dynamiques */}
      {selectedOffer && (
        <div className="space-y-4 mt-10">
          {[...Array(selectedOffer)].map((_, i) => (
            <div key={i} className="border border-purple p-4 rounded bg-gray-50">
              <h3 className="font-semibold mb-2 text-purple">Pièce {i + 1}</h3>

              {/* Taille */}
              <select
                className="border p-2 rounded w-48 mb-2 bg-purple text-white"
                onChange={(e) => updateTaille(i, e.target.value)}
              >
                <option value="" className="text-white">Choisir une taille</option>
                {tailles.map((t) => (
                  <option className="text-white" key={t} value={t}>{t}</option>
                ))}
              </select>

              {/* Modèles en images */}
              <div className="flex space-x-2 overflow-x-auto">
                {modeles.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => updateModele(i, m.name)}
                    className={`border border-purple rounded p-1 ${
                      choix.modeles[i] === m.name ? "ring-2 ring-amber-500" : ""
                    }`}
                  >
                    <img src={m.img} alt={m.name} className="w-16 h-16 object-cover rounded" />
                    <p className="text-xs font-medium text-center text-purple">{m.name}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}


      
      {/* <div className="p-5 max-sm:p-2  mt-5 flex items-center justify-around bg-gradient-to-r from-purple to-saumon cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-white text-xl max-sm:text-sm font-bold">1 Pièce</span>
        <FaArrowRight className="size-6 text-amber-500"/>
        <span className="text-white text-xl max-sm:text-sm font-bold">29, 900dt</span>
        </div>
        <span className="text-amber-500 font-semibold text-xl max-sm:text-sm">+7 dt de livraison</span>
        <TbHandClick className="size-8 text-white"/>
      </div> */}


      {/* <div className="p-5 max-sm:p-2 mt-5 flex items-center justify-around bg-gradient-to-r from-purple to-saumon cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-white text-xl max-sm:text-sm font-bold">2 Pièces</span>
        <FaArrowRight className="size-6 text-amber-500"/>
        <span className="text-white text-xl max-sm:text-sm font-bold">55, 900dt</span>
        </div>
        <span className="text-amber-500 font-semibold text-xl max-sm:text-sm">+7 dt de livraison</span>
        <TbHandClick className="size-8 text-white"/>
      </div> */}

{/* 
      <div className="p-5 max-sm:p-2 mt-5 flex items-center justify-around bg-white border border-purple cursor-pointer">
        <div className="flex gap-4 items-center">
        <span className="text-purple text-xl max-sm:text-sm font-bold border-b-4 border-amber-500">3 Pièces</span>
        <FaArrowRight className="size-6 text-amber-500"/>
         <span className="text-purple text-xl max-sm:text-sm font-bold">55, 900dt</span>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
           <TbTruckDelivery className="size-6 max-sm:size-4 text-purple"/>
           <span className="text-purple max-sm:text-xs">Livraison Gratuite</span>
          </div>
          <div className="px-6 max-sm:px-1 py-1 border border-purple">
            <p className="text-purple max-sm:text-xs">20% d'économies</p>
          </div>
        </div>
       

        <TbHandClick className="size-8 text-purple"/>
      </div> */}

     {/* formulaire */}
      <div className="mt-10 p-5 border border-purple">





  



      {/* section prix */}
      {/* <div className="">
       <div className="flex items-center justify-between">
        <span className="text-lg text-purple font-semibold">Quantité: 2</span>
        <span className="text-lg text-purple font-semibold">55.900 dt</span>
       </div>
       <hr className="my-3 border-purple"/>
        <div className="flex items-center justify-between">
        <span className="text-lg text-purple font-semibold">Livraison</span>
        <span className="text-lg text-purple font-semibold">7.000 dt</span>
       </div>
      </div> */}

      {/* section formulaire */}
       <form 
          action="https://formspree.io/f/mkgagyna" method="POST" 
          className="mt-10">


                 {/* Formulaire récapitulatif */}
      {choix.quantite > 0 && (
        <div className="mt-6 p-4 border border-purple rounded bg-white shadow">
          <h2 className="font-bold mb-4 text-purple">Récapitulatif de commande</h2>
          <p className="text-purple font-medium"><strong className="text-slate-700">Quantité :</strong> {choix.quantite}</p>
          <p className="text-purple font-medium"><strong className="text-slate-700">Prix total :</strong> {choix.prix.toFixed(3)} dt {choix.prix === 79.900 ? "Livraison gratuite" : "+ 7dt livraison"}</p>
          <div className="mt-2 space-y-2">
            {choix.tailles.map((t, i) => (
              <div key={i}>
                <p className="text-purple font-medium">Pièce {i + 1} → Taille : {t || "non choisie"}, Modèle : {choix.modeles[i] || "non choisi"}</p>
              </div>
            ))}
          </div>
        </div>
      )}


        <div className="mt-10 flex items-center justify-between gap-4">
         <input type="text" placeholder="Nom" className="p-4 border border-purple w-full"/>
         <input type="text" placeholder="Prénom" className="p-4 border border-purple w-full"/>
        </div>
         <input type="text" placeholder="Numéro de Tel" className="mt-4 p-4 border border-purple w-full"/>
         <input type="text" placeholder="Addresse de livraison" className="mt-4 p-4 border border-purple w-full"/>
         <input type="text" placeholder="Email (optionnel)" className="mt-4 p-4 border border-purple w-full"/>
         <textarea rows={4} type="text" placeholder="Message..." className="mt-4 p-4 border border-purple w-full"/>
       </form>

       <button 
       type="submit"
       className="p-5 w-full max-sm:p-2 mt-5 flex items-center justify-center gap-4 bg-gradient-to-r from-purple to-saumon cursor-pointer text-white text-center text-lg font-semibold">
        Je valide ma commande
        <TbHandClick className="size-8 text-white"/>
       </button>


      </div>
    


    </div>
  )
}

export default Formulaire;
