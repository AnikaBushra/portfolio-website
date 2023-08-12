import { BsFacebook } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import './Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (

        <div className="relative w-full">
            <div className='banner-img '>
                <img src='https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?w=740&t=st=1688398356~exp=1688398956~hmac=e3e54f9a2302554327d98db7c14470e425f265329c19cd89af4877f1e987e02f' alt="" className="w-full h-[600px] rounded-xl" />
            </div>
            <div className="absolute w-full  left-4 top-4">
                <Navbar></Navbar>
            </div>
            <div className="absolute  w-full  top-1/3 text-white  text-center tracking-widest">
                <div className="text-4xl">
                    <h1>Hi, I am <span>ANIKA BUSHRA</span></h1>
                    <h2 className="text-5xl font-bold py-4 tracking-widest">Front End Developer</h2>
                </div>
                <p className="mx-auto w-1/2 text-center py-4">Welcome to my portfolio website! I am thrilled to have you here. Take a moment to explore my work. From stunning designs to captivating projects, I invite you to witness my passion come to life. Feel free to contact me with any questions or opportunities.</p>
                <div className="text-2xl flex justify-center my-6">
                    <Link to="https://github.com/"><AiFillGithub></AiFillGithub></Link>
                    <Link to="https://www.linkedin.com/in/anika-bushra-892a60226/"><TfiLinkedin className="mx-6"></TfiLinkedin></Link>
                    <Link><BsFacebook></BsFacebook></Link>

                </div>

            </div>

        </div>

    );
};

export default Banner;