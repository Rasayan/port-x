import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDebian } from "react-icons/di";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <main className="w-full h-screen flex flex-row justify-center items-center gap-4">
        <div className="w-1/3 h-4/5 hidden md:flex flex-col justify-center items-end ">
          <Image
            src="/pic.jpeg"
            width={500}
            height={900}
            alt="Text"
            className="rounded-lg"
          />
        </div>
        <div className="w-4/5 h-4/5 md:w-1/3 md:h-4/5 flex flex-col justify-center items-start">
          <h1 className="font-light text-5xl md:text-6xl font-mont">Rasayan Chakraborty</h1>

          <div className="flex flex-col w-fit h-fit justify-center items-start font-mont my-8 gap-2">
            <p className="font-normal text-xl md:text-2xl">Full-Stack Web Developer</p>
            <p className="font-normal text-xl md:text-2xl">Security Enthusiast</p>
            <p className="font-normal text-xl md:text-2xl">UI Design</p>
          </div>

          <div className="w-fit h-fit flex justify-start items-center gap-6">
            <a
              href="#"
              className="bg-white text-black border-2 border-white py-2 px-10 font-medium rounded-lg tracking-wide"
            >
              About
            </a>

            <a
              href="#"
              className="text-white border-2 border-white py-2 px-10 font-medium rounded-lg tracking-wide"
            >
              Contact
            </a>
          </div>
        </div>
      </main>

      <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
        <h2 className="font-light text-2xl md:text-4xl font-mont">About Me</h2>

        <p className="w-[99%] md:w-1/2 text-lg md:text-xl text-center">
          I am Rasayan Chakraborty, a final year student pursuing Computer
          Applications. I am a{" "}
          <span className="text-violet-400">Full-Stack web developer</span> and
          a part time freelancer, also, I have a keen interest in AI algorithms
          and decentralised computing. I am a{" "}
          <span className="text-red-500">security enthusiast</span> and I do see
          myself being a formidable security engineer in the upcoming years. You
          might think it is too much and that, but as a person with genuine
          interest in coding and mathematics, it is quite amazing. The thought
          of making something new always keeps me awake!
        </p>

        <a
          href="#"
          className="bg-white text-black border-2 border-white py-2 px-10 font-medium rounded-full tracking-wide hover:bg-gray-200 hover:border-gray-200 duration-100"
        >
          Connect
        </a>
      </div>

      <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-8">
        <h2 className="font-light text-2xl md:text-4xl font-mont">Strange things I like!</h2>

        <div className="flex justify-center items-center gap-6">
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <FaReact className="text-blue-400 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-blue-400 hidden md:inline">ReactJS</h4>
          </div>
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <SiNextdotjs className="text-white text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-white hidden md:inline">NextJS</h4>
          </div>
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <RiTailwindCssFill className="text-cyan-500 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-cyan-500 hidden md:inline">Tailwind</h4>
          </div> 
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <IoLogoJavascript className="text-yellow-500 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-yellow-500 hidden md:inline">JavaScript</h4>
          </div> 
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <DiDatabase className="text-teal-400 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-teal-400 hidden md:inline">DBMS</h4>
          </div>          
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <FaGolang className="text-blue-300 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-blue-300 hidden md:inline">Golang</h4>
          </div> 
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <FaPython className="text-amber-400 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-amber-400 hidden md:inline">Python</h4>
          </div>  
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <SiPytorch className="text-red-500 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-red-500 hidden md:inline">Pytorch</h4>
          </div> 
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <SiNumpy className="text-green-400 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-green-400 hidden md:inline">Numpy</h4>
          </div> 
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <DiDebian className="text-red-700 text-4xl md:text-5xl"/>
            <h4 className="text-2xl font-mont font-bold text-red-700 hidden md:inline">Debian</h4>
          </div>             
        </div>
        <p className="tracking-wide w-[90%] md:w-[1/2] text-center font-mont">And obviously <span className="font-bold">HTML</span> & <span className="font-bold">CSS</span>, can't forget the 2 greats!</p>
      </div>

      <div className="w-full h-[70vh] flex flex-col justify-center items-center gap-6">
        <h2 className="font-light text-2xl md:text-4xl font-mont">Experience</h2>

        <ul className="w-[95%] md:w-[85%] h-fit flex flex-col justify-center items-center gap-3">
          <li className="flex justify-around w-full border-b border-gray-400 py-2">
            <h4 className="text-md md:text-lg font-medium w-[25%] text-center">COMPANY</h4>
            <p className="w-[50%] text-center">ROLE</p>
            <p className="w-[25%] text-center">PERIOD</p>
          </li>
          <li className="flex justify-around w-full border-b border-gray-400 py-2">
            <h4 className="text-md md:text-lg font-medium w-[25%] text-center">
              <a href="https://aiesec.org/" className="hover:text-blue-400 underline duration-100">AIESEC</a>
            </h4>
            <p className="w-[45%] md:w-[50%] text-center">Manager for Business & Development</p>
            <p className="w-[25%] text-center">Sep,2022 - Feb,2023</p>
          </li>
          <li className="flex justify-around w-full border-b border-gray-400 py-2">
            <h4 className="text-md md:text-lg font-medium w-[25%] text-center">
              <a href="https://www.ecotence.com/" className="hover:text-blue-400 underline duration-100">ECOTENCE</a>
            </h4>
            <p className="w-[50%] text-center">Remote Software Developer</p>
            <p className="w-[25%] text-center">Jul,2024 - Oct,2024</p>
          </li>
        </ul>
      </div>

      <div className="w-full h-[70vh] md:h-[80vh] flex flex-col justify-center items-center gap-6">
        <div className="bg-[url('/img/bg1.jpg')] w-[100%] md:w-[70%] h-[70%] md:h-[95%] rounded-md flex justify-center items-center bg-cover">
          <div className="bg-[url('/img/codes.png')] w-[95%] md:w-[90%] h-[80%] md:h-[90%] rounded-md border border-gray-700 bg-cover bg-no-repeat flex justify-center items-center">
            <p className="font-mont text-3xl md:text-4xl font-normal text-center w-full h-full flex justify-center items-center bg-zinc-900/25">
              Let me & my IDE <br />
              solve your problems!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
        <h2 className="font-light text-2xl md:text-4xl font-mont">Connect</h2>

        <div className="w-5/6 h-1/2 flex flex-col md:flex-row justify-around items-center font-mont">
          <div className="w-[97%] md:w-fit h-fit flex flex-col justify-center items-center gap-8 border rounded-lg py-6 px-4">
            <CiMail className="text-6xl text-indigo-400" />

            <p className="text-sm md:text-lg font-medium">
              rasayan.chakraborty.04@gmail.com
            </p>
          </div>

          <div className="w-[97%] md:w-fit h-fit flex flex-col justify-center items-center gap-8 border rounded-lg py-6 px-20">
            <TfiLayoutMediaLeft className="text-6xl text-indigo-400" />

            <div className="w-fit h-fit flex justify-center items-center gap-6">
              <a href="#">
                {" "}
                <FaInstagram className="text-2xl" />
              </a>

              <a href="#">
                {" "}
                <FaGithub className="text-2xl" />
              </a>

              <a href="#">
                {" "}
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
