import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../services/projectService";
import Loader from "../components/Loader";

function Projects() {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      getProjects(user.token).then(setProjects);
    }
  }, [user]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newProject = await createProject({ name }, user.token);
    setProjects([...projects, newProject]);
    setName("");
  };

  const handleDelete = async (id) => {
    await deleteProject(id, user.token);
    setProjects(projects.filter((p) => p._id !== id));
  };

  if (!projects) return <Loader />;

  return (
    <div className="p-4">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project._id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{project.name}</span>
            <button
              onClick={() => handleDelete(project._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
