import { AudioFile } from "./types";

const DELETE_URL = import.meta.env.VITE_RADIO_LIFE_DELETE_URL;
// const GET_URL = "http://localhost:3000/radiolife/";

export const AudioFileDelete = async (fileName: string): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(DELETE_URL + fileName, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Could not fetch audiolist");
  }
  return await response.json();
};
