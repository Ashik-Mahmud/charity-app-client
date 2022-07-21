import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAppSelector } from "../../Store/store";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.loginUser);

  const location: any = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  /* init cookies */
  const cookies = new Cookies();

  /*  pick input values from */
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /* Handle login  */
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) return toast.error("Username is required.");
    if (!password) return toast.error("Password is required.");
    await axios
      .post(`http://localhost:5000/api/login`, { username, password })
      .then((res) => {
        const { token, user, success } = res.data;
        if (success) {
          cookies.set("token", token, { path: "/" });
          cookies.set("user", user, { path: "/" });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <div className="grid place-items-center min-h-screen">
      <form
        onSubmit={handleLogin}
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
