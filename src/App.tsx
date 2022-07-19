import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Register from "./Pages/RegisterUser/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("register") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
