import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Navbar
import Navbar from "./Components/Navbar";

//Homepage
import Banner from "./Components/Homepage/Banner";
//FAQ page
import Faq from "./Components/faq/faq";
//About page
import About from "./Components/About/About";
//Data page
import Data from "./Components/Data/Data";
//Galler page
import Gallery from "./Components/Gallery/Gallery";
//Members page
import Members from "./Components/Members/Members";

//Footer
import Footer from "./Components/Footer";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<Data />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;

