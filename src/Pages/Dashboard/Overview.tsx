import { useAppSelector } from "../../Store/store";
const Overview = () => {
  const { user } = useAppSelector((state) => state.loginUser);

  return (
    <div className="grid place-items-center min-h-[80vh]">
      <h3 className="text-3xl font-bold ">
        Welcome <b>{user?.name}</b> To the Support Dashboard
      </h3>
    </div>
  );
};

export default Overview;
