import { AiOutlineLaptop } from "react-icons/ai";

import Skills from "./Skills";

export default function Academic() {
  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <h2 className="flex justify-center items-center gap-5 rounded-full h-10 text-2xl bg-vingo/20 w-72 text-vingo"> <AiOutlineLaptop /> Skills • Academics</h2>
      </div>
      <div className="grid place-items-center h-full text-white mt-32">
        <div className="grid gap-10 md:gap-20 items-center justify-center md:grid-cols-2">
          <div className="justify-self-center">
            <Skills />
          </div>
          <div className="text-center md:text-left max-w-sm">
            <ol className="relative border-l border-vingo">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-vingo rounded-full mt-1.5 -left-1.5 border border-vingo"></div>
                <h3 className="text-lg font-semibold text-vingo ">Sharada Gyanpeeth International School</h3>
                <time className="mb-1 text-sm font-normal leading-none text-vingo/60">August 2018</time>
                <p className="mb-4 text-base font-normal text-white/70">ICSE - Secondary School</p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-vingo rounded-full mt-1.5 -left-1.5 border border-vingo"></div>
                <h3 className="text-lg font-semibold text-vingo ">Viva College of Diploma Engineering and Technology</h3>
                <time className="mb-1 text-sm font-normal leading-none text-vingo/60">August 2021</time>
                <p className="text-base font-norma text-white/70">Diploma in Computer Engineering</p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-vingo rounded-full mt-1.5 -left-1.5 border border-vingo"></div>
                <h3 className="text-lg font-semibold text-vingo ">Universal College of Engineering</h3>
                <time className="mb-1 text-sm font-normal leading-none text-vingo/60">August 2024</time>
                <p className="text-base font-normal text-white/70">Bachelor in Artificial Intelligence & Machine learning with honors in Cybersecurity
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
