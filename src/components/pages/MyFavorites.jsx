import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useOutletContext } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
const MyFavorites = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const { dark } = useOutletContext();

  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    if (user?.email) {
      fetch(`http://localhost:8000/user-favorites/${user.email}`)
        .then((res) => res.json())
        .then((data) => setFavorites(data))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const removeFavorite = async (id) => {
    await fetch(`http://localhost:8000/unfavorite/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    });
    fetchFavorites();
  };

  return (
    <div className="max-w-5xl mx-auto py-20" data-aos="fade-up">
      <h2
        className={`${
          dark ? "text-white" : "text-primary"
        } text-3xl font-bold text-center mb-8 `}
      >
        My Favorites
      </h2>
      <div className="grid gap-6 px-6">
        {favorites.map((item) => (
          <div
            key={item._id}
            className={`${
              dark ? "bg-gray-700" : "bg-white"
            } card bg-base-100 shadow-md grid grid-cols-2 justify-between p-4`}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imageURL}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm opacity-70">{item.userName}</p>
              </div>
            </div>
            <button
              onClick={() => removeFavorite(item._id)}
              className="text-red-500 absolute top-10 right-10 sm:top-15 md:top-10 hover:scale-110 transition-transform"
            >
              <FaHeart className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
      {favorites.length === 0 && (
        <p className="text-center opacity-70 mt-10">
          You have no favorite artworks yet.
        </p>
      )}
    </div>
  );
};

export default MyFavorites;
