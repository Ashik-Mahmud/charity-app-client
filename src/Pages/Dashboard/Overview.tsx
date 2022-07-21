import Cookies from "universal-cookie";
import { useAppSelector } from "../../Store/store";
const Overview = () => {
  const cookies = new Cookies();
  const user = useAppSelector((state) => state.loginUser);

  return (
    <div className="grid place-items-center min-h-[80vh]">
      <h3 className="text-3xl font-bold ">Welcome To the Support Dashboard</h3>
    </div>
  );
};

export default Overview;
