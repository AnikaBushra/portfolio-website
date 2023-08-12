import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center pb-8 bg-black text-white">
                <div>
                    <p className="font-bold">
                        Anika Bushra
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <div className="text-2xl flex justify-center my-6">
                            <Link to="https://github.com/"><AiFillGithub></AiFillGithub></Link>
                            <Link to="https://www.linkedin.com/in/anika-bushra-892a60226/"><TfiLinkedin className="mx-6"></TfiLinkedin></Link>
                            <Link><BsFacebook></BsFacebook></Link>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;