import { FaArrowRight } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


const Formulaire = () => {


  const [selectedOffer, setSelectedOffer] = useState(null);
  const [choix, setChoix] = useState({ quantite: 0, tailles: [], modeles: [], prix: 0 });
  const [state, handleSubmit] = useForm("mkgagyna");

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

    // const access_key = "1a88c807-6657-49dc-9db5-d3fd88af86e6";

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
 
   

       useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.reload(); // refresh page after 3s
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [state.succeeded]);



  return (

    <div className="flex-1">


      {/*buttons  */}

      <div className="w-full p-5 max-sm:p-2 flex flex-col justify-center items-center bg-slate-100">
     <p className="text-saumon font-semibold">Choisissez la formule qui vout convient si dessous</p>
        

        {[1, 2, 3].map((n) => (
          <div key={n} className="w-full">
            {/* Bouton */}
            <button
              className={`w-full p-5 mt-5 flex items-center justify-center gap-3 font-semibold cursor-pointer ${
                selectedOffer === n
                  ? "bg-white border border-purple text-purple text-2xl animate-pulse max-sm:text-lg"
                  : "bg-gradient-to-r from-purple to-saumon text-white text-lg"
              }`}
              onClick={() => handleSelect(n)}
            >
              {offres[n].label} ➔ {offres[n].prix.toFixed(3)} dt
              {n === 3 && (
                <span className="animate-bounce text-amber-500 flex items-center gap-2 max-sm:gap-1 max-sm:text-xs">
                  <TbTruckDelivery className="size-6 text-amber-500" />
                  Livraison gratuite
                </span>
              )}
              <TbHandClick className="size-8" />
            </button>

            {/* Bloc animé */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                selectedOffer === n ? "max-h-screen opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              {[...Array(selectedOffer === n ? n : 0)].map((_, i) => (
                <div key={i} className="border border-purple p-4 rounded bg-gray-50 mb-4">
                  <h3 className="font-semibold mb-2 text-purple">Pièce {i + 1}</h3>

                  {/* Taille */}
                  <select
                    className="border p-2 rounded w-48 mb-2 bg-purple text-white"
                    value={choix.tailles[i] || ""}
                    onChange={(e) => updateTaille(i, e.target.value)}
                  >
                    <option value="">Choisir une taille</option>
                    {tailles.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>

                  {/* Modèles en images */}
                  <div className="flex space-x-2 overflow-x-auto">
                    {modeles.map((m) => (
                      <button
                        key={m.id}
                        type="button"
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
          </div>
        ))} 

      </div>


     {/* formulaire */}
      <div className="mt-10 p-5 border border-purple">


      {/* section formulaire */}
       <form 
          // onSubmit={handleSubmit} 
           onSubmit={handleSubmit}
          className="mt-5">


      {/* Formulaire récapitulatif */}

        {(!choix.tailles.every(Boolean) || !choix.modeles.every(Boolean)) && (
      <p className="text-red-600 font-semibold bg-red-100 text-center p-2">
        ⚠️ Il faut que vous choisissiez les tailles et les modèles
      </p>
    )}

      {choix.quantite > 0 && (
        <div className="mt-2 p-4 border border-purple rounded bg-white shadow">
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

          <input type="hidden" name="Résumé de commande" value="2 pièces, 57.900 dt + 7dt livraison"  required/>
          <input type="hidden" name="Pièce 1" value="Taille : non choisie, Modèle : non choisi"  required/>
          <input type="hidden" name="Pièce 2" value="Taille : non choisie, Modèle : non choisi"  required/>

         <input type="text" name="nom" id="nom" placeholder="Nom" className="p-4 border border-purple w-full" required/>
         <input type="text" name="prenom" id="prenom" placeholder="Prénom" className="p-4 border border-purple w-full" required/>
        </div>
         {/* <input type="tel" name="tel" id="tel" placeholder="Numéro de Tel" className="mt-4 p-4 border border-purple w-full" required/> */}
         <input 
          type="tel" 
          name="tel" 
          id="tel" 
          placeholder="Numéro de Tel" 
          className="mt-4 p-4 border border-purple w-full" 
          pattern="^(?:\\+216|00216)?[0-9]{8}$" 
          title="Veuillez entrer un numéro tunisien valide (8 chiffres, avec ou sans indicatif +216)" 
          required
        />



         <input type="text" name="addresse" id="addresse" placeholder="Addresse de livraison" className="mt-4 p-4 border border-purple w-full" required/>
         <input type="email" name="email" id="email" placeholder="Email (optionnel)" className="mt-4 p-4 border border-purple w-full"/>

         <textarea rows={4} name="message" id="message" type="text" placeholder="Message..." className="mt-4 p-4 border border-purple w-full" required/>
         {state.succeeded && (
           <p className="text-xs mt-2 text-center text-green-700 bg-green-100 py-2">Merci pour votre confiance! on vous contactera pour confirmer votre commande</p>
          )}
       <button 
       type="submit"
       className="p-5 w-full max-sm:p-2 mt-5 flex items-center justify-center gap-4 bg-gradient-to-r from-purple to-saumon cursor-pointer text-white text-center text-lg font-semibold">
         {state.submitting ? "Envoi de Votre commande..." : "Je valide ma commande"}
        <TbHandClick className="size-8 text-white"/>
       </button>
       
       </form>

      </div>
    
    </div>
  )
}

export default Formulaire;
