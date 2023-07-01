import Navbar from "./Navbar";

function About(){
    return (
        <div>
            <Navbar browseCourses={false}/>
            <section className="aboutus">
                <h1 className="mb-5 font-semibold text-xl sm:text-3xl">Who Are We?</h1>
                <p>
                    Gyann Era focuses on Young India, especially students who are the future of humanity.
                    Our aim is to skill up students so that they can fit into the todays and future industries.
                    We would also help them shorten their failure or struggle curves and reach their goal faster than ever before.
                    Those who want to learn any skill by experts in their respective field can learn by registering through us.
                </p>
            </section>

            <section className="aboutus mt-10">
                <h1 className="mb-5 font-semibold text-xl sm:text-3xl">Our Vision</h1>
                <p>
                    Our vision is to provide best courses possible to all the students with all the
                    resources so that they can learn any new skill from their homes. 
                    We provide courses that can help them to fit into the todays and future industries.
                </p>
            </section>

            <section className="aboutus mt-10">
                <h1 className="mb-5 font-semibold text-xl sm:text-3xl">Follow Us</h1>
                <p className="flex justify-evenly">
                    <span className="mx-5"><a href="#"><img src={require("./img/logo/Facebook-logo-transparent.png")} width="50" /></a></span>
                    <span className="mx-5"><a href="#"><img src={require("./img/logo/Instagram-logo-transparent.png")} width="50" /></a></span>
                    <span className="mx-5"><a href="#"><img src={require("./img/logo/Pinterest-logo-transparent.png")} width="50" /></a></span>
                    <span className="mx-5"><a href="#"><img src={require("./img/logo/Linkedin-logo-transparent.png")} width="50" /></a></span>
                </p>
            </section>
        </div>
    )
}

export default About;