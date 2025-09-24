'use client';
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="top-0 w-full z-20">
        <nav className="flex flex-col dark:bg-violet-100 sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 py-3 gap-3 sm:gap-0">
          
          {/* Left: Logo + Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xl font-extrabold text-green-500 hover:text-green-400 hover:scale-105 transition text-center"
            >
              <span className="font-extrabold text-4xl bg-gradient-to-r from-[#8a58ce] to-[#00CAFF] bg-clip-text text-transparent">
                +
              </span>
              NutriPLUS
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Nav Links */}
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-10 text-sm sm:text-base font-semibold items-center">
            {/* Instead of routing to /about, scroll to section */}
            <a
              href="#about"
              className="hover:text-green-400 dark:text-black button bg-white/10 rounded-2xl border px-6 py-1 text-black font-bold transition hover:scale-105 duration-300"
            >
              About us
            </a>
            <Link
              href="#contact"
              className="hover:text-green-400 button font-bold transition dark:text-black text-black duration-300 bg-white/10 rounded-2xl border px-6 py-1 shadow-sm hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="#services"
              className="hover:text-green-400 button bg-white/10 dark:text-black rounded-2xl border px-6 py-1 text-black font-bold transition hover:scale-105 duration-300"
            >
              Services
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col overflow-x-hidden md:flex-row items-center md:items-start text-center md:text-left justify-center gap-x-28 bg-blue dark:bg-violet-100 px-6 sm:px-12">
        <div className="flex flex-col flex-grow max-w-3xl">
          <h1 className="mt-11 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#8a58ce] to-[#00CAFF] bg-clip-text text-transparent text-center md:text-left">
            YOUR HEALTH IS OUR{" "}
            <br />
            <span className="text-[#00CAFF] text-5xl sm:text-7xl">
              {"PRIORITY".split("").map((letter, i) => (
                <span key={i} className="hover:opacity-0 inline-block">
                  {letter}
                </span>
              ))}
            </span>
            .
          </h1>

          <br />
          <br />
          <p className="text-white text-left mb-10 dark:text-black text-[1.2rem] sm:text-[1.4rem]">
            Personalized diets, continuous monitoring, and intelligent food
            recommendations. Take control of your health journey today!
          </p>

          <Link href="/auth/signup">
            <button className="w-full sm:w-1/4 mx-auto sm:mx-0 block animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Get started</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* DNA */}
        <div className="dna hidden mr-12 items-start justify-left md:block max-w-[320px] mt-5 hover:opacity-70">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="link">
              <div></div>
              <div></div>
            </div>
          ))}
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-20 bg-blue dark:bg-violet-300 dark:from-violet-500 dark:to-pink-500">
        <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-6">
          About Us<span className="text-cyan-500">.</span>
        </h2>


        <p className="max-w-3xl text-lg text-white font-bold dark:text-gray-800 leading-relaxed text-center">
                  <div className="border-t border-purple  mt-5 mb-5"></div>At <span className="text-cyan-500">NutriPlus</span>, we are dedicated to empowering you to take control of your health journey. Our platform offers personalized diet plans, continuous monitoring, and intelligent food recommendations, all designed to help you achieve your wellness goals.Whether a beginner, homemaker, or health enthusiast, NutriPlus offers a seamless, accessible experience for everyone on their wellness journey. Your health is our priority, and we are here to support you every step of the way.
        </p>
      </section>
      <section
  id="services"
  className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-200 dark:to-gray-100"
>
  <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-900 mb-12">
    Our Services
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
    {/* Know Your Food */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">🥗 Know Your Food</h3>
      <p className="text-gray-600 text-sm">
        Instantly analyze the nutritional value of any food item to make
        informed choices for a healthier lifestyle.
      </p>
    </div>

    {/* Nutrition Calendar */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">📅 Nutrition Calendar</h3>
      <p className="text-gray-600 text-sm">
        Track your monthly nutrition intake and visualize your eating patterns
        to support holistic wellness.
      </p>
    </div>

    {/* Recipes */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">👩‍🍳 Recipes</h3>
      <p className="text-gray-600 text-sm">
        Discover healthy, easy-to-cook recipes with a complete nutritional
        breakdown, personalized to your preferences.
      </p>
    </div>

    {/* Water Checker */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">💧 Water Checker</h3>
      <p className="text-gray-600 text-sm">
        Stay hydrated by monitoring your daily water intake and receiving timely
        reminders.
      </p>
    </div>

    {/* BMI Calculator */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">⚖️ BMI Calculator</h3>
      <p className="text-gray-600 text-sm">
        Quickly calculate your Body Mass Index and get personalized insights for
        your fitness journey.
      </p>
    </div>

    {/* Sleep Tracker */}
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-xl border-cyan-500 hover:shadow-2xl transition hover:scale-105">
      <h3 className="text-xl font-bold mb-3">😴 Sleep Tracker</h3>
      <p className="text-gray-600 text-sm">
        Monitor your sleep patterns and log daily rest data to improve sleep
        quality and overall well-being.
      </p>
    </div>

    {/* Sleep Calendar */}
    <div className="p-6 bg-white rounded-2xl border border-xl border-cyan-500 shadow-lg hover:shadow-2xl transition hover:scale-105 sm:col-span-2 lg:col-span-3">
      <h3 className="text-xl font-bold mb-3">🌙 Sleep Calendar</h3>
      <p className="text-gray-600 text-sm">
        Visualize your sleep trends over time and identify opportunities to
        build better sleep habits.
      </p>
    </div>
  </div>
</section>
<section  className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-20 bg-blue dark:bg-violet-300 dark:from-violet-500 dark:to-pink-500">
  <footer className="mb-3">
  <div className="border-t border-gray-500  mt-20"></div>

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
  </div> </footer>
</section>

    </>
  );
}
