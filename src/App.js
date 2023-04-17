import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import SearchJob from "./components/pages/SearchJob";
import Feedback from "./components/pages/Feedback";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ForgetPassword from "./components/authentication/ForgetPassword";
import Footer from "./components/pages/Footer";
import StudentProfile from "./components/profileModules/StudentProfile";
import CompanyProfile from "./components/profileModules/CompanyProfile";
import NotFound from "./components/pages/NotFound";
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
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
