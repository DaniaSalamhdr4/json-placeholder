const API_URL = "http://localhost:5000";

//users fetch
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

//Posts fetch
export const getAllPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

export const updatePostPatch = async (id, postData) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "delete",
    });
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

//todos APIs
export const getTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  return response.json();
};

// Albums APIs
export const getAlbums = async () => {
  const response = await fetch(`${API_URL}/albums`);
  return response.json();
};

// Comments APIs
export const getComments = async () => {
  const response = await fetch(`${API_URL}/comments`);
  return response.json();
};

// photos APIs
export const getPhotos = async () => {
  const response = await fetch(`${API_URL}/photos`);
  return response.json();
};
