import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { updateProfile } from "../services/authService";

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateProfile(form, user.token);
    setUser(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        placeholder="New Password"
        onChange={handleChange}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Profile;
