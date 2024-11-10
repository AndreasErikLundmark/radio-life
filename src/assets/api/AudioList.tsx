import { useQuery } from "@tanstack/react-query";
import { getSwedishRadioStream } from "./api";
import { useState } from "react";
import { AudioListFetch } from "./audioListFetch";
import React from "react";
import { AudioFile } from "./types";

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
  if (error) return "Error: " + error.message;

  return (
    <div>
      <ul>
        {data?.map((result) => (
          <li
            className={`${clicked === result.id ? "--selected" : ""}`}
            onClick={() => clickHandler(result.id)}
            key={result.id}
          >
            {result.audioName}
          </li>
        ))}
      </ul>
    </div>
  );
};
