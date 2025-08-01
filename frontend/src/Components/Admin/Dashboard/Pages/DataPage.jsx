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
  Image as ImageIcon,
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

  // ✅ Upload helper
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
      console.error("❌ Upload failed:", err);
      alert("❌ Failed to upload image");
      return "";
    }
  };

  // ✅ Save stats
  const saveStats = async () => {
    if (
      !data.stats.plastic_collected ||
      !data.stats.plastic_recycled ||
      !data.stats.volunteers
    ) {
      alert("⚠️ Please fill in all stats fields!");
      return;
    }
    await axios.put("/api/data/stats", data.stats, { withCredentials: true });
    alert("✅ Stats updated!");
  };

  // ✅ Add event
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

  // ✅ Delete event
  const handleDeleteEvent = async (id) => {
    await axios.delete(`/api/data/timeline/${id}`, { withCredentials: true });
    fetchData();
  };

  // ✅ Start editing
  const startEdit = (event) => {
    setEditEventId(event.id);
    setEditEvent({
      date: event.date,
      title: event.title,
      description: event.description,
      image: event.image,
    });
  };

  // ✅ Save edits
  const saveEditEvent = async () => {
    if (!editEvent.date || !editEvent.title || !editEvent.description) {
      alert("⚠️ Please fill in all fields before saving!");
      return;
    }

    try {
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
      alert("✅ Event updated successfully!");
    } catch (err) {
      console.error("❌ Error saving edit:", err);

      if (err.response) {
        if (err.response.status === 401) {
          alert("❌ You are not authorized to edit this event. Please refresh the page");
        } else if (err.response.status === 404) {
          alert("❌ Event not found! It might have been deleted.");
        } else {
          alert(`❌ Failed to edit event: ${err.response.data.message || "Unknown error"}`);
        }
      } else {
        alert("❌ Network error. Please try again.");
      }
    }
  };

  // ✅ Cancel edit mode
  const cancelEdit = () => {
    setEditEventId(null);
    setEditImageFile(null);
  };

  // ✅ Handle stat inputs
  const handleStatChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      stats: { ...data.stats, [name]: value },
    });
  };

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Loading admin panel..."}
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">🔧 Admin Dashboard</h1>

      {/* ✅ Stats Editing */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-500" /> Update Stats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="plastic_collected"
            type="number"
            value={data.stats.plastic_collected}
            onChange={handleStatChange}
            placeholder="Plastic Collected"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
            required
          />
          <input
            name="plastic_recycled"
            type="number"
            value={data.stats.plastic_recycled}
            onChange={handleStatChange}
            placeholder="Plastic Recycled"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
            required
          />
          <input
            name="volunteers"
            type="number"
            value={data.stats.volunteers}
            onChange={handleStatChange}
            placeholder="Volunteers"
            className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <button
          onClick={saveStats}
          className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-xl shadow-sm"
        >
          <Save className="w-4 h-4" /> Save Stats
        </button>
      </div>

      {/* ✅ Timeline Management */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-500" /> Timeline Events
        </h2>

        {/* Existing events */}
        {data.timeline.map((event) => (
          <div key={event.id} className="border border-gray-100 p-4 mb-4 rounded-xl hover:shadow-sm transition">
            {editEventId === event.id ? (
              <div>
                {/* Editing Mode */}
                <input
                  type="date"
                  value={editEvent.date}
                  onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
                  className="border p-2 rounded-xl mb-2 w-full"
                />
                <input
                  placeholder="Title"
                  value={editEvent.title}
                  onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
                  className="border p-2 rounded-xl mb-2 w-full"
                />
                <input
                  placeholder="Description"
                  value={editEvent.description}
                  onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
                  className="border p-2 rounded-xl mb-2 w-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="border p-2 rounded-xl mb-2 w-full"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                />

                <div className="flex gap-2">
                  <button
                    onClick={saveEditEvent}
                    className="flex items-center gap-1 bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-lg"
                  >
                    <Save className="w-4 h-4" /> Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 transition text-white px-4 py-2 rounded-lg"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {event.date} – {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  {event.image && (
                    <img src={event.image} alt="" className="mt-2 w-32 rounded-lg shadow-sm" />
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(event)}
                    className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add new event */}
        <h3 className="text-xl font-semibold mt-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-green-500" /> Add New Event
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
          <input
            type="date"
            className="border p-2 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <input
            placeholder="Title"
            className="border p-2 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <input
            placeholder="Description"
            className="border p-2 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded-xl focus:ring-2 focus:ring-green-300 outline-none"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-xl shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>
    </div>
  );
};

export default AdminData;
