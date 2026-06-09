import { Photos } from "../models/photosModel.js";

export const getAllPhotos = async () => {
  try {
    const photos = await Photos.find();
    return photos;
  } catch (error) {
    throw new Error("Error fetching photos: " + error);
  }
};

//get Photos by id
export const getPhotoById = async (id: string) => {
  return await Photos.findById(id);
};

