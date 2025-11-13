import axios from "axios";
import { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useOutletContext } from "react-router";

const AddArtWork = () => {


  const { dark } = useOutletContext();
  const { user } = useContext(AuthContext);
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [mediumError, setMediumError] = useState("");
  const [visibilityError, setVisibilityError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imageURLError, setImageURLError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newArtwork = {
      title: form.title.value,
      dimensions: form.dimensions.value,
      category: form.category.value,
      price: form.price.value,
      medium: form.medium.value,
      visibility: form.visibility.value,
      description: form.description.value,
      imageURL: form.imageURL.value,
      userName: form.name.value,
      userEmail: form.email.value,
    };
    console.log(newArtwork);

    if (newArtwork.title.length < 5) {
      setTitleError("Title must be at least 5 characters long");
      return;
    } else {
      setTitleError("");
    }

    if (newArtwork.category.length < 5) {
      setCategoryError("Category must be at least 5 characters long");
      return;
    } else {
      setCategoryError("");
    }

    if (newArtwork.medium.length < 5) {
      setMediumError("Medium must be at least 5 characters long");
      return;
    } else {
      setMediumError("");
    }

    if (newArtwork.visibility.length < 5) {
      setVisibilityError("Visibility must be at least 5 characters long");
      return;
    } else {
      setVisibilityError("");
    }

    if (newArtwork.description.length < 10) {
      setDescriptionError("Description must be at least 5 characters long");
      return;
    } else {
      setDescriptionError("");
    }

    if (!newArtwork.imageURL) {
      setImageURLError("Please provide an image URL");
      return;
    } else {
      setImageURLError("");
    }

    axios
      .post("http://localhost:8000/artworks", newArtwork)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Artwork has been Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        toast(`Error: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  

  return (
    <div className={`${dark ? "bg-gray-800" : "bg-white"} max-w-5xl mx-auto my-40 p-8 rounded-2xl shadow-lg`} data-aos="fade-up">
      <h2 className={`${dark ? "text-white" : "text-black"} text-3xl font-bold text-center mb-8 text-primary`}>
        Create New Artwork
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter artwork title"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
            />
          </div>
          {titleError && <p className="text-red-500">{titleError}</p>}

          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Landscape, Portrait"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
            />
          </div>
          {categoryError && <p className="text-red-500">{categoryError}</p>}

          <div className="form-control">
            <label className="label font-semibold">Medium</label>
            <input
              type="text"
              name="medium"
              placeholder="e.g. Oil, Watercolor, Digital"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
            />
          </div>
          {mediumError && <p className="text-red-500">{mediumError}</p>}

          <div className="form-control">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Describe your artwork..."
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} textarea textarea-bordered w-full`}
              rows="4"
            ></textarea>
          </div>
        </div>
        {descriptionError && <p className="text-red-500">{descriptionError}</p>}

        <div className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Dimensions</label>
            <input
              type="text"
              name="dimensions"
              placeholder="e.g. 24x36 inches"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
              min="0"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Visibility</label>
            <select name="visibility" className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} select select-bordered w-full`}>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          {visibilityError && <p className="text-red-500">{visibilityError}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your name"
                className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">User Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your email"
                className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
                readOnly
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="imageURL"
              placeholder="https://example.com/artwork.jpg"
              className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} input input-bordered w-full`}
            />
          </div>
        </div>
        {imageURLError && <p className="text-red-500">{imageURLError}</p>}

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

export default AddArtWork;
