import { useState } from "react";

const ArtworkForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    medium: "",
    description: "",
    dimensions: "",
    price: "",
    visibility: "public",
    userName: "",
    userEmail: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-5xl mx-auto my-40 p-8 bg-base-200 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Create New Artwork
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="space-y-4">

          <div className="form-control">
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter artwork title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Landscape, Portrait"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Medium</label>
            <input
              type="text"
              name="medium"
              placeholder="e.g. Oil, Watercolor, Digital"
              value={formData.medium}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Describe your artwork..."
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>
        </div>


        <div className="space-y-4">
          {/* Dimensions */}
          <div className="form-control">
            <label className="label font-semibold">Dimensions</label>
            <input
              type="text"
              name="dimensions"
              placeholder="e.g. 24x36 inches"
              value={formData.dimensions}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>


          <div className="form-control">
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="input input-bordered w-full"
              min="0"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Visibility</label>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Your name"
                value={formData.userName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">User Email</label>
              <input
                type="email"
                name="userEmail"
                placeholder="Your email"
                value={formData.userEmail}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
          </div>


          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="imageURL"
              placeholder="https://example.com/artwork.jpg"
              value={formData.imageURL}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="btn btn-primary w-full mt-6 hover:scale-[1.02] transition-transform"
          >
            Add New Artwork
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtworkForm;
