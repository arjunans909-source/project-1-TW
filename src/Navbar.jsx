function Navbar() {
  return (
    <div className="flex justify-center items-center gap-8 h-15 sticky top-0">

      <nav className="flex gap-3 p-1 bg-emerald-50 rounded-full pl-3 pr-3 sm:gap-6 sm:pl-5 sm:pr-5 md:gap-8 ">
        <a href="#">MORE<i className="fa-solid fa-chevron-down"></i></a>
        <a href="#">HOME</a>
        <a href="#">PRODUCTS</a>
        <a href="#">CONTACT US</a>
      </nav>

      <div className="hidden gap-4 md:flex bg-emerald-50 rounded-full p-1 pl-5 pr-5">
        <a href="#"><i className="fa-solid fa-magnifying-glass" /></a>
        <a href="#"><i className="fa-solid fa-user" /></a>
        <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
      </div>
    </div>
  );
}

export default Navbar;