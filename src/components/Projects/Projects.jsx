import { useEffect, useState } from "react";
// import SingleProject from "../SingleProject/SingleProject";
import './Projects.css'
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="bg-black text-white py-8 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-20">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto w-full gap-16">
                <div className="bg-gray-700">
                    <div className="project project1">
                    </div>
                    <div className="flex justify-around m-4">
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to='https://summer-camp-assignment-12.web.app/'>Live Site</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''>Client Side</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''></Link>Server Side</button>
                    </div>
                </div>
                <div className="bg-gray-700">
                    <div className="project project2">
                    </div>
                    <div className="flex justify-around m-4">
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to='https://summer-camp-assignment-12.web.app/'>Live Site</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''>Client Side</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''></Link>Server Side</button>
                    </div>
                </div>
                <div className="bg-gray-700">
                    <div className="project project3">
                    </div>
                    <div className="flex justify-around m-4">
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to='https://summer-camp-assignment-12.web.app/'>Live Site</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''>Client Side</Link></button>
                        <button class=" bg-gray-950 font-bold px-4 py-2 rounded"><Link to=''></Link>Server Side</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;