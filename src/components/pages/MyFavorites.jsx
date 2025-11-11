import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

// MyFavorites.jsx
// A clean and elegant favorite artworks list using React + TailwindCSS + DaisyUI

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
      title: "Dreamy Skies",
      artist: "Lena Ray",
      liked: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop",
      title: "Soft Glow",
      artist: "Rafi Ahmed",
      liked: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop",
      title: "Golden Light",
      artist: "Maya Sen",
      liked: true,
    },
  ]);

  const toggleLike = (id) => {
    setFavorites((prev) =>
      prev.map((fav) =>
        fav.id === id ? { ...fav, liked: !fav.liked } : fav
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto my-40">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Gallery
      </h2>

      <div className="flex flex-col gap-4 px-6">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="card-body flex-row items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-70">by {item.artist}</p>
                </div>
              </div>

              <button
                onClick={() => toggleLike(item.id)}
                className={`transition-colors duration-300 p-2 rounded-full hover:scale-110 ${
                  item.liked ? "text-red-500" : "text-gray-400"
                }`}
              >
                <FaHeart className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {favorites.length === 0 && (
        <div className="text-center opacity-60 mt-8">
          No favorite artworks yet.
        </div>
      )}
    </div>
  );
}

export default MyFavorites;