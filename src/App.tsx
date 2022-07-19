import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AddEvent from "./Pages/Dashboard/AddEvent/AddEvent";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LeaderBoard from "./Pages/Dashboard/Leaderboard/Leaderboard";
import SavedEvents from "./Pages/Dashboard/SavedEvents/SavedEvents";
import Settings from "./Pages/Dashboard/Settings/Settings";
import TotalDonations from "./Pages/Dashboard/TotalDonations/TotalDonations";
import TotalEvents from "./Pages/Dashboard/TotalEvents/TotalEvents";
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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-event" element={<AddEvent />} />
          <Route path="saved-events" element={<SavedEvents />} />
          <Route path="total-events" element={<TotalEvents />} />
          <Route path="donations" element={<TotalDonations />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!pathname.includes("dashboard") && <Footer />}
    </>
  );
}

export default App;
