import React, { use } from "react";
import { FaHeart, FaCommentDots, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const hightlightPromise = fetch('/community.json').then(res => res.json());

const CommunityHighlights = ({ dark }) => {
    const highlights = use(hightlightPromise);
  return (
    <section className={`${dark ? "bg-gray-800" : "bg-linear-to-br from-gray-50 to-white"} relative  py-10 px-6 overflow-hidden`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`${dark ? "text-white" : "text-black"} text-5xl font-extrabold mb-10 font-raleway text-center`}>
          Community <span className={`${dark ? "text-white" : "bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"} font-raleway}`}>Highlights</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.09, rotate: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              viewport={{ once: true }}
              className={`${dark ? "bg-gray-700 " : "bg-white"} relative group rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_50px_rgba(99,102,241,0.15)] transition-all`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>


                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/70 text-xs font-bold text-gray-800 px-3 py-1 rounded-full shadow">
                  FEATURED
                </div>
              </div>


              <div className="p-6">
                <h3 className={`${dark ? "text-white" : "text-black"} text-2xl font-bold mb-2 font-raleway}`}>
                  {artist.title}
                </h3>
                <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-sm mb-4 font-raleway`}>
                  {artist.name} · {artist.role}
                </p>


                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-3">
                    <span className={`${dark ? "text-white" : "text-gray-600"} flex items-center gap-1 font-space-mono`}>
                      <FaHeart className={`${dark ? "text-white" : "text-red-600"}`} /> {artist.likes}k
                    </span>
                    <span className={`${dark ? "text-white" : "text-gray-600"} flex items-center gap-1 font-space-mono}`}>
                      <FaCommentDots className={`${dark ? "text-white" : "text-sky-500"}`} /> {artist.comments}
                    </span>
                  </div>
                  <button className="hover:text-indigo-500 transition">
                    <FaShareAlt className={`${dark ? "text-white" : "text-gray-600"}`} />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-400 via-fuchsia-400 to-indigo-400 blur-xl opacity-40"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityHighlights;
