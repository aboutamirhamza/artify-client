import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Navbar.css";

const Navbar = ({dark, toggleDark}) => {
  
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      toast("Logout successful!", {
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
      navigate("/");
    } catch (error) {
      toast(`Logout Error! ${error.message}`, {
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
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="mr-4 font-raleway font-bold text-base">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-art-work"
          className="mr-4 font-raleway font-bold text-base"
        >
          Explore Artworks
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-artwork"
              className="mr-4 font-raleway font-bold text-base"
            >
              Add Artwork
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-gallery"
              className="mr-4 font-raleway font-bold text-base"
            >
              My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-favorites"
              className="mr-4 font-raleway font-bold text-base"
            >
              My Favorites
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className={`${dark ? "bg-neutral" : "bg-base-100"} fixed top-0 left-0 w-full z-50 bg-base-100 shadow-2xl`}>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menus_items menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link
              to="/"
              className="text-4xl font-bold font-space-mono text-purple-700"
            >
              A<span className="text-orange-600">R</span>T
              <span className="text-orange-600">I</span>
              FY
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menus_item menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="grid grid-cols-2 gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                {user?.photoURL ? (
                  <img
                    data-tooltip-id="my-tooltip-1"
                    className="w-12 h-12 rounded-full object-cover"
                    src={
                      user.photoURL ||
                      "https://img.freepik.com/premium-vector/orange-envelope-with-t-mail-logo-it_1277826-407.jpg?semt=ais_hybrid&w=740&q=80"
                    }
                    alt={user.displayName}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                    {user?.displayName?.[0] || "?"}
                  </div>
                )}
                <ReactTooltip
                  id="my-tooltip-1"
                  place="left"
                  variant="warning"
                  content={`Hi I'm ${user.displayName}`}
                />
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={dark}
                  onChange={toggleDark}
                />
              </div>
            ) : (
              <>
                <Link to="/auth/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-accent">
                  Register
                </Link>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={dark}
                  onChange={toggleDark}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
