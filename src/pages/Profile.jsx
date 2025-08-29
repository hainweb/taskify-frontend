import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

function Profile() {
  const { user, login } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    if (avatar) formData.append("avatar", avatar);

    const res = await axios.put("http://localhost:5000/api/users/profile", formData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    login(res.data); // refresh user context
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
      {user?.avatar && (
        <img
          src={`http://localhost:5000${user.avatar}`}
          alt="avatar"
          className="mt-4 w-24 h-24 rounded-full object-cover"
        />
      )}
    </div>
  );
}

export default Profile;
