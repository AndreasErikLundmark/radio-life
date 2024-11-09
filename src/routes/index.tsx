import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import RadioBox from "../assets/components/RadioBox";
import Forest1 from "../assets/images/forest.png";
import { ButtonFold } from "../assets/buttons/ButtonFold";
import { ThemeToggle } from "../assets/theme/theme-toggle";
import { ButtonOpenWindow } from "../assets/buttons/ButtonOpenWindow";
import { useTheme } from "../assets/theme/use-theme";
import { useState } from "react";
import { ButtonP4 } from "../assets/buttons/ButtonP4";
import { ButtonP3 } from "../assets/buttons/ButtonP3";
import { ButtonP2 } from "../assets/buttons/ButtonP2";
import { ButtonPlay } from "../assets/buttons/ButtonPlay";
import FoldOutPlayer from "../assets/components/FoldOutPlayer";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const streamsUpdatedsOriginal = [
  {
    title: "streamsUpdated 1",
    clicked: false,
    color: "red",
    id: 1,
    button: <ButtonPlay />,
  },
  {
    title: "streamsUpdated 2",
    clicked: false,
    color: "red",
    id: 2,
    button: <ButtonP2 />,
  },
  {
    title: "streamsUpdated 3",
    clicked: false,
    color: "red",
    id: 3,
    button: <ButtonP3 />,
  },
  {
    title: "streamsUpdated 4",
    clicked: false,
    color: "red",
    id: 4,
    button: <ButtonP4 />,
  },
];

function HomeComponent() {
  const [isPlaying, setPlay] = useState(false);

  const detectPlay = () => {
    setPlay(true);
  };

  const detectPause = () => {
    setPlay(false);
  };

  const listItems = streamsUpdatedsOriginal.map((stream) => (
    <li className="radioButtons-li" key={stream.id}>
      <span>{stream.button}</span>
    </li>
  ));

  return (
    <div
      className="p-6 bg-pink bg-no-repeat bg-center bg-cover text-center grid place-items-center h-screen"
      style={{ backgroundImage: `url(${Forest1})` }}
    >
      <RadioBox />

      <div className="button-list ">
        <ButtonFold />
        <ThemeToggle />
        <ButtonOpenWindow />
      </div>

      <FoldOutPlayer
        detectPlay={detectPlay}
        detectPause={detectPause}
        listItems={listItems}
      />
    </div>
  );
}
