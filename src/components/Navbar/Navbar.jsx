import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className='mr-4'>Home</NavLink>
      <NavLink to="/" className='mr-4'>Explore Artworks</NavLink>
      <NavLink to="/" className='mr-4'>Add Artwork</NavLink>
      <NavLink to="/" className='mr-4'>My Gallery</NavLink>
      <NavLink to="/" className='mr-4'>My Favorites</NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-2xl">
      <div className="navbar container mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-space-mono text-purple-700">
              A<span className="text-orange-600">R</span>T
              <span className="text-orange-600">I</span>
              FY
            </h3>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="grid grid-cols-2 gap-4">
            <a className="btn btn-primary">Login</a>
            <a className="btn btn-accent">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
