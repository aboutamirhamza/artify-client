import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const ExploreArtWork = () => {


  const [artworks, setArtworks] = useState([]);
  const { user, loading, setLoading } = useContext(AuthContext);
  const [likedMap, setLikedMap] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/user-favorites/${user.email}`)
        .then((res) => res.json())
        .then((favs) => {
          const map = {};
          favs.forEach((f) => (map[f._id] = true));
          setLikedMap(map);
        });
    }
  }, [user]);

  const toggleFavorite = async (artworkId) => {
    if (!user) {
      Swal.fire("Please login first!");
      return;
    }

    const isLiked = likedMap[artworkId];
    const url = isLiked
      ? `http://localhost:8000/unfavorite/${artworkId}`
      : `http://localhost:8000/favorite/${artworkId}`;

    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user.email }),
      });
      const data = await res.json();

      if (data.success) {
        setLikedMap((prev) => ({ ...prev, [artworkId]: !isLiked }));
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: isLiked ? "error" : "success",
          title: isLiked ? "Removed from favorites" : "Added to favorites",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/all-artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const filtered = artworks.filter(
    (d) =>
      d.title?.toLowerCase().includes(query.toLowerCase()) ||
      d.userName?.toLowerCase().includes(query.toLowerCase())
  );

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
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or artist"
            />
          </label>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-hidden py-10">
        {loading ? (
          <p className="text-center text-gray-700 col-span-full font-raleway text-4xl">
            <Loading></Loading>
          </p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-700 col-span-full font-raleway text-4xl">
            No artworks found.
          </p>
        ) : (
          filtered.map((artwork) => (
            <div key={artwork._id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  className="p-4 rounded-2xl object-cover w-full h-[250px]"
                  src={
                    artwork.imageURL || "https://via.placeholder.com/400x300"
                  }
                  alt={artwork.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl wrap-break-word font-raleway font-bold">{artwork.title}</h2>
                <div className="flex justify-between items-center">
                  <p className="font-raleway text-base">
                    Artist Name:{" "}
                    <span className="font-bold wrap-break-word">{artwork.userName}</span>
                  </p>
                  <button
                    onClick={() => toggleFavorite(artwork._id)}
                    className="text-xl cursor-pointer"
                  >
                    {likedMap[artwork._id] ? (
                      <FaHeart className="text-red-500 transition-all duration-300" />
                    ) : (
                      <FaRegHeart className="text-gray-400 transition-all duration-300" />
                    )}
                  </button>
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

export default ExploreArtWork;
