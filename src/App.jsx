import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/products/Products";
import MindSprint from "./pages/products/MindSprint";


export default function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<MindSprint />} />
          <Route path="MindSprint" element={<MindSprint />} />
          {/* <Route path="MindSprint2" element={<MindSprinnt2 />} />
          <Route path="MindSprint3" element={<MindSprint />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
