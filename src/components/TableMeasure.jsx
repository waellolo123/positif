import Text from "./Text";
import pantalon from "../assets/pantalon_jogging.jpg";
import capuche from "../assets/capuche_jogging.jpg";



const TableMeasure = () => {
  return (
    <div className="">
      <Text title={"Jogging mesures"} subtitle={"Les mesures détaillés du jogging"}/>
      <div className="mt-5 flex gap-5 max-lg:flex-col-reverse">
      {/* section text */}
      <div className="flex-1">
        <p className="text-gray">Les tableaux ci-dessus présentent les dimensions précises des vêtements pour enfants selon leur tranche d’âge, afin de faciliter le choix des tailles lors de la commande. Le premier tableau concerne le pantalon, avec deux mesures clés : A (la largeur à la taille) et B (la longueur totale du vêtement). Par exemple, pour un enfant de 6 mois, le pantalon mesure 25cm de large et 47cm de long, tandis que pour 6 ans, les dimensions passent à 33cm de largeur et 68cm de longueur. Le second tableau concerne la capuche (sweat à capuche), avec également les mesures A (largeur du buste) et B (longueur du vêtement). On y observe une progression adaptée à la croissance de l’enfant, allant de 28cm × 33,5cm pour 6 mois jusqu’à 36,5cm × 44,5cm pour 6 ans. Ces données permettent d’assurer un ajustement confortable et adapté à chaque âge.</p>
      </div>
      {/* section images */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
       <img src={capuche} alt="" className="w-[500px] max-sm:w-[400px] "/>
       <img src={pantalon} alt="" className="w-[500px] max-sm:w-[400px] "/>
      </div>
      </div>
    </div>
  )
}

export default TableMeasure;

