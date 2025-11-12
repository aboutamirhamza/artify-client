import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { Fade, Slide } from "react-awesome-reveal";
const FeaturedArtWork = ({dark}) => {
  const [artworks, setArtworks] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8000/home-artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [artworks,setLoading]);

  return (
    <div>
      <div>
        <Slide triggerOnce>
        <h2 className={`${dark ? "text-white" : "text-black"} text-5xl font-extrabold text-gray-900 mb-10 font-raleway text-center`}>
          Featured{" "}
          <span className={`${dark ? "text-white" : "bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"}`}>
            Art{" "}
          </span>
          Work
        </h2>
        </Slide>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-hidden py-10">
        {loading ? (
          <p className="text-center text-gray-700 col-span-full font-raleway text-4xl">
            <Loading></Loading>
          </p>
        ) : artworks.length === 0 ? (
          <p className="text-center text-gray-700 col-span-full font-raleway text-4xl">
            No artworks found.
          </p>
        ) : (
          artworks.map((artwork) => (
            <div key={artwork._id} className={`${dark ? "bg-gray-700" : "bg-white"} card bg-base-100 w-96 shadow-sm`}>
              <figure>
                <img
                  className="p-4 rounded-2xl object-cover w-full h-[250px]"
                  src={
                    artwork.imageURL || "https://via.placeholder.com/400x300"
                  }
                  alt={artwork.title}
                />
              </figure>
              <div className={`${dark ? "text-white" : "text-black"} card-body w-full md:w-96 p-6`}>
                <h2 className="text-2xl wrap-break-word font-raleway font-bold">{artwork.title}</h2>
                <div className="flex justify-between items-center">
                  <p className="font-raleway text-base">
                    Artist Name:{" "}
                    <span className="font-bold wrap-break-word">{artwork.userName}</span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <div className="badge badge-soft badge-secondary wrap-break-word">
                    {artwork.category}
                  </div>
                </div>
                <Link
                  to={`/art-work-view-details/${artwork._id}`}
                  className="btn btn-primary my-5"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedArtWork;


