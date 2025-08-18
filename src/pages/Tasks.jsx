import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Tasks() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (user) {
      getTasks(user.token).then(setTasks);
    }
  }, [user]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ title }, user.token);
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const handleDelete = async (id) => {
    await deleteTask(id, user.token);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState("");

 

  const filteredTasks = tasks.filter((t) =>
    filterProject ? t.project === filterProject : true
  );

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <select
          value={filterProject}
          onChange={(e) => setFilterProject(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Projects</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            className="border p-2 flex-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
  key={task._id}
  className={`p-3 rounded-lg shadow flex justify-between items-center ${
    task.completed ? "bg-green-100" : "bg-yellow-100"
  }`}
>
  <span className="font-medium">{task.title}</span>
  <button
    onClick={() => handleDelete(task._id)}
    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
</li>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
