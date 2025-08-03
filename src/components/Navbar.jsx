import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {user && (
        <>
          <Link to="/profile">Profile</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
