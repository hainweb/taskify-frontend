import axios from "axios";

const API_URL = "http://localhost:5000/api/projects/";

// Create
export const createProject = async (data, token) => {
  const res = await axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Get
export const getProjects = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update
export const updateProject = async (id, data, token) => {
  const res = await axios.put(API_URL + id, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete
export const deleteProject = async (id, token) => {
  const res = await axios.delete(API_URL + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
