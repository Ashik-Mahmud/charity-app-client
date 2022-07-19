import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Card from "./Pages/EventDetails/Card";
import EventDetails from "./Pages/EventDetails/EventDetails";
import MobileBanking from "./Pages/EventDetails/MobileBanking";
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
      {!pathname.includes("register") &&
        !pathname.includes("event-details") &&
        !pathname.includes("dashboard") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Nested Routes  */}
        <Route path="/event-details/:id" element={<EventDetails />}>
          <Route index={true} element={<Card />} />
          <Route path="card" element={<Card />} />
          <Route path="mobile-banking" element={<MobileBanking />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!pathname.includes("dashboard") && <Footer />}
    </>
  );
}

export default App;
