import "./Home.css"
import React from 'react';
import Typewriter from '../Typewriter';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Pic from "./Credit_ 𝐀zα࣪z𝗲̫̄l.jpeg";
function Home() {
  return (
    <div className="homeContainer flex gap-5 flex-col" id="Home">
      <div className='home-container flex flex-col justify-center items-center'>
        <img src={Pic} alt="" className="rounded-[50%] h-[400px] w-auto m-10" />
        <h1 className=' font-semibold text-6xl' >Manjari Rathore</h1>
      </div>
      <Typewriter
        text={[
          "Coder", "Student", "AI Enthusiast",
        ]}
        typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
      />
      <div className='socials flex gap-5 m-2' >
        <a href="https://github.com/ManjariRathore" target='_blank' > <FaGithub className="h-[30px] w-auto" /> </a>
        <a href="https://www.linkedin.com/in/manjari-rathore-903360286/" target='_blank' ><FaLinkedin className="h-[30px] w-auto" /> </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manjarirathore1512@gmail.com" target='_blank' > <BiLogoGmail className="h-[30px] w-auto" />
        </a>
      </div>

    </div>

  );
}

export default Home;