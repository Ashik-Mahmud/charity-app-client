import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center min-h-screen">
      <form
        action=""
        className="sm:w-1/2 p-5 sm:flex items-center justify-between shadow rounded-md border-8 border-slate-50"
      >
        <div className="left-image flex-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOW8i5-QrccQGG-GBp3P5uo98W65RiQ4ZDA&usqp=CAU"
            alt="login"
            className="w-full"
          />
        </div>
        <div className="w-1/3 p-6">
          <h3 className="text-2xl  font-semibold flex items-center gap-3 mb-4">
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
              <MdOutlineArrowBackIos />
            </span>{" "}
            Login Volunteer
          </h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="my-5 text-center">
            <button className="btn btn-success">Login into Account</button>
            <Link to="/register" className="block my-4 text-sm link link-hover">
              Register as Volunteer
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
