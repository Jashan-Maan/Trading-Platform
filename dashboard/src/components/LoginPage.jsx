import { useState } from "react";
import { SiZerodha } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const LoginPage = () => {
  const { setUser } = useContext(AppContext);
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state == "login") {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setUser(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "/users/register",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setUser(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section
      className="flex
     items-center justify-center h-screen flex-col"
    >
      <form
        className="flex flex-col gap-4 items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-md shadow-2xl border border-gray-200 bg-white"
        onSubmit={handleSubmit}
      >
        <img src="/kite.png" className="m-auto w-16" alt="kite-logo" />
        <p className="text-2xl font-[450] m-auto">
          {state === "login" ? "Login" : "Sign Up"} To Kite
        </p>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-gray-500"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-gray-500"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <div className="flex items-center mt-1 px-3 py-2 border border-gray-200 rounded-md focus-within:border-gray-500 transition">
            <input
              type={hidePassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 outline-none bg-transparent"
            />
            {hidePassword ? (
              <FaRegEye
                className="text-gray-500 cursor-pointer"
                onClick={() => setHidePassword(false)}
              />
            ) : (
              <FaRegEyeSlash
                className="text-gray-500 cursor-pointer"
                onClick={() => setHidePassword(true)}
              />
            )}
          </div>
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-gray-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-gray-500 cursor-pointer font-semibold"
            >
              click here
            </span>
          </p>
        )}
        <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white w-full py-2 rounded-sm cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>

      <p className="text-center text-gray-300 mt-20 flex items-center gap-2">
        <SiZerodha className="" />
        <span className="font-semibold">Zerodha</span>
      </p>
    </section>
  );
};

export default LoginPage;
