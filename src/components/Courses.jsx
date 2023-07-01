import { useState } from "react";
import ProgrammingCourses from "./ProgrammingCourses";
import BusinessCourses from "./BusinessCourses";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MarketingCourses from "./MarketingCourses";

const Courses = (props) => {
    let [categoriesList, setCategoriesList] = useState([
        {
            ref : "/programming",
            btnName : "Programming"
        },
        {
            ref : "/business",
            btnName : "Business"
        },
        {
            ref : "/marketing",
            btnName : "Marketing"
        },
        {
            ref : "/design",
            btnName : "Design"
        },
        {
            ref : "/photography",
            btnName : "Photography"
        },
        {
            ref : "/music",
            btnName : "Music"
        },
        {
            ref : "/personal-dev",
            btnName : "Personal Development"
        }
    ]);


    let renderCourses = (category)=>{
        if(category == "programming"){
            return (<ProgrammingCourses/>);
        }else if(category == "business"){
            return (<BusinessCourses/>);
        }else if(category == "marketing"){
            return (<MarketingCourses/>);
        }else{
            return (<div className="text-center text-red-700 text-xl font-semibold my-24">Courses Not Available.</div>)
        }
    }

    return (
        <div>
            <section id="category" className="m-10 my-16">
                <h1 className="text-lg font-semibold mb-3">Top Categories Courses : </h1>
                <div className="options flex flex-col lg:flex-row justify-center">

                    {categoriesList.map((item) => {
                        return (
                            <Link to={item.ref} key={item.ref} className=" flex flex-col">
                                <button className="btn m-2 px-8 py-1 text-lg">{item.btnName}</button>
                            </Link>
                        )
                    })}

                </div>
            </section>

            {renderCourses(props.category)}

        </div>
    );
};

export default Courses;