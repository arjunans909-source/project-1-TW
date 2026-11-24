import sneakers from "./assets/sneakers.png";
import bag from "./assets/handbag.png";
import model2 from "./assets/model2.png";

function Contents() {
  return (
<div className='sm:mt-15  text-amber-900'>
   
<div className='p-10 sm:flex sm:justify-between'>
    <div className='p-10 pl-0 sm:pl-10'>
      <p className='text-2xl'>#DESIGNED</p>
      <p className='text-3xl'>#FOREVERYDAYUSE</p>
    </div>

   <div className='text-right sm:mt-35'>
      <h1 className='text-3xl sm:text-4xl font-serif italic'>Everyday Elegance</h1>
      <h1 className='text-4xl sm:text-5xl font-light'>Contemporary Style</h1>
   </div>
</div>
    
<div className="mt-5 flex flex-col items-center sm:items-start sm:flex-row sm:ml-13">
  <div className="w-fit p-3">
    <div className="flex justify-center sm:block">
        <p className="hidden text-green-900 font-serif md:block"><i className="fa-brands fa-pagelines"></i>SOLENE</p>
      <img className="h-90 w-80 sm:h-90 rounded-lg " src={sneakers} alt="shoe" />
    </div>

    <div className="flex w-80 justify-between">
      <p className="font-bold">SNEAKERS</p>
      <p className="mt-0.5 text-[12px] font-extrabold">#PEAK</p>
    </div>
  </div>

  <div className="mt-7">
    <p className="text-[15px] text-center w-80 sm:mt-0 sm:text-right sm:ml-10 sm:w-fit sm:p-5 sm:pt-0 sm:text-wrap">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, excepturi dolorum? Optio dolores cupiditate aspernatur libero in, id beatae aperiam molestiae architecto mollitia reprehenderit animi quis, laborum, amet deserunt nemo? Vel eveniet nulla repellat aliquam odio earum incidunt illo rem maiores. Illum consectetur aliquid doloribus accusamus distinctio asperiores nihil voluptatibus veritatis? Repellat maiores et voluptate vel consectetur ab debitis animi tempore voluptatum architecto officiis, laboriosam, veritatis quasi molestias, modi voluptatem? Ab harum odio sed sequi, asperiores omnis fugit et quia blanditiis voluptatum possimus. Ipsam voluptatibus totam ducimus harum voluptas assumenda recusandae quis, odio voluptatem atque eius ad nobis maiores error, molestiae quisquam officia quam fuga aliquid praesentium, reprehenderit magni placeat laboriosam. Consequuntur nihil dolorem a ex fuga deserunt. Tempore dolor temporibus deserunt voluptas fugiat commodi modi soluta, mollitia quaerat neque saepe obcaecati rem quidem excepturi? Molestias perferendis odit praesentium exercitationem quibusdam laborum fugiat reiciendis, modi placeat nisi doloremque harum inventore culpa consequatur et autem laboriosam pariatur repellat explicabo minus quasi vel tempore sapiente quam. Provident laboriosam voluptates perferendis totam aliquid sequi. Odio, fugiat illo eaque dolor veritatis quidem suscipit reiciendis debitis ex eos ipsa voluptate numquam ad quos est perspiciatis excepturi earum! Enim, ratione vel! Laboriosam velit minima facilis ea inventore nostrum temporibus quas, soluta, recusandae magnam et commodi molestiae nisi, eveniet minus. Est quibusdam dolor aspernatur modi iure dignissimos, voluptatem similique ullam perferendis impedit accusantium. Eligendi deserunt, ipsum nesciunt reiciendis illo repudiandae cumque est quisquam aperiam? Magni doloremque error natus pariatur ipsum enim tenetur hic deserunt, totam nesciunt voluptatem numquam velit qui quidem iure inventore odio doloribus. Laborum rem ea tempore quisquam dicta magnam perspiciatis, eveniet quia consectetur voluptatibus, ab hic assumenda veniam saepe eum voluptates labore molestiae. Nisi enim voluptatum porro ratione officiis aut odit, eveniet commodi asperiores, nobis blanditiis excepturi distinctio ullam rem nulla, doloribus recusandae!
    </p>
  </div>

  
</div>


<div className=" p-10 sm:flex sm:justify-between">

   <div className=" underline ml-4 text-2xl font-bold sm:mt-85 sm:ml-15">
     <h1>LOOK CLOSER <i className="fa-solid fa-arrow-trend-up"></i></h1>
   </div>


   <div className="mt-5 p-3 md:mt-0">
    <p>#2</p>
    <img className="h-80 rounded-lg" 
    src={bag} alt="handbag"/>
    <p className="font-bold">HAND BAG <i className="text-[13px] fa-solid fa-sun"></i></p>
   </div>

   <div className="mt-5 md:mt-0">
    <p>#3</p>
    <img className="h-100 mr-10" 
    src={model2} alt="model" />
    <p className="font-bold">WOOLEN COAT</p>
   </div>

</div>





</div>
  )
}

export default Contents