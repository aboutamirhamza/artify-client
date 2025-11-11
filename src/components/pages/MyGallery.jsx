import { useState } from "react";

const MyGallery = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
      title: "Colorful Horizon",
      artist: "Lena Ray",
      price: "$120",
      dimensions: "1024x768",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504198266280-5b6b2a0d6de6?w=800&auto=format&fit=crop",
      title: "City Lights",
      artist: "Amit Das",
      price: "$220",
      dimensions: "1920x1080",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&auto=format&fit=crop",
      title: "Silent Forest",
      artist: "Maya Sen",
      price: "$80",
      dimensions: "800x1200",
    },
  ]);

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  function handleView(item) {
    setSelected(item);
    setIsViewOpen(true);
  }

  function handleEdit(item) {

    alert(`Edit: ${item.title} (id: ${item.id})`);
  }

  function handleDelete(item) {
    if (!confirm(`Are you sure you want to delete "${item.title}"?`)) return;
    setData((prev) => prev.filter((d) => d.id !== item.id));
    if (selected?.id === item.id) {
      setSelected(null);
      setIsViewOpen(false);
    }
  }

  const filtered = data.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto py-40 px-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Gallery
      </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by title or artist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input input-bordered input-sm w-64"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 gap-6">
   
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-md">
            <div className="overflow-x-auto">
              <table className="table table-compact w-full">

                <thead>
                  <tr>
                    <th className="w-24">Image</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th className="hidden md:table-cell">Dimensions</th>
                    <th className="hidden sm:table-cell">Price</th>
                    <th className="w-48">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover">
                      <td>
                        <div className="avatar">
                          <div className="w-16 rounded">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-medium">{item.title}</div>
                      </td>
                      <td>{item.artist}</td>
                      <td className="hidden md:table-cell">{item.dimensions}</td>
                      <td className="hidden sm:table-cell">{item.price}</td>
                      <td>
                        <div className="flex gap-2 justify-end">
                          <button
                            className="btn btn-ghost btn-sm tooltip tooltip-top"
                            data-tip="View"
                            onClick={() => handleView(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>

                          <button
                            className="btn btn-ghost btn-sm tooltip tooltip-top"
                            data-tip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                              />
                            </svg>
                          </button>

                          <button
                            className="btn btn-ghost btn-sm text-error tooltip tooltip-top"
                            data-tip="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-body p-3">
              <div className="text-sm text-muted">
                Showing <strong>{filtered.length}</strong> of <strong>{data.length}</strong> items
              </div>
            </div>
          </div>
        </div>
      </div>


      {isViewOpen && selected && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <div className="flex gap-4">
              <div className="w-1/2">
                <img src={selected.image} alt={selected.title} className="rounded-lg w-full" />
              </div>
              <div className="w-1/2">
                <h3 className="font-bold text-xl">{selected.title}</h3>
                <p className="opacity-70">by {selected.artist}</p>
                <p className="mt-3">Dimensions: {selected.dimensions}</p>
                <p className="mt-1">Price: {selected.price}</p>

                <div className="mt-6 flex gap-2">
                  <button className="btn" onClick={() => handleEdit(selected)}>Edit</button>
                  <button className="btn btn-error" onClick={() => handleDelete(selected)}>Delete</button>
                  <button className="btn btn-ghost" onClick={() => { setIsViewOpen(false); setSelected(null); }}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyGallery;