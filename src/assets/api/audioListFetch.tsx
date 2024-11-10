import { AudioFile } from "./types";

const GET_URL = "http://localhost:3000/radiolife";

export const AudioListFetch = async (): Promise<AudioFile[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(GET_URL);

  if (!response.ok) {
    alert("Could not fetch audiolist");
  }
  return await response.json();
};
