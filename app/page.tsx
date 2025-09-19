'use client';
import Link from "next/link";


export default function Navbar() {
  return (
    <>
    
      {/* Header / Navbar */}
      <header className="top-0  w-full z-20">
        
          <nav className="flex  justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 py-3">
            
            {/* Logo / Brand */}
            <Link 
              href="/" 
              className="text-xl font-extrabold text-green-500 hover:text-green-400 hover:scale-105 transition"
            > <span className="font-extrabold text-4xl bg-gradient-to-r from-[#8a58ce] to-[#00CAFF] bg-clip-text text-transparent">+</span>
              NutriPLUS
            </Link>

            {/* Nav Links */}
            <div className="flex space-x-6 sm:space-x-10 text-sm sm:text-base font-semibold">
              
              <Link href="/services" className="hover:text-green-400 button bg-white/10 rounded-2xl border border-2xl px-6 py-1 text-black font-bold transition hover:scale-105 duration-300">
                About us
              </Link>
              <Link href="/contact" className="hover:text-green-400 button font-bold transition  text-black duration-300 bg-white/10 rounded-2xl border border-2xl px-6 py-1 text-black shadow-sm hover:scale-105">
                Contact Us
              </Link>
            </div>
          </nav>
        
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col overflow-x-hidden  md:flex-row items-center md:items-start text-center   md:text-left justify-center gap-x-28  bg-blue px-6 sm:px-12">
         <div className="flex flex-col flex-grow max-w-3xl ">
        <h1 className="text-5x mt-8 sm:text-6xl font-bold  bg-gradient-to-r from-[#8a58ce] to-[#00CAFF] bg-clip-text text-transparent text-center md:text-left">
          YOUR HEALTH IS OUR{" "}<br></br>
          <span className="text-[#00CAFF] sm:text-7xl">
            {"PRIORITY".split("").map((letter, i) => (
              <span key={i} className="hover:opacity-0 inline-block">
                {letter}
              </span>
            ))}
          </span>
          .
        </h1> 
        
<br></br><br></br>
        <p className="text-white text-left mb-10 text-[1.4rem] ">Personalized diets, continuous monitoring, and intelligent food recommendations.
Take control of your health journey today!</p>
<Link href="/auth/signup">
        <button className="w-full sm:w-1/4   
      mx-auto sm:mx-0   
      block animated-button ">
  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">Get started</span>
  <span className="circle"></span>
  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>
</Link>

  
  

</div>
        
         
    <div className="dna hidden mr-12 items-start justify-left md:block max-w-[320px] mt-5 hover:opacity-70 ">
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      <div className="link">
        <div></div>
        <div></div>
      </div>
      
      
      
    </div>
    
      </main>
    </>
  );
}
