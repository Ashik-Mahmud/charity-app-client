import PageBanner from "../../Components/PageBanner";

const About = () => {
  return (
    <div>
      <PageBanner title="About Us" />
      <div className="about-content py-10">
        <div className="container mx-auto">
          <h3 className="text-3xl">About Our Support Application</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
