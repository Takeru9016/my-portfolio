/* eslint-disable react/no-unescaped-entities */
import { MdOutlineDownloadForOffline, MdOutlineArrowCircleRight } from "react-icons/md";

import { Avatar } from "@/assets";

export default function About() {
  return (
    <div className="grid place-items-center h-screen text-white">
      <div className="grid gap-10 items-center md:grid-cols-2">
        <div className="justify-self-center">
          <Avatar />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Sahil Jadhav 👋</h2>

          <p className="mb-4 font-light text-base text-white/50">Front-end Developer | Back-end Developer | UI Designer</p>

          <div className="text-justify max-w-sm">
            <ul className="text-white leading-relaxed  list-disc mb-4">
              <li>Experienced full-stack developer and UI designer with over 3 years of industry experience.</li>
              <br className="md:hidden" />
              <li>Passionate about creating high-quality and performant software that delights users and meets business goals.</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <button className="px-4 py-2 bg-vingo/10 rounded-full text-lg text-vingo mr-4 mb-4 md:mb-0 w-full flex justify-center items-center gap-3">
              Download CV
              <MdOutlineDownloadForOffline className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-vingo/10 rounded-full text-lg text-vingo mr-4 mb-4 md:mb-0 w-full flex justify-center items-center gap-3">
              Know more
              <MdOutlineArrowCircleRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
