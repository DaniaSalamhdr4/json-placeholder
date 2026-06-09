import { Albums } from "../models/albumsModel.js";

export const getAlbums = async () => {
  try {
    const album = await Albums.find();

    return album;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

//get Album by id
export const getAlbumById = async (id: string) => {
  return await Albums.findById(id);
};
