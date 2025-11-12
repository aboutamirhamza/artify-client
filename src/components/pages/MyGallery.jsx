import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [artworks, setArtworks] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/my-artworks/${user.email}`)
        .then((res) => res.json())
        .then((data) => setArtworks(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/artworks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your artwork has been deleted.", "success");
            setArtworks(artworks.filter((a) => a._id !== id));
          });
      }
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    const updatedData = { ...selected };
    delete updatedData._id;

    const res = await fetch(`http://localhost:8000/artworks/${selected._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Updated!", "Your artwork has been updated.", "success");
      setArtworks((prev) =>
        prev.map((a) => (a._id === selected._id ? selected : a))
      );
      document.getElementById("edit_modal").close();
    } else {
      Swal.fire("Error!", "No changes were made.", "error");
      document.getElementById("edit_modal").close();
    }
  };

  const filtered = artworks.filter(
    (d) =>
      d.title?.toLowerCase().includes(query.toLowerCase()) ||
      d.userName?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto py-40 px-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold font-raleway text-center mb-8 text-primary">
          My Gallery
        </h2>
        <input
          type="text"
          placeholder="Search by title or artist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered input-sm w-64"
        />
      </div>

      <div className="overflow-x-auto shadow rounded-xl">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Price</th>
              <th>Dimensions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item,index) => (
              
              <tr key={item._id} className="hover">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={item.imageURL} alt={item.title} />
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.userName}</td>
                <td>{item.price}</td>
                <td>{item.dimensions}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => {
                        setSelected(item);
                        document.getElementById("edit_modal").showModal();
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="edit_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-3xl font-raleway mb-4">Edit Artwork</h3>
          {selected && (
            <form onSubmit={handleSaveEdit} className="space-y-3">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-gray-600 font-raleway">Name</span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={selected.title}
                    onChange={(e) =>
                      setSelected({ ...selected, title: e.target.value })
                    }
                    placeholder="Title"
                    required
                  />
                </div>
                <div>
                  <span className="text-gray-600 font-raleway">Category</span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={selected.category}
                    onChange={(e) =>
                      setSelected({ ...selected, category: e.target.value })
                    }
                    placeholder="Category"
                  />
                </div>
                <div>
                  <span className="text-gray-600 font-raleway">
                    Medium/Using Tools
                  </span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={selected.medium}
                    onChange={(e) =>
                      setSelected({ ...selected, medium: e.target.value })
                    }
                    placeholder="Medium"
                  />
                </div>
                <div>
                  <span className="text-gray-600 font-raleway">Price</span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={selected.price}
                    onChange={(e) =>
                      setSelected({ ...selected, price: e.target.value })
                    }
                    placeholder="Price"
                  />
                </div>
                <div>
                  <span className="text-gray-600 font-raleway">Dimensions</span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={selected.dimensions}
                    onChange={(e) =>
                      setSelected({ ...selected, dimensions: e.target.value })
                    }
                    placeholder="Dimensions"
                  />
                </div>
              </div>
              <div>
                <span className="text-gray-600 font-raleway">Description</span>
                <textarea
                  cols={30}
                  rows={10}
                  className="textarea textarea-bordered w-full"
                  value={selected.description}
                  onChange={(e) =>
                    setSelected({ ...selected, description: e.target.value })
                  }
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => document.getElementById("edit_modal").close()}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default MyGallery;
