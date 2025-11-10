import React from "react";

const ArtWorkViewDetails = () => {
  return (
    <div>
      <div className="container mx-auto py-30 px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <img
              className="w-full h-[900px] object-cover"
              src="https://images.unsplash.com/photo-1503682579489-1a53aff795af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt=""
            />
          </div>
          <div className="space-y-4 mt-10">
            <h3 className="text-4xl font-bold font-raleway">Title</h3>
            <h3 className="text-2xl font-medium font-raleway">Artist Name</h3>
            <h3 className="text-xl font-raleway">Medium</h3>
            <p className="text-base font-raleway">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              magnam a fuga sed placeat, odio modi nihil recusandae temporibus
              expedita.
            </p>

            <div className="space-y-4 mt-10">
              <h3 className="text-4xl font-bold font-raleway">Artist Information</h3>
              <h3 className="text-2xl font-medium font-raleway">Artist Name</h3>
              <img className="w-40 h-40 rounded-full object-cover" src="https://media.istockphoto.com/id/489243814/photo/beautiful-female-artist-in-her-studio.jpg?s=612x612&w=0&k=20&c=0bZmeXrlE04lbl-q4L44f6SPsZFyeAYRHLYXjKi17YQ=" alt="" />
              <p className="text-base font-raleway">
                Total ArtWorks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtWorkViewDetails;
