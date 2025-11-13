import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { Link, useNavigate, useOutletContext } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {



  const { dark } = useOutletContext();

  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShowHide, setPasswordShowHide] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long");
      return;
    } else {
      setNameError("");
    }

    const email = form.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please provide a valid email address");
      return;
    } else {
      setEmailError("");
    }

    const photo = form.photoURL.value;
    if (!photo) {
      setPhotoError("Please provide a photo URL");
      return;
    } else {
      setPhotoError("");
    }

    const password = form.password.value;
    const lengthPattern = /^.{6,}$/;
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!lengthPattern.test(password)) {
      setPasswordError("Password should be at least 6 characters");
      return;
    } else if (!casePattern.test(password)) {
      setPasswordError(
        "Password should contain at least one uppercase and one lowercase letter"
      );
      return;
    }

    setPasswordError("");
    setNameError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            toast(`${error.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            setUser(user);
          });
        toast("Register Successful Welcome!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast(`Register Error! Email Already Exists ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        if (!user.photoURL) {
          user.photoURL =
            "https://img.freepik.com/premium-vector/orange-envelope-with-t-mail-logo-it_1277826-407.jpg?semt=ais_hybrid&w=740&q=80";
        }

        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast(`Login Failed ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "error",
          transition: Bounce,
        });
      });
  };

  return (
    <div
      className={`${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen flex items-center justify-center bg-base-200 py-10`}
    >
      <div data-aos="flip-up"
        className={`${
          dark ? "bg-gray-800" : "bg-white"
        } card w-full max-w-md shadow-2xl bg-base-100`}
      >
        <div className="card-body" >
          <h2
            className={`${
              dark ? "text-white" : "text-primary"
            } text-3xl font-bold text-center mb-8 `}
          >
            Create Account
          </h2>
          <p className="text-center text-sm opacity-70 mb-6">
            Join us and showcase your creativity
          </p>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span
                  className={`${
                    dark ? "text-white" : "text-black"
                  } label-text font-medium`}
                >
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={`${
                  dark ? "bg-gray-900 text-white" : "bg-white text-black"
                } input input-bordered w-full`}
              />
            </div>
            {nameError && <p className="text-red-600">{nameError}</p>}

            <div className="form-control">
              <label className="label">
                <span
                  className={`${
                    dark ? "text-white" : "text-black"
                  } label-text font-medium`}
                >
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`${
                  dark ? "bg-gray-900 text-white" : "bg-white text-black"
                } input input-bordered w-full`}
              />
            </div>
            {emailError && <p className="text-red-600">{emailError}</p>}

            <div className="form-control">
              <label className="label">
                <span
                  className={`${
                    dark ? "text-white" : "text-black"
                  } label-text font-medium`}
                  placeholder="PhotoURL"
                  name="photo"
                >
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="https://example.com/profile.jpg"
                className={`${
                  dark ? "bg-gray-900 text-white" : "bg-white text-black"
                } input input-bordered w-full`}
              />
            </div>
            {photoError && <p className="text-red-600">{photoError}</p>}

            <div className="form-control relative">
              <label className="label">
                <span
                  className={`${
                    dark ? "text-white" : "text-black"
                  } label-text font-medium`}
                >
                  Password
                </span>
              </label>
              <input
                type={passwordShowHide ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`${
                  dark ? "bg-gray-900 text-white" : "bg-white text-black"
                } input input-bordered w-full`}
              />
              <button
                type="button"
                onClick={() => setPasswordShowHide(!passwordShowHide)}
                className="absolute top-7 right-2 text-gray-600"
              >
                {passwordShowHide ? (
                  <FaEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </button>
            </div>
            {passwordError && <p className="text-red-600">{passwordError}</p>}

            <button type="submit" className="btn btn-primary w-full mt-3">
              Register
            </button>

            <div className="divider text-sm">or</div>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className={`${
                dark ? " hover:bg-gray-200" : ""
              } btn btn-outline flex items-center justify-center gap-2 w-full hover:bg-base-200`}
            >
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </form>

          <p className="text-center text-sm opacity-70 mt-6">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className={`${dark ? "text-white" : "link-primary"} link`}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
