import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const ArtWorkViewDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:8000/artworks-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data);
        setLoading(false);

        if (data?.userEmail) {
          fetch("http://localhost:8000/all-artworks")
            .then((res) => res.json())
            .then((allData) => {
              const count = allData.filter(
                (art) => art.userEmail === data.userEmail
              ).length;
              setTotalArtworks(count);
            });
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="text-center text-gray-500 py-20">Artwork not found.</div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-30 px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <img
              className="w-full h-[900px] object-cover"
              src={artwork?.imageURL}
              alt={artwork?.title}
            />
          </div>
          <div className="space-y-4 mt-10">
            <h3 className="text-4xl font-bold font-raleway">{artwork.title}</h3>
            <h3 className="text-xl font-medium font-raleway">
              Artist Name: <span className="font-bold">{artwork.userName}</span>
            </h3>
            <h3 className="text-base font-raleway">
              Using Tools: <span className="font-bold">{artwork.medium}</span>
            </h3>
            <p className="text-base font-raleway">{artwork.description}</p>
            <div className="space-y-4 mt-10">
              <h3 className="text-2xl font-medium font-raleway">
                Artist Name:{" "}
                <span className="font-bold">{artwork.userName}</span>
              </h3>
              <img
                className="w-40 h-40 rounded-full object-cover"
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <p className="text-base font-raleway">
                Total ArtWorks:{" "}
                <span className="font-bold">{totalArtworks}</span>
              </p>
              <Link to="/explore-art-work" className="btn btn-primary my-20">Back To Explore Art Work</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtWorkViewDetails;
