import { useEffect, useState } from "react";
import SingleProject from "../SingleProject/SingleProject";


const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="bg-black text-white p-8">
            <h1 className="text-3xl text-center font-bold mb-20">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    projects.map(project =>
                        <SingleProject
                            key={project.name}
                            project={project}
                        ></SingleProject>)
                }
            </div>
        </div>
    );
};

export default Projects;