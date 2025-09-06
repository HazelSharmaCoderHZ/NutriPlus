"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#070a30] to-[#000502] via-[#12064f] text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        
        <div className="p-[2px] rounded-bl-[80px] rounded-tr-[80px] bg-gradient-to-r from-black to-yello2-300 mr-10">
  <div className="flex card bg-white/20 hover:bg-white/30 shadow justify-center rounded-bl-[78px] rounded-tr-[78px]">
    <img
      src="\author2.png"
      className="w-60 h-65 transition-transform"
    />
  </div>
</div>


        <div className="space-y-6 text-left">
          <h1 className="text-4xl typewriter sm:text-5xl font-bold text-white">
            About the Author
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
           <br></br> Hi 👋 I’m <span className="text-yellow-400 font-semibold">Hazel Sharma</span>, 
            <br></br>IT Student | Aspiring technologist | Lifelong Learner <br></br> <br></br>
           Sophomore at VIT Vellore, exploring my place in tech. Passionate about building, learning, and contributing to innovative teams that make a difference. 
          </p>

          <p className="text-lg text-gray-200">
            Visit my work 👉{" "}
            <a
              href="https://preview--hazel-sharma-portfolio.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline hover:text-yellow-400"
            >
              hazel-sharma-portfolio
            </a>
          </p> <br></br>
          
          <button
            onClick={() => router.back()}
            className="mt-4 px-6 py-2 bg-white/10 border hover:bg-cyan-600 text-white rounded-lg shadow-md transition"
          >
            ← Go Back
          </button>
        </div>

        
        
      </div>
    </main>
  );
}
