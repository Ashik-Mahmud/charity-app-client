import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Login from "./Pages/RegisterUser/Login";
import Register from "./Pages/RegisterUser/Register";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("register") && !pathname.includes("login") && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
