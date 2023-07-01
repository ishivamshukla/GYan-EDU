const BusinessCourses = () => {
    return (
        <section className="course-categories m-10">
            {/*<!-- Start of Business -->*/}
            <div id="business">
                <h1 className="text-lg font-semibold mb-5">Business Courses :</h1>
                {/*<!-- Start of row-lg -->*/}
                <div className="row-lg">
                    {/*<!-- Start of row-md -->*/}
                    <div className="row-md">

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/Business Finance Fundamentals for Entrepreneurs.jpg')} alt="Finance Fundamentals" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>Business Finance Fundamentals for Entrepreneurs</p>
                                <span>Rs. 5,999</span>
                            </div>
                            <button className="view-btn">View</button>
                        </div>

                        <div className="box">
                            <div className="thumbnail">
                                <img src={require('./img/STOCK MARKET Fundamental Analysis.png')} alt="Fundamental Analysis" className="thumbnail-img" />
                            </div>
                            <div className="title-course">
                                <p>STOCK MARKET Fundamental Analysis by Ashish Chadha</p>
                                <span>Rs. 14,999</span>
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

export default BusinessCourses;