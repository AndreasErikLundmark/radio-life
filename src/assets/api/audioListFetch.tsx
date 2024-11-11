import { AudioFile } from "./types";

const GET_URL = import.meta.env.VITE_RADIO_LIFE_GET_URL;

export const AudioListFetch = async (): Promise<AudioFile[]> => {
  const response = await fetch(GET_URL);

  if (!response.ok) {
    alert("Could not fetch audiolist");
  }
  return await response.json();
};
