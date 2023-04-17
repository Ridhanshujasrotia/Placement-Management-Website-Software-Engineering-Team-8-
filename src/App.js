import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import SearchJob from "./components/pages/SearchJob";
import Feedback from "./components/pages/Feedback";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import Logout from "./components/authentication/logout";
import Footer from "./components/pages/Footer";
import StudentProfile from "./components/profileModules/StudentProfile";
import CompanyProfile from "./components/profileModules/CompanyProfile";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SearchJob" element={<SearchJob />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
