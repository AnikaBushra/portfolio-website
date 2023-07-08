

const SingleProject = ({ project }) => {
    const { name, img, features, liveSite, github } = project;
    console.log(name);
    return (
        <div>
            <div style={{ height: '700px' }} className="card w-96 bg-base-100 shadow-xl relative">
                <figure className="px-10 pt-10">
                    <img src={img} alt="projects" className="rounded-xl" />
                </figure>
                <div className='bg-gray-700 m-4 p-4 text-white opacity-0 absolute inset-0 hover:opacity-75 transition duration-300' >
                    <p className=' text-2xl mb-10 text-center my-2'>{name}</p>
                    <a href={liveSite} className="text-xl center">Live Site |</a>
                    <a href={github} className="text-xl center"> Client Side Github </a>
                    <h3 className="text-xl m-4">Features:</h3>
                    {
                        features.map((feature, index) => <p
                            key={index}
                        >{index + 1}, {feature}</p>)
                    }
                    <p className="text-xl m-4">Technologies:</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;