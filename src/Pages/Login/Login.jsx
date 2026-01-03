import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useNavigate, Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import Button from "../../Custom Button/Button";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      Swal.fire({
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Google login successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-3">
      <title>Login</title>
      <div className="w-full max-w-md bg-base-300 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center  mb-6">
          Login to <span className="text-green-600">Habit-Tracker</span>
        </h1>

        {/* ✅ Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 ">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-base-200  focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-800">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-base-200  pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-400"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link to="/reset" className="text-green-600 hover:text-blue-400">
              Forgot password?
            </Link>
          </div>

          <Button type="submit">Login</Button>
        </form>

        <div className="my-6 text-center text-gray-400">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 hover:bg-gray-400 rounded-md text-black transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-sm text-center  mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>
      </div>

      {/* ✅ Autofill button card এর বাইরে নিচে */}
      <button
        type="button"
        onClick={() => {
          setEmail("saimon@user.com");
          setPassword("Saimon@1122");
        }}
        className="w-full max-w-md mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Autofill Demo Credentials
      </button>
    </div>
  );
};

export default Login;
