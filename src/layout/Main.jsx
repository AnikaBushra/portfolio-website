import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import ContactMe from "../components/ContactMe/ContactMe";
import DownloadFile from "../components/DownloadFIle/DownloadFile";
import Footer from "../components/Footer/Footer";
import MySkills from "../components/MySkills/MySkills";
import Projects from "../components/Projects/Projects";



const Main = () => {

    return (
        <div className="w-full">
            <div id="banner">
                <Banner></Banner>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="mySkills">
                <MySkills></MySkills>
            </div>
            <div id="projects">
                <Projects></Projects>
            </div>
            <div id="contact">
                <ContactMe></ContactMe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;