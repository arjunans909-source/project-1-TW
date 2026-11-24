import React from 'react'

export default function Footer() {
  return (
<div className='bg-amber-900 text-emerald-50 mt-16'>

<div className='flex justify-center'>
    <h1 className='text-[100px] font-bold md:text-[390px]'>SOLENE</h1>
</div>    

<div className='text-[15px] ml-0.5 mr-0.5 flex-col items-center flex md:flex-row md:justify-between md:text-2xl md:m-5'>
    <p>WEAR CONFIDENCE NOT JUST STYLE</p>
    <p>JOIN OUR STYLE COMMUNITY AND GET 30%</p>
</div>

<div className='mt-10 md:mt-30 md:flex md:justify-around'>

   <div className='flex flex-col gap-5 items-center md:flex md:flex-row md:gap-30'>
       
    <div>
       <p className='font-bold'>SUPPORT</p>
       <p>CONTACT US</p>
       <p>ABOUT US</p>
       <p>SIZE GUIDE</p>
       <p>RETURN POLICY</p>
     </div>

     <div>
       <p className='font-bold'>SHOP</p>
       <p>MEN'S SHOPPPING</p>
       <p>KIDS SHOPPING</p>
       <p>WOMEN'S SHOPPPING</p>
       <p>DISCOUNT</p>
     </div>

     <div>
       <p className='font-bold'>COMPANY</p>
       <p>ABOUT</p>
       <p>BLOG</p>
       <p>AFFILIATE</p>
       <p>LOGIN</p>
     </div>

   </div>

   <div className='flex flex-col items-center md:block'>
       <p>
        <i className="hover:text-amber-950 m-2 md:p-5 fa-brands fa-google"></i>
        <i class="hover:text-amber-950 m-2 md:p-5 fa-brands fa-facebook"></i>
        <i class="hover:text-amber-950 m-2 md:p-5 fa-brands fa-instagram"></i>
        <i class="hover:text-amber-950 m-2 md:p-5 fa-brands fa-youtube"></i>
       </p>
       <p className='mt-5 md:ml-6  font-bold'>SOCIAL MEDIA</p>
   </div>

</div>

    <div className='p-20 text-[13px] text-center flex justify-center font-bold md:text-[15px]'>
    <p>COPYRIGHT @ 2026 ALL RIGHTS RESERVED DESIGNED BY ARJUN</p>
   </div>

</div>
  )
}
