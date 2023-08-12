import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { BsFacebook } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ContactMe = () => {
    const form = useRef();
    // service_7mcg4th
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kr0gpto', 'template_hu48t7s', form.current, 'IWh4NxUhv03uj1Cls')
            .then((result) => {
                console.log(result.text);
                Swal.fire('Email send successfully')
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div className='py-6 bg-black text-gray-300'>
            <div className="text-center ">
                <h1 className="text-5xl font-bold ">Contact Me</h1>

            </div>
            <div className='flex  justify-center items-center border-2 w-3/5 h-96 border-gray-300 rounded-lg my-8 mx-auto'>
                <div className='text-2xl'>
                    <h3>+8801959624103</h3>
                    <h3 className='my-6'>anikabushra024@gmail.com</h3>
                    <hr />
                    <div className="text-4xl flex justify-center my-6">
                        <Link to="https://github.com/"><AiFillGithub></AiFillGithub></Link>
                        <Link to="https://www.linkedin.com/in/anika-bushra-892a60226/"><TfiLinkedin className="mx-6"></TfiLinkedin></Link>
                        <Link><BsFacebook></BsFacebook></Link>
                    </div>
                    <hr />
                    <h3 className='text-xl my-2 flex'>You can direcly message here<AiOutlineArrowRight className='mt-2 ms-2'></AiOutlineArrowRight></h3>
                </div>
                <form ref={form} onSubmit={sendEmail} >

                    <div className="hero min-h-screen">
                        <div className="hero-content">
                            <div className="card flex-shrink-0  shadow-2xl">


                                <div className="form-control">

                                    <input type="text" placeholder="Your Name" className="input input-bordered  border-1 border-gray-500 bg-black 
                                    md:w-96 my-2"
                                        name="user_name" />

                                    <input type="text" placeholder="Your Email" className="input input-bordered  border-1 border-gray-500 bg-black md:w-96 my-2"
                                        name="user_email" />

                                    <textarea name="message" className="input input-bordered border-1 border-gray-500  bg-black md:w-96 h-40 my-2"
                                        placeholder='Your Message' />
                                </div>

                                <div className="form-control ">
                                    <button className="btn btn-primary   border-1 border-gray-500 bg-black md:w-96 my-2"><input type="submit" value="Send" /></button>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default ContactMe;