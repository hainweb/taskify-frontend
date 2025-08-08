import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks/";

// Create
export const createTask = async (taskData, token) => {
  const res = await axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Get all
export const getTasks = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update
export const updateTask = async (id, taskData, token) => {
  const res = await axios.put(API_URL + id, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete
export const deleteTask = async (id, token) => {
  const res = await axios.delete(API_URL + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
