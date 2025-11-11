import React from "react";
import { FaSearch } from "react-icons/fa";

const ExploreArtWork = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10 font-raleway text-center mt-30">
          <span className="font-raleway bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            Explore Art{" "}
          </span>
          Work
        </h2>
      </div>

      <div className="container mx-auto my-10">
        <div className="text-right">
          <label className="input">
            <span className="label">
              <FaSearch />
            </span>
            <input type="text" placeholder="Search by title or artist" />
          </label>
          <button className="btn btn-primary">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-hidden py-10">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              className="p-4 rounded-2xl object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Title
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <div className="flex justify-between items-center">
              <p className="font-raleway text-2xl font-bold">Artist Name</p>
              <button className="text-xl text-red-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-soft badge-secondary">Cat-01</div>
              <div className="badge badge-soft badge-secondary">Cat-02</div>
              <div className="badge badge-soft badge-secondary">Cat-03</div>
            </div>
            <button className="btn btn-primary my-5">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreArtWork;
