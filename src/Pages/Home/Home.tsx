import Features from "./Sections/Features/Features";
import GetAQuote from "./Sections/GetAQuote";
import Hero from "./Sections/Hero";
import RecentEvents from "./Sections/RecentEvents";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <RecentEvents />
      <GetAQuote />
    </div>
  );
};

export default Home;
