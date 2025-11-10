import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaCommentDots, FaShareAlt } from "react-icons/fa";

const highlights = [
  {
    id: 1,
    name: "Lena Ray",
    role: "Digital Illustrator",
    title: "Exploring vibrant color waves 🎨",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop",
    likes: 2.1,
    comments: 148,
  },
  {
    id: 2,
    name: "Ethan Cole",
    role: "3D Artist",
    title: "Minimal 3D geometry designs 🌀",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop",
    likes: 3.5,
    comments: 276,
  },
  {
    id: 3,
    name: "Maya Lin",
    role: "Photographer",
    title: "Golden hour portraits ✨",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",
    likes: 4.3,
    comments: 310,
  },
  {
    id: 4,
    name: "Noah Turner",
    role: "Concept Artist",
    title: "Dreamlike surreal worlds 🌈",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop",
    likes: 5.0,
    comments: 412,
  },
];

const CommunityHighlights = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-10 px-6 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          Community <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Highlights</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-[0_10px_50px_rgba(99,102,241,0.15)] transition-all"
            >

              <div className="relative h-64 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>


                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/70 text-xs font-bold text-gray-800 px-3 py-1 rounded-full shadow">
                  FEATURED
                </div>
              </div>


              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 leading-tight mb-1">
                  {artist.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {artist.name} · {artist.role}
                </p>


                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaHeart className="text-rose-500" /> {artist.likes}k
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCommentDots className="text-sky-500" /> {artist.comments}
                    </span>
                  </div>
                  <button className="hover:text-indigo-500 transition">
                    <FaShareAlt />
                  </button>
                </div>
              </div>

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-indigo-400 blur-xl opacity-40"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all">
            Explore More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
