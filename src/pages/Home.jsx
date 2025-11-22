import Formulaire from "../components/Formulaire";
import ImageDetails from "../components/ImageDetails";
import Text from "../components/Text";
import backgr from "/back.png";
import child1 from "../assets/child1.jpeg";
import child2 from "../assets/child2.jpeg";
import child3 from "../assets/child3.jpeg";
import child4 from "../assets/child4.jpeg";

const Home = () => {
  return (
    <div className="px-2 lg:px-10 md:px-20 mx-auto">
     <img src={backgr} className="opacity-20 -z-1 absolute top-0 left-0 right-0 w-full h-full"/>
     <Text title={"Joggings pour enfants"} subtitle={"très bonne qualité, toutes les tailles"}/>

     {/* formulaire et image containers */}
     <div className=" mt-5 flex max-sm:flex-col-reverse gap-5">
      <Formulaire/>
      <ImageDetails />
     </div>
     
     {/* section 3 */}
     <div className="">
      <Text title={"Confortables et Pratiques"} subtitle={"toute une gamme de qualité supérieure"}/>
      <p className="mt-2 text-gray w-[80%] max-sm:w-full">
       Nos joggings pour enfants allient confort, résistance et style. Confectionnés dans des tissus doux et respirants, ils offrent une liberté de mouvement idéale pour le quotidien, l’école ou les activités sportives. Grâce à des finitions solides et des matières durables, ils résistent aux lavages fréquents tout en gardant leurs couleurs éclatantes. Pratiques et modernes, nos joggings assurent aux enfants un look tendance et une aisance incomparable, jour après jour. 
      </p>
      <div className="flex gap-4 items-center justify-center mt-10 flex-wrap">
       <img src={child1} alt="" className="w-[300px] h-[400px] object-cover"/> 
       <img src={child2} alt="" className="w-[300px] h-[400px] object-cover"/> 
       <img src={child3} alt="" className="w-[300px] h-[400px] object-cover"/> 
       <img src={child4} alt="" className="w-[300px] h-[400px] object-cover"/> 
      </div>
     </div>

    </div>
  )
}

export default Home;
