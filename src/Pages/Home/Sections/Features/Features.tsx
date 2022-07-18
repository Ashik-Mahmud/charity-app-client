import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-10 px-32 py-10">
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
        </div>
      </div>
    </section>
  );
};

export default Features;
