const ProgrammingCourses = () => {
    return (
        <section className="course-categories m-10">
            {/*<!-- Start of Programming -->*/}
            <div id="programming">
                <h1 className="text-lg font-semibold mb-5">Programming Courses :</h1>
                {/*<!-- Start of row-lg -->*/}
                <div className="row-lg">
                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Android Development.jpg')} alt="Android Development" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Android Mastery Course Bundle (IT Expert Training)</p>
                                <span>Rs. 22990</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Python Mastery Course.jpg')} alt="Android Development" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Python Mastery Course Bundle (IT Expert Training)</p>
                                <span>Rs. 6,996</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                    </div>
                    {/*<!-- End of row-md -->*/}

                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                            <div className="box">
                                <div className="thumbnail">
                                    <img src={require('./img/Cyber Security Course.jpg')} alt="Cyber Security Course" className="thumbnail-img" />
                                </div>
                                <div className="title-course">
                                    <p>Cyber Security Mastery Bundle (IT Expert Training)</p>
                                    <span>Rs. 25,190</span>
                                </div>
                                <button className="view-btn">View</button>
                            </div>
        
                            <div className="box">
                                <div className="thumbnail">
                                    <img src={require("./img/Web Development.png")} alt="Web Development" className="thumbnail-img" />
                                </div>
                                <div className="title-course">
                                    <p>Web Development with Python (IT Expert Training)</p>
                                    <span>Rs. 1,999</span>
                                </div>
                                <button className="view-btn">View</button>
                            </div>

                        </div>
                        {/*<!-- End of row-md -->*/}

                </div>
                {/*<!-- End of row-lg -->*/}

                {/*<!-- Start of row-lg -->*/}
                <div className="row-lg">
                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require("./img/Data Structure and Algorithm.jpg")} alt="DSA" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Data Structures and Algorithms (By iNodeTalent)</p>
                                <span>Rs. 16000</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require("./img/Ethical Hacking.png")} alt="Ethical Hacking" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Learn Ethical Hacking (By Infinity Store)</p>
                                <span>Rs. 2497</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                    </div>
                    {/*<!-- End of row-md -->*/}

                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require("./img/core python.png")} alt="core python in hindi" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Core Python in Hindi (By EDUSSA)</p>
                                <span>Rs. 786</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require("./img/full stack web development.jpg")} alt="full stack web development" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Full Stack Web Development (By Course Hub)</p>
                                <span>Rs. 149</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                    </div>
                    {/*<!-- End of row-md -->*/}
                </div>
                {/*<!-- End of row-lg -->*/}

            </div>
            {/*<!-- Start of Programming -->*/}
        </section>
    );
};

export default ProgrammingCourses;