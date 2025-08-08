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

  return (
    <div className="p-4">
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
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{task.title}</span>
            <button
              onClick={() => handleDelete(task._id)}
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

export default Tasks;
