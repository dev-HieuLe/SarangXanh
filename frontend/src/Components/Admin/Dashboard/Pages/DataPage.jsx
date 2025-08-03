import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Save,
  Plus,
  Trash2,
  Edit,
  X,
  Calendar,
  FileText,
  Loader2,
} from "lucide-react";

const AdminData = () => {
  const [data, setData] = useState(null);
  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    description: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editEventId, setEditEventId] = useState(null);
  const [editEvent, setEditEvent] = useState({
    date: "",
    title: "",
    description: "",
    image: "",
  });
  const [editImageFile, setEditImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("/api/data", { withCredentials: true });
    setData(res.data);
    setLoading(false);
  };

  const uploadImage = async (file) => {
    if (!file) return "";
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      return res.data.imageUrl;
    } catch (err) {
      alert("❌ Failed to upload image");
      return "";
    }
  };

  const saveMonthlyStat = async (month, field, value) => {
    try {
      await axios.put(
        `/api/data/monthly/${month}`,
        { [field]: value },
        { withCredentials: true }
      );
      fetchData();
    } catch (err) {
      alert("❌ Failed to update monthly stats");
    }
  };

  const handleMonthlyChange = (month, field, value) => {
    const updated = data.monthlyStats.map((m) =>
      m.month === month ? { ...m, [field]: value } : m
    );
    setData({ ...data, monthlyStats: updated });
  };

  const handleAddEvent = async () => {
    if (!newEvent.date || !newEvent.title || !newEvent.description) {
      alert("⚠️ Please fill in all fields before adding!");
      return;
    }
    let uploadedImageUrl = "";
    if (imageFile) uploadedImageUrl = await uploadImage(imageFile);

    await axios.post(
      "/api/data/timeline",
      { ...newEvent, image: uploadedImageUrl },
      { withCredentials: true }
    );

    setNewEvent({ date: "", title: "", description: "", image: "" });
    setImageFile(null);
    fetchData();
  };

  const handleDeleteEvent = async (id) => {
    await axios.delete(`/api/data/timeline/${id}`, { withCredentials: true });
    fetchData();
  };

  const startEdit = (event) => {
    setEditEventId(event.id);
    setEditEvent(event);
  };

  const saveEditEvent = async () => {
    if (!editEvent.date || !editEvent.title || !editEvent.description) {
      alert("⚠️ Please fill in all fields before saving!");
      return;
    }
    let uploadedImageUrl = editEvent.image;
    if (editImageFile) uploadedImageUrl = await uploadImage(editImageFile);

    await axios.put(
      `/api/data/timeline/${editEventId}`,
      { ...editEvent, image: uploadedImageUrl },
      { withCredentials: true }
    );
    setEditEventId(null);
    setEditImageFile(null);
    fetchData();
  };

  const cancelEdit = () => {
    setEditEventId(null);
    setEditImageFile(null);
  };

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {loading ? <Loader2 className="animate-spin" /> : "Loading..."}
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-12">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-900" /> Monthly Stats
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left p-2">Month</th>
              <th className="text-center">Trash</th>
              <th className="text-center">Recycled</th>
              <th className="text-center">Volunteers</th>
              <th className="text-center">Save</th>
            </tr>
          </thead>
          <tbody>
            {data.monthlyStats.map((m) => (
              <tr key={m.month} className="border-b">
                <td className="p-2 font-medium">{m.month}</td>
                {["plastic_collected", "plastic_recycled", "volunteers"].map(
                  (field) => (
                    <td key={field} className="text-center">
                      <input
                        type="number"
                        value={m[field]}
                        onChange={(e) =>
                          handleMonthlyChange(m.month, field, e.target.value)
                        }
                        className="w-20 border rounded px-2 py-1"
                      />
                    </td>
                  )
                )}
                <td className="text-center">
                  <button
                    className="bg-black text-white px-3 py-1 rounded"
                    onClick={() => {
                      const current = data.monthlyStats.find(
                        (x) => x.month === m.month
                      );
                      axios
                        .put(
                          `/api/data/monthly/${m.month}`, // this matches the route (not POST!)
                          {
                            month: m.month,
                            plastic_collected: current.plastic_collected,
                            plastic_recycled: current.plastic_recycled,
                            volunteers: current.volunteers,
                          },
                          { withCredentials: true }
                        )
                        .then(fetchData)
                        .then(alert("Successfully update monthly stats!!"))
                        .catch(() =>
                          alert("❌ Failed to update monthly stats")
                        );
                    }}
                  >
                    <Save className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
        <h2 className="text-md font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <Calendar className="w-5 h-5 text-gray-900" /> Timeline Events
        </h2>

        {data.timeline.map((event) => (
          <div
            key={event.id}
            className="border border-gray-100 p-4 mb-4 rounded-lg hover:shadow transition"
          >
            {editEventId === event.id ? (
              <div>
                <input
                  type="date"
                  value={editEvent.date}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, date: e.target.value })
                  }
                  className="border p-2 rounded w-full mb-2"
                />
                <input
                  placeholder="Title"
                  value={editEvent.title}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, title: e.target.value })
                  }
                  className="border p-2 rounded w-full mb-2"
                />
                <input
                  placeholder="Description"
                  value={editEvent.description}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, description: e.target.value })
                  }
                  className="border p-2 rounded w-full mb-2"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="border p-2 rounded w-full mb-2"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                />

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={saveEditEvent}
                    className="bg-black text-white px-4 py-1 rounded"
                  >
                    <Save className="w-4 h-4 inline" /> Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-200 px-4 py-1 rounded"
                  >
                    <X className="w-4 h-4 inline" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {event.date} – {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  {event.image && (
                    <img
                      src={event.image}
                      alt=""
                      className="mt-2 w-32 rounded-md shadow-sm"
                    />
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => startEdit(event)}
                    className="bg-gray-200 px-4 py-1 rounded"
                  >
                    <Edit className="w-4 h-4 inline" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    <Trash2 className="w-4 h-4 inline" /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        <h3 className="text-lg font-semibold mt-6 flex items-center gap-2 text-gray-800">
          <Plus className="w-5 h-5 text-gray-900" /> Add New Event
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
          <input
            type="date"
            className="border p-2 rounded"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <input
            placeholder="Title"
            className="border p-2 rounded"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <input
            placeholder="Description"
            className="border p-2 rounded"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
          />
          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-black text-white px-4 py-2 rounded mt-4"
        >
          <Plus className="w-4 h-4 inline" /> Add Event
        </button>
      </div>
    </div>
  );
};

export default AdminData;
