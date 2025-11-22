import Formulaire from "../components/Formulaire";
import ImageDetails from "../components/ImageDetails";
import Text from "../components/Text";
import backgr from "/back.png";

const Home = () => {
  return (
    <div className=" h-[500vh] px-2 lg:px-10 md:px-20 mx-auto">
     <img src={backgr} className="opacity-20 -z-1 absolute top-0 left-0 right-0"/>
     <Text title={"Joggings pour enfants"} subtitle={"très bonne qualité, toutes les tailles"}/>

     {/* formulaire et image containers */}
     <div className=" mt-5 flex max-sm:flex-col-reverse gap-5">
      <Formulaire />
      <ImageDetails />
     </div>
    </div>
  )
}

export default Home;
