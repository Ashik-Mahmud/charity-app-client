import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
