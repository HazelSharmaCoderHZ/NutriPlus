'use client';
import Link from "next/link";


export default function Navbar() {
  return (
    <>
    
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full z-20">
        <div className="backdrop-blur-md bg-white/20 border-b border-white/80 shadow-lg">
          <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 py-3">
            
            {/* Logo / Brand */}
            <Link 
              href="/" 
              className="text-xl font-extrabold text-green-500 hover:text-green-400 hover:scale-105 transition"
            >
              NutriPLUS+
            </Link>

            {/* Nav Links */}
            <div className="flex space-x-6 sm:space-x-10 text-sm sm:text-base font-semibold">
              <Link href="/services" className="hover:text-green-400 text-black underline font-bold transition hover:scale-105 duration-300">
                About us
              </Link>
              <Link href="/contact" className="hover:text-green-400 font-bold transition underline text-black duration-300 shadow-sm hover:scale-105">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col pt-20 md:flex-row items-center md:items-start text-center   md:text-left justify-between bg-blue px-6 sm:px-12">
         <div className="flex flex-col max-w-3xl ">
        <h1 className="text-5xl sm:text-7xl font-bold  text-cyan-200 text-center md:text-left">
          YOUR HEALTH IS OUR{" "}<br></br>
          <span className="text-cyan-300 sm:text-8xl">
            {"PRIORITY".split("").map((letter, i) => (
              <span key={i} className="hover:opacity-0 inline-block">
                {letter}
              </span>
            ))}
          </span>
          .
        </h1> <br></br><br></br>
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
<br></br><br></br>
        <h1 className="text-white text-left text-1xl mb-10 sm:text-3xl ">Personalized diets, continuous monitoring, and intelligent food recommendations<br></br>
Take control of your health journey today!</h1>
  
  <div className="border-t border-gray-500 mb-2 mt-20"></div>

<p className="text-white font-bold text-2xl mt-2 ">Useful Links</p><br></br>
<div className="grid grid-cols-1 gap-2 text-sm">
    <a href="#connect " className="text-gray-300 hover:text-green-400 underline hover:scale-104">
      Connect with us
    </a>
    <a href="#services" className="text-gray-300 hover:text-green-400 hover:scale-104 underline">
      Our Services
    </a>
    <a href="#FAQs" className="text-gray-300 hover:text-green-400 underline hover:scale-104">
      FAQs
    </a>
  </div>

</div>
        
         
    <div className="dna hidden md:block max-w-[350px] mr-0 lg:mr-12 hover:opacity-70 ">
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
