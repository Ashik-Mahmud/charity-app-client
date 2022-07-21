import Cookies from "universal-cookie";
const Overview = () => {
  const cookies = new Cookies();
  console.log(cookies.get("token"));
  return (
    <div className="grid place-items-center min-h-[80vh]">
      <h3 className="text-3xl font-bold ">Welcome To the Support Dashboard</h3>
    </div>
  );
};

export default Overview;
