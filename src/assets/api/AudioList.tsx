import { useQuery } from "@tanstack/react-query";
import { getSwedishRadioStream } from "./api";
import { useState } from "react";
import { AudioListFetch } from "./audioListFetch";
import { AudioFile } from "./types";
import { ButtonDeleteAudio } from "../buttons/ButtonDeleteAudio";

export const AudioList = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const clickHandler = (id: number) => {
    setClicked((prev) => (prev === id ? null : id));
    console.log("current id: ", id);
  };

  const { isPending, error, data } = useQuery<AudioFile[]>({
    queryKey: ["audioFiles"],
    queryFn: AudioListFetch,
  });

  if (isPending)
    return <p className={` ${isPending ? "loading" : ""}`}>"Loading...";</p>;
  if (error) return <p className="error">error.message</p>;

  return (
    <div className="mt-10 border border-gray-800 h-screen ">
      {data.length === 0 ? (
        <p>No audio files in library...</p>
      ) : (
        <ul>
          {data?.map((result) => (
            <li
              className={`${clicked === result.id ? "--selected" : ""}`}
              onClick={() => clickHandler(result.id)}
              key={result.id}
            >
              {result.audioName}

              {clicked === result.id ? (
                <>
                  <ButtonDeleteAudio fileName={result.audioName} />
                </>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
