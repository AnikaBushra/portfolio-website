import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

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
        <div className='py-6 bg-black'>
            <div className="text-center ">
                <h1 className="text-5xl font-bold text-white ">Contact Me</h1>

            </div>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
                <div className="hero min-h-screen bg-black">
                    <div className="hero-content">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">

                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered"
                                        name="user_name" />
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"
                                        name="user_email" />
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name="message" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">     <input type="submit" value="Send" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>


        </div>
    );
};

export default ContactMe;