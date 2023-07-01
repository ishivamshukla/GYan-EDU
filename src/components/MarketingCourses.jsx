const MarketingCourses = () => {
    return (
        <section className="course-categories m-10">
            {/*<!-- Start of Business -->*/}
            <div id="marketing">
                <h1 className="text-lg font-semibold mb-5">Marketing Courses :</h1>
                {/*<!-- Start of row-lg -->*/}
                <div className="row-lg">
                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Digital Marketing Course From Zero To hero.png')} alt="Digital Marketing Course From Zero To hero" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Digital Marketing Course From Zero To Hero</p>
                                <span>Rs. 1,179</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Affiliate Marketing Masterclass 2021.jpg')} alt="Affiliate Marketing Masterclass" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Affiliate Marketing Masterclass</p>
                                <span>Rs. 19,999</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                    </div>
                    {/*<!-- End of row-md -->*/}
                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">
                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Digital Marketing Tools Mastery.png')} alt="Digital Marketing Tools Mastery" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Digital Marketing Tools Mastery</p>
                                <span>Rs. 999</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Linkedin Marketing.png')} alt="Linkedin Marketing" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Linkedin Marketing Course</p>
                                <span>Rs. 1,499</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    {/*<!-- End of row-md -->*/}
                </div>
                {/*<!-- End of row-lg -->*/}
            </div>
            {/*<!-- Start of Business -->*/}
        </section>
    );
};

export default MarketingCourses;