import React, { useEffect, useState } from "react";
import axios from "axios";
import { Save, Trash2, Plus, Loader2 } from "lucide-react";

const roles = ["leader", "co-leader", "member"];
const teams = ["content", "media", "website", "marketing"];

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMemberInputs, setNewMemberInputs] = useState({});
  const [imageFiles, setImageFiles] = useState({});

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await axios.get("/api/members");
    setMembers(res.data);
    setLoading(false);
  };

  const uploadImage = async (file) => {
    if (!file) return "";
    const form = new FormData();
    form.append("image", file);
    const res = await axios.post("/api/upload", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.imageUrl;
  };

  const handleAdd = async (team) => {
    const inputs = newMemberInputs[team] || {};
    if (!inputs.name || !inputs.description) {
      alert("Please fill in at least name and description.");
      return;
    }

    const key = `new-${team}`;
    let pictureUrl = "";
    if (imageFiles[key]) {
      pictureUrl = await uploadImage(imageFiles[key]);
    }

    const newMember = {
      name: inputs.name,
      role: inputs.role || "member",
      school: inputs.school || "",
      description: inputs.description,
      team,
      picture: pictureUrl,
    };

    await axios.post("/api/members", newMember);
    await fetchMembers(); // Always refresh from backend

    setNewMemberInputs((prev) => ({ ...prev, [team]: {} }));
    setImageFiles((prev) => ({ ...prev, [key]: null }));
  };

  const handleUpdate = async (member) => {
    await axios.put(`/api/members/${member.id}`, member);
    alert("✅ Member updated!");
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/members/${id}`);
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleFieldChange = (id, field, value) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleNewInputChange = (team, field, value) => {
    setNewMemberInputs((prev) => ({
      ...prev,
      [team]: {
        ...prev[team],
        [field]: value,
      },
    }));
  };

  const getTeamMembers = (team) =>
    members.filter(
      (member) => member.team?.toLowerCase() === team.toLowerCase()
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        <Loader2 className="animate-spin w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Team Members Editor</h1>

      {teams.map((team) => {
        const teamMembers = getTeamMembers(team);
        console.log(`Rendering ${team} team:`, teamMembers);

        return (
          <div key={team} className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold capitalize">{team} Team</h2>

            {/* Existing Members */}
            {teamMembers.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No members yet.</p>
            ) : (
              teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="grid md:grid-cols-6 gap-4 items-center border-b pb-4"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) =>
                      handleFieldChange(member.id, "name", e.target.value)
                    }
                    className="p-2 border rounded"
                  />

                  <select
                    value={member.role}
                    onChange={(e) =>
                      handleFieldChange(member.id, "role", e.target.value)
                    }
                    className="p-2 border rounded"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="School"
                    value={member.school}
                    onChange={(e) =>
                      handleFieldChange(member.id, "school", e.target.value)
                    }
                    className="p-2 border rounded"
                  />

                  <input
                    type="text"
                    placeholder="Description"
                    value={member.description}
                    onChange={(e) =>
                      handleFieldChange(member.id, "description", e.target.value)
                    }
                    className="p-2 border rounded"
                  />

                  <img
                    src={member.picture}
                    alt="pic"
                    className="w-12 h-12 rounded-full object-cover border"
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(member)}
                      className="text-green-600 hover:underline text-sm"
                    >
                      <Save className="w-4 h-4 inline" /> Save
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      <Trash2 className="w-4 h-4 inline" /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Add Member Inputs */}
            <div className="grid md:grid-cols-6 gap-4 items-center pt-4 border-t mt-4">
              <input
                type="text"
                placeholder="Name"
                value={newMemberInputs[team]?.name || ""}
                onChange={(e) =>
                  handleNewInputChange(team, "name", e.target.value)
                }
                className="p-2 border rounded"
              />

              <select
                value={newMemberInputs[team]?.role || "member"}
                onChange={(e) =>
                  handleNewInputChange(team, "role", e.target.value)
                }
                className="p-2 border rounded"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="School"
                value={newMemberInputs[team]?.school || ""}
                onChange={(e) =>
                  handleNewInputChange(team, "school", e.target.value)
                }
                className="p-2 border rounded"
              />

              <input
                type="text"
                placeholder="Description"
                value={newMemberInputs[team]?.description || ""}
                onChange={(e) =>
                  handleNewInputChange(team, "description", e.target.value)
                }
                className="p-2 border rounded"
              />

              <input
                type="file"
                onChange={(e) =>
                  setImageFiles((prev) => ({
                    ...prev,
                    [`new-${team}`]: e.target.files[0],
                  }))
                }
                className="p-2 border rounded"
              />

              <button
                onClick={() => handleAdd(team)}
                className="text-blue-600 hover:underline text-sm"
              >
                <Plus className="w-4 h-4 inline" /> Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MembersPage;
