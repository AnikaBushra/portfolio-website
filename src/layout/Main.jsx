import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
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
            <div id="projects">
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Main;