import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { TbBrandJavascript } from 'react-icons/tb';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandBootstrap } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';

const MySkills = () => {
    return (
        <div className='py-6 bg-black text-gray-300 '>
            <div className="text-center flex flex-col   items-center">
                <h1 className="text-3xl font-bold">My Skills</h1>
                <div className='grid grid-cols-1 md:grid-cols-4   md:gap-10 w-2/3 mx-4'>
                    <div className='border-2 h-52 w-52 my-5 '>
                        <AiOutlineHtml5 className='w-full h-44 m-auto'></AiOutlineHtml5>
                        <h3 className='text-center font-bold'>HTML</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <BiLogoCss3 className='w-full h-44 m-auto'></BiLogoCss3>
                        <h3 className='text-center font-bold'>CSS</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <TbBrandJavascript className='w-full h-44 m-auto'></TbBrandJavascript>
                        <h3 className='text-center font-bold'>JAVASCRIPT</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <BiLogoTailwindCss className='w-full h-44 m-auto'></BiLogoTailwindCss>
                        <h3 className='text-center font-bold'>TAILWIND</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <TbBrandBootstrap className='w-full h-44 m-auto'></TbBrandBootstrap>
                        <h3 className='text-center font-bold'>BOOTSTRAP</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <FaReact className='w-full h-44 m-auto'></FaReact>
                        <h3 className='text-center font-bold'>REACT</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <FaNodeJs className='w-full h-44 m-auto p-4'></FaNodeJs>
                        <h3 className='text-center font-bold'>NODE JS</h3>
                    </div>
                    <div className='border-2 h-52 w-52 my-5'>
                        <SiExpress className='w-full h-44 m-auto p-4'></SiExpress>
                        <h3 className='text-center font-bold'>EXPRESS JS</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;