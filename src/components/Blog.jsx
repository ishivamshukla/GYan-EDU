import React from "react";
import Navbar from "./Navbar";

class Blog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Navbar browseCourses={false}/>
                <section className="block w-[90%] sm:w-[70%] mx-auto">
                <h1 className="text-2xl font-semibold text-center my-10">Blogs</h1>
                <section id="category" className="my-16">
                    <h1 className="text-lg font-semibold mb-3">Top Categories : </h1>
                    <div className="options flex flex-col justify-center">
                        <select name="category" className="text-lg px-2 py-1  border-2 border-blue-900 outline-none cursor-pointer rounded-sm" id="select-category">
                            <option value="programing" defaultValue={"selected"}>Programming</option>
                            <option value="business">Business</option>
                            <option value="marketing">Marketing</option>
                            <option value="design">Design</option>
                            <option value="photography">Photography</option>
                            <option value="music">Music</option>
                            <option value="personal-dev">Personal Development</option>
                        </select>
                    </div>
                </section>
                
                <p className="text-sm sm:text-lg mt-10 mb-4 text-slate-600">Latest Articles</p>
                
                <div className="flex flex-col w-[100%]">
                    {/* <!-- Start of Article --> */}
                    <div className="article">
                        <div className="w-[100%] p-2 rounded-md mr-5">
                            <img src={require("./img/blog1.jpg")} className="w-[100%] h-[200px] rounded-sm" />
                        </div>
                        <div className="des-blog sm:my-4">
                            <h1 className="font-bold text-lg mb-3">Why developers like to code at night ?</h1>
                            <p className="pr-5">
                                By working at night, developers can avoid as many 
                                distractions as possible. Without the constant barrage
                                of interruptions, they can spend a few solid hours 
                                focusing on the task at hand and 
                                be as productive as possible...
                            </p>
                        </div>
                    </div>
                    {/* <!-- End of Article --> */}

                    {/* <!-- Start of Article --> */}
                    <div className="article">
                        <div className="w-[100%] p-2 rounded-md mr-5">
                            <img src={require("./img/blog2.jpg")} className="w-[100%] h-[200px] rounded-sm" />
                        </div>
                        <div className="des-blog sm:my-4">
                            <h1 className="font-bold text-lg mb-3">What makes Python a slow language ?</h1>
                            <p className="mr-5">
                                Python code is first compiled into python Byte Code. 
                                The Byte Code interpreter conversion happens internally
                                and most of it is hidden from the developer.
                                Internally Python code is interpreted during run time
                                rather than being compiled to native code 
                                hence it is a bit slower...
                            </p>
                        </div>
                    </div>
                    {/* <!-- End of Article --> */}
                </div>
            </section>
            </div>
        )
    }
}

export default Blog;