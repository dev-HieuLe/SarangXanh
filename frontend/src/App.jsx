import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Navbar
import Navbar from "./Components/Navbar";

//Homepage
import Banner from "./Components/Homepage/Banner";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
