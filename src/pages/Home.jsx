import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { logout } from "../services/authService";

function Home() {
  const { user, setUser } = useContext(AuthContext);

  if (!user) return <h1>Please login</h1>;

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
