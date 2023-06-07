import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Home2 from "./components/pages/Home2";
import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";
import SearchJob from "./components/pages/SearchJob";
import Feedback from "./components/pages/Feedback";
import Footer from "./components/pages/Footer";
import StudentProfile from "./components/profileModules/StudentProfile";
import CompanyProfile from "./components/profileModules/CompanyProfile";
import CheckLogin from "./components/pages/CheckLogin";
import NotFound from "./components/pages/NotFound";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/SearchJob" element={<SearchJob />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/StudentProfile" element={<StudentProfile />} />
            <Route path="/CompanyProfile" element={<CompanyProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/About" element={<About />} />

            <Route path="/SearchJob" element={<CheckLogin />} />
            <Route path="/Feedback" element={<CheckLogin />} />
            <Route path="/StudentProfile" element={<CheckLogin />} />
            <Route path="/CompanyProfile" element={<CheckLogin />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
