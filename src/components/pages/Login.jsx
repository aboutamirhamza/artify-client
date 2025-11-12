import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css';
const Login = () => {

  useEffect(() => {
      Aos.init({
          duration: 1000, 
          once: true,
          easing: 'ease-in-out',
      });
      }, []);

  const { dark } = useOutletContext();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [passwordShowHide, setPasswordShowHide] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
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
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        } else {
          setError("Email or Password is incorrect Not Matched!");
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        if (!user.photoURL) {
        user.photoURL =
          "https://img.freepik.com/premium-vector/orange-envelope-with-t-mail-logo-it_1277826-407.jpg?semt=ais_hybrid&w=740&q=80";
      } else if (!user.photoURL.startsWith("https://")) {
        user.photoURL = user.photoURL.replace("http://", "https://");
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
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center bg-base-200 py-10`}>
      <div data-aos="flip-up" className={`${dark ? "bg-gray-800" : "bg-white"} card w-full max-w-md shadow-2xl bg-base-100`}>
        <div className="card-body">
          <h2 className={`${dark ? "text-white" : "text-primary"} text-3xl font-bold text-center mb-8 `}>
            Login Account
          </h2>
          <p className="text-center text-sm opacity-70 mb-6">
            Login Your Account
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className={`${dark ? "text-white" : "text-black"} label-text font-medium`}>Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className={`${dark ? "text-white" : "text-black"} label-text font-medium`}>Password</span>
              </label>
              <input
                type={passwordShowHide ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
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
            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" className="btn btn-primary w-full mt-3">
              Login
            </button>

            <div className="divider text-sm">or</div>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className={`${dark ? " hover:bg-gray-200" : ""} btn btn-outline flex items-center justify-center gap-2 w-full hover:bg-base-200`}
            >
              <FcGoogle className="text-2xl" />
              Sign In with Google
            </button>
          </form>

          <p className="text-center text-sm opacity-70 mt-6">
            Don't have an account?{" "}
            <a href="/auth/register" className={`${dark ? "text-white" : "link-primary"} link`}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
