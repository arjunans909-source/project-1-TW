import swetshirt from "./assets/swetter.png";
import model1 from "./assets/model1.png";

function Hero() {
  return (

  <div>


{/*0*/}
<div className=" mt-10 flex flex-col m-5 sm:flex-row justify-center">

<div className=" h-160 p-3 bg-amber-900 sm:rounded-l-lg sm:h-150 sm:w-130">

    <div className="sm:flex sm:justify-between">


        <div className="m-3 h-fit flex flex-col bg-amber-50">  
          <img className="rounded-lg h-80 m-1 sm:h-30 md:h-50" src={swetshirt} alt="image" />
          <p className="font-serif p-2 pl-3 text-green-900 sm:p-1 sm:pl-2 font-medium"><i className="fa-brands fa-pagelines"></i>SOLENE</p>
        </div>

        <div className="ml-4 text-[10px] sm:text-right text-amber-50 w-fit h-fit">
            <p>128 MARCER ST, NEW YORK</p>
            <p>NY-100127</p>
        </div>
    </div>

    <div className=" mt-8 sm:mt-20 sm:ml-5">
        <h1 className="text-4xl text-amber-50 font-serif italic">Elevate Your Style</h1>
        <h1 className="text-4xl text-amber-50 font-light ">With Purpose</h1>
    </div>

   <div className=" mt-13 flex justify-between sm:mt-30 ml-0">
       <p className="text-amber-50"><i className="fa-brands fa-pagelines"></i>SOLENE</p>
       <p className="text-amber-50">Explore New Arrivals</p>
    </div>

</div>
    

<div className="flex justify-center mt-25 sm:mt-0">
  <img className="h-100  sm:h-150 sm:rounded-r-lg"
    src={model1}
    alt="model"/>
</div>
  
      
</div>
{/*0*/}

    </div>
  );
}

export default Hero;

