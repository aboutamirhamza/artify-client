import React, { useEffect, useState } from "react";

const TopArtists = () => {

    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        fetch('/topArtist.json')
        .then(res => res.json())
        .then(data => setArtists(data))
        .catch(err => console.error(err))
    },[])

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10 font-raleway text-center">
           <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Top Artists</span> of the <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Week</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">{artist.name}</h3>
                <p className="text-gray-200 text-sm">{artist.streams} streams</p>
              </div>

              <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-lg">
                #{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
