import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SearchJob from "./pages/SearchJob";
import Feedback from "./pages/Feedback";
import Footer from "./components/Footer";
import CheckLogin from "./pages/CheckLogin";
import NotFound from "./components/NotFound";
import ContactUs from "./pages/ContactUs";
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
            <Route path="/ContactUs" element={<ContactUs />} />
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
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
