import model3 from "./assets/model3.png";
import model4 from "./assets/model4.png";
import bww1 from "./assets/bw1.png";
import bww2 from "./assets/bw2.png";
import bww3 from "./assets/bw3.png";
import bww0 from "./assets/bw0.png";


export default function About() {
  return (
<div>
   
   <div>
     
     <div className="absolute top-1090 sm:absolute sm:top-660 left-5 text-white">
        <h1 className="font-serif italic font-extrabold sm:text-5xl">DRESS BEYOND THE TRENDS</h1>
        <p className="hidden lg:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eveniet porro fugiat esse natus? Sunt ad consectetur, culpa aperiam ullam itaque odio fugit quasi porro nesciunt dolore facere voluptates nihil aliquam vero, nemo animi magnam quidem. Qui, voluptatum distinctio quaerat assumenda eveniet amet sapiente hic at nihil animi delectus architecto a laboriosam eum alias laborum quas aperiam impedit! Ipsa temporibus, hic quibusdam quos aliquid totam tempora natus facilis eaque placeat ullam exercitationem non, ut praesentium ratione culpa unde! Excepturi explicabo voluptas aspernatur sapiente unde numquam, amet illo, minima quasi reiciendis iste vero dolor fugit molestias quam earum impedit iusto voluptatem. Animi corporis numquam maxime voluptatibus dicta error est obcaecati recusandae, explicabo tempore consequatur eos pariatur excepturi cum sed deserunt, exercitationem, quos quia consectetur officiis optio voluptatum. Explicabo, ab! Mollitia exercitationem fugiat, dolore beatae excepturi harum sit tempora illo nulla velit consectetur saepe amet ad molestias aliquid, eos a repellendus assumenda asperiores. Odit perferendis necessitatibus praesentium debitis sunt vel nemo sequi ex, minus quod natus officiis impedit beatae ad veniam error maiores, nihil dignissimos doloribus asperiores laborum! Cum iste adipisci quod dignissimos rem velit vel laboriosam.</p>
     </div>

     <div>
        <img src={model3} alt="image" />
     </div>

   </div>

<div className="flex justify-center">
   <div className="p-15">
       <h1 className="text-2xl italic">REAL EXPERIANCES</h1>
       <h1 className="text-3xl font-medium">Honest Impressions</h1>
   </div>       
</div>

{/* mm */}

   <div className="flex flex-col justify-center sm:flex-row sm:gap-5">
    <img className="md:h-60"
     src={bww3} alt="" />

     <img className="md:h-110"
     src={model4} alt="" />

     <img className="md:h-60 md:gap-5"
     src={bww1} alt="" />

     <img className="md:h-60 md:gap-5"
     src={bww2} alt="" />

     <img className="md:h-60"
     src={bww0} alt="" />

</div>

<div className="ml-12 flex w-80 flex-col md:absolute md:left-165 md:top-825 md:ml-0">
   
    <div className="flex justify-center">
    <p className="text-[13px]">Abolutely love these pieces The material feels premium the design is beautiful  and they'so easy to style fro any occation</p>
    </div>

    <div className="mt-5 flex">  
      <div>
         <img className="h-15" 
         src={model4} alt="model" />
      </div>
      
      <div className="ml-3 mt-4">
        <p>sopia Bennett</p>
        <span><i className="fa-solid fa-star"></i></span>
        <span><i className="fa-solid fa-star"></i></span>
        <span><i className="fa-solid fa-star"></i></span>
        <span><i className="fa-solid fa-star"></i></span>
        <span><i className="fa-solid fa-star"></i></span>
        <span>4.9/5</span>
      </div>
    </div>

   <div className="flex flex-row justify-between mt-5">
    <div className="">
      <button className="hover:text-red-500 border-2 w-10 mr-0.5"><i className="fa-solid fa-arrow-left"></i></button>
      <button className="hover:text-red-500 border-2 w-10 ml-0.5"  ><i className="fa-solid fa-arrow-right"></i></button>
    </div>

   <div>
      <p>24/9</p>
   </div>   
   </div>

</div>

</div>
  )
}
