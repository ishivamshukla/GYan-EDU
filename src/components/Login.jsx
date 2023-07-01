import {Link} from 'react-router-dom';

let Login = ()=>{
    return (
        <div className="login block mx-auto w-[90%] md:w-[60%] lg:w-[40%]  bg-slate-300 shadow-xl py-5 my-28">
            <h1 className="font-semibold text-2xl text-center mb-10">Login</h1>
            <div className="login-fields flex flex-col w-[70%] mx-auto my-5">
                <input type="email" name="email" className="outline-none border-b-2 border-black bg-slate-300 opacity-100 mb-5" placeholder="Email" />
                <input type="password" name="password" className="outline-none border-b-2 border-black bg-slate-300 opacity-100 mb-5" placeholder="Password" />
                <button type="submit" className="block btn mb-5 bg-blue-700">Login</button>
                <a href="#"><p className="text-center underline text-blue-900 font-semibold mb-5">Forgoten Password ?</p></a>
                <p className="text-center text-blue-900 font-semibold mb-5">Back to <Link  className="underline" to="/">Home Page</Link></p>
            </div>
        </div>
    )
}

export default Login;