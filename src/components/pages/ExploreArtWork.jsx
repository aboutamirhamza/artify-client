import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link, useOutletContext } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../Loading/Loading";
const ExploreArtWork = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const { dark } = useOutletContext();

  const [artworks, setArtworks] = useState([]);
  const { user, loading, setLoading } = useContext(AuthContext);
  const [likedMap, setLikedMap] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`https://artify-server-nu.vercel.app/user-favorites/${user.email}`)
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
      ? `https://artify-server-nu.vercel.app/unfavorite/${artworkId}`
      : `https://artify-server-nu.vercel.app/favorite/${artworkId}`;

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
    fetch("https://artify-server-nu.vercel.app/all-artworks")
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
    <div className="px-6">
      <div>
        <h2
          className={`${
            dark ? "text-white" : "text-gray-900"
          } text-5xl font-extrabold  mb-10 font-raleway text-center mt-30`}
        >
          <span
            className={`${
              dark
                ? "text-white"
                : "bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"
            } font-raleway`}
          >
            Explore Art{" "}
          </span>
          Work
        </h2>
      </div>

      <div className="container mx-auto my-10" data-aos="fade-up">
        <div className="text-right">
          <label className={`${dark ? "bg-gray-800" : "bg-gray-200"} input`}>
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-hidden py-10" data-aos="fade-down">
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
            <div
              key={artwork._id}
              className={`${
                dark ? "bg-gray-800" : "bg-gray-100"
              } card bg-base-100 shadow-sm`}
            >
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
                <h2 className="card-title text-2xl wrap-break-word font-raleway font-bold">
                  {artwork.title}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="font-raleway text-base">
                    Artist Name:{" "}
                    <span className="font-bold wrap-break-word">
                      {artwork.userName}
                    </span>
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
