import { AudioFile } from "./types";

const DELETE_URL = import.meta.env.VITE_RADIO_LIFE_DELETE_URL;
console.log("delete url: ", DELETE_URL);
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
