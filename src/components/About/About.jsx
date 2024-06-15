import "./About.css"
import React from 'react'
import Tile from './Tile'
import { CiGlobe } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { ImBooks } from "react-icons/im";


  const About = () => {
    return (
        <div className="aboutContainer flex flex-col" id="About">
            <h5 className='font-semibold text-5xl mt-36'>About</h5>
            <div className="aboutContainer flex flex-col items-center">
            <div className=" flex flex-col items-center w-1/2 ">
                <p className=' text-lg  font-sans font-medium text-left mb-8'> 
                Hey there! I'm Manjari Rathore, a first-year Computer Science undergraduate at Scaler School of Technology based in Bangalore, India. I have a passion for coding and love exploring the endless possibilities it offers. I like tinkering with algorithms and solving challenging problems.
                Outside coding, I also like reading and traveling.
                </p>
            </div>
            <div className="interestContainer flex flex-col  items-center">
                <h5 className='text-5xl mb-10'>Interests</h5>
                <div className='interests-container grid grid-cols-2 gap-5 '>
                    <Tile skill='Development' icon={<CiGlobe size={45}/>} />
                    <Tile skill=' Machine Learning ' icon={<FaDatabase size={45} />}/>
                    <Tile skill='Algorithms' icon={<IoNewspaper size={45}/>}/>
                   <Tile skill='Reading' icon={<ImBooks size={45} />}/>
                </div>
            </div>
            </div>
        </div>
    )
  }


export default About;