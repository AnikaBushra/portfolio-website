


const About = () => {
    return (
        <div className="bg-black text-white p-8">
            <h2 className="text-3xl text-center font-bold my-6">About Me</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 pt-6">
                <div className="my-auto ">I am a physics graduate turned passionate web developer with expertise in HTML, CSS, React, Express, and MongoDB. With 6-8 months of dedicated learning, I have achieved an intermediate level of coding proficiency. My projects demonstrate my ability to create visually appealing and interactive websites, combining functionality and aesthetics. I bring an analytical mindset and problem-solving skills honed through my physics background. Committed to continuous learning, I strive to deliver clean, efficient, and user-friendly websites. Let us connect and explore new opportunities!</div>
                <div>
                    <img className="w-2/3 mx-auto" src="https://img.freepik.com/free-vector/businesswoman-office-with-e-mail-marketing-icons_24877-51258.jpg?w=360&t=st=1688784411~exp=1688785011~hmac=1845e27895b0f3d6d7c65d82adc9d650c36aba0b529c79d0d813d308fe9d562a" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;