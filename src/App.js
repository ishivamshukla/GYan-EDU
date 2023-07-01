import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home category={"programming"}/>} exact />
          <Route path="programming" element={<Home category={"programming"} />} exact />
          <Route path="business" element={<Home category={"business"} />} exact />
          <Route path="marketing" element={<Home category={"marketing"} />} exact />
          <Route path="design" element={<Home category={"design"} />} exact />
          <Route path="photography" element={<Home category={"photography"} />} exact />
          <Route path="music" element={<Home category={"music"} />} exact />
          <Route path="personal-dev" element={<Home category={"personal-dev"} />} exact />
          <Route path='about' element={<About />} exact />
          <Route path='contact' element={<Contact />} exact />
          <Route path='blog' element={<Blog />} exact />
          <Route path='login' element={<Login />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
