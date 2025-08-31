import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  HomeIcon,
  ClipboardListIcon,
  FolderIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const { dark, setDark } = useContext(ThemeContext);

  <button
    onClick={() => setDark(!dark)}
    className="ml-4 bg-gray-700 px-2 py-1 rounded"
  >
    {dark ? "Light" : "Dark"}
  </button>;

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Taskify</h1>
      <div className="flex gap-4">
        {user && (
          <Link to="/profile" className="flex items-center gap-2">
            {user.avatar && (
              <img
                src={`http://localhost:5000${user.avatar}`}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
            )}
            {user.name}
          </Link>
        )}

        {user && (
          <>
            <Link className="flex items-center gap-1" to="/dashboard">
              <ChartBarIcon className="h-5 w-5" /> Dashboard
            </Link>
            <Link className="flex items-center gap-1" to="/tasks">
              <ClipboardListIcon className="h-5 w-5" /> Tasks
            </Link>
            <Link className="flex items-center gap-1" to="/projects">
              <FolderIcon className="h-5 w-5" /> Projects
            </Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
