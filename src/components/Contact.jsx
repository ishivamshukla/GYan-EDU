import Navbar from "./Navbar";

let Contact = ()=>{
    return (
        <div>
            <Navbar browseCourses={false}/>
            <p className="text-sm sm:text-lg text-center mt-10 mb-4 mx-6">Want to know more about us? Feel free to contact us.</p>
            <h1 className="text-2xl font-semibold text-center mb-10">Contact Us</h1>

            <section className="block w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
                <form action="/contact" method="post">
                    <div className="flex justify-around  flex-col sm:flex-row mb-5">
                        <input type="text" name="fname" className="contact-field sm:mr-2" placeholder="First Name" required />
                        <input type="text" name="lname" className="contact-field sm:mxl-2"  placeholder="Last Name" required />
                    </div>

                    <div className="block">
                        <input type="email" name="email" className="contact-field" placeholder="Email" required />
                    </div>

                    <div className="block mt-2">
                        <label htmlFor="msg" className="text-lg">Message :</label>
                        <textarea name="message" id="msg" className="border-2 border-blue-600 px-3 py-2 outline-none w-[100%] max-h-[100px] min-h-[100px] resize-none" cols="30" rows="10" required></textarea>
                    </div>

                    <div className="block">
                        <button className="btn mt-5 w-[100%]" type="submit">Send</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact;