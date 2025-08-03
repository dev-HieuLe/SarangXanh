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

  // ✅ Button styles
  const buttonBase =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition duration-200";
  const primaryBtn = `${buttonBase} bg-gray-900 hover:bg-gray-800 text-white`; // 🔥 now dark like “View All Reviews”
  const secondaryBtn = `${buttonBase} bg-gray-200 hover:bg-gray-300 text-gray-800 h-9 px-3`; // ✏️ edit/cancel
  const dangerBtn = `${buttonBase} bg-red-500 hover:bg-red-600 text-white h-9 px-3`; // 🗑 delete

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* ✅ Top Title */}
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900">
        Dashboard
      </h1>

      {/* ✅ Stats Editing Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
        <h2 className="text-md font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <FileText className="w-5 h-5 text-gray-900" /> Update Stats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["plastic_collected", "plastic_recycled", "volunteers"].map((field) => (
            <input
              key={field}
              name={field}
              type="number"
              value={data.stats[field]}
              onChange={handleStatChange}
              placeholder={field.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              className="border border-gray-200 p-3 rounded-md focus:ring-2 focus:ring-gray-300 outline-none"
              required
            />
          ))}
        </div>

        <button onClick={saveStats} className={`${primaryBtn} mt-6`}>
          <Save className="w-4 h-4" /> Save Stats
        </button>
      </div>

      {/* ✅ Timeline Management Section */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
        <h2 className="text-md font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <Calendar className="w-5 h-5 text-gray-900" /> Timeline Events
        </h2>

        {/* Existing Events */}
        {data.timeline.map((event) => (
          <div
            key={event.id}
            className="border border-gray-100 p-4 mb-4 rounded-lg hover:shadow transition"
          >
            {editEventId === event.id ? (
              <div>
                {/* Editing Mode */}
                <input
                  type="date"
                  value={editEvent.date}
                  onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
                  className="border border-gray-200 p-2 rounded-md mb-2 w-full focus:ring-2 focus:ring-gray-300"
                />
                <input
                  placeholder="Title"
                  value={editEvent.title}
                  onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
                  className="border border-gray-200 p-2 rounded-md mb-2 w-full focus:ring-2 focus:ring-gray-300"
                />
                <input
                  placeholder="Description"
                  value={editEvent.description}
                  onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
                  className="border border-gray-200 p-2 rounded-md mb-2 w-full focus:ring-2 focus:ring-gray-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="border border-gray-200 p-2 rounded-md mb-2 w-full focus:ring-2 focus:ring-gray-300"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                />

                <div className="flex gap-2 mt-3">
                  <button onClick={saveEditEvent} className={primaryBtn}>
                    <Save className="w-4 h-4" /> Save
                  </button>
                  <button onClick={cancelEdit} className={secondaryBtn}>
                    <X className="w-4 h-4" /> Cancel
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
                    className={secondaryBtn}
                    style={{ minWidth: "80px" }}
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className={dangerBtn}
                    style={{ minWidth: "80px" }}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add New Event */}
        <h3 className="text-lg font-semibold mt-6 flex items-center gap-2 text-gray-800">
          <Plus className="w-5 h-5 text-gray-900" /> Add New Event
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
          <input
            type="date"
            className="border border-gray-200 p-2 rounded-md focus:ring-2 focus:ring-gray-300 outline-none"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <input
            placeholder="Title"
            className="border border-gray-200 p-2 rounded-md focus:ring-2 focus:ring-gray-300 outline-none"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <input
            placeholder="Description"
            className="border border-gray-200 p-2 rounded-md focus:ring-2 focus:ring-gray-300 outline-none"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            className="border border-gray-200 p-2 rounded-md focus:ring-2 focus:ring-gray-300 outline-none"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <button onClick={handleAddEvent} className={`${primaryBtn} mt-4`}>
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>
    </div>
  );
};

export default AdminData;
