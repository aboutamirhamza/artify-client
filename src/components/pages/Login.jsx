import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Register submitted! Replace this with your auth logic.");
  };

  const handleGoogleSignup = () => {
    alert("Google Signup clicked! Replace with Firebase or OAuth logic.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Login Account
          </h2>
          <p className="text-center text-sm opacity-70 mb-6">
            Login Your Account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

           

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-3">
              Login
            </button>

            <div className="divider text-sm">or</div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="btn btn-outline flex items-center justify-center gap-2 w-full hover:bg-base-200"
            >
              <FcGoogle className="text-2xl" />
              Sign In with Google
            </button>
          </form>

          <p className="text-center text-sm opacity-70 mt-6">
            Don't have an account?{" "}
            <a href="/auth/register" className="link link-primary">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
