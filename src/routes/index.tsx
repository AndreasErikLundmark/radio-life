import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import RadioBox from "../assets/components/RadioBox";
import Forest1 from "../assets/images/forest.png";
import Forest2 from "../assets/images/forest2.png";
import { ButtonFold } from "../assets/buttons/ButtonFold";
import { ThemeToggle } from "../assets/theme/theme-toggle";
import { useTheme } from "../assets/theme/use-theme";
import { useState, useEffect, useRef } from "react";
import ButtonSwedishRadio from "../assets/buttons/buttonSwedishRadio";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [isPlaying, setPlay] = useState(false);
  const [currentRadio, setRadio] = useState("");
  const [radioName, setCurrentName] = useState("");

  const streamsUpdatedsOriginal = [
    {
      title: "streamsUpdated 1",
      clicked: false,
      color: "red",
      id: 1,
      // button: <ButtonPlay />,
      button: (
        <ButtonSwedishRadio
          channelId={132}
          channelName="1"
          setRadio={setRadio}
          setName={setCurrentName}
        />
      ),
    },
    {
      title: "streamsUpdated 2",
      clicked: false,
      color: "red",
      id: 2,
      button: (
        <ButtonSwedishRadio
          channelId={163}
          channelName="2"
          setRadio={setRadio}
          setName={setCurrentName}
        />
      ),
    },
    {
      title: "streamsUpdated 3",
      clicked: false,
      color: "red",
      id: 3,
      button: (
        <ButtonSwedishRadio
          channelId={164}
          channelName="3"
          setRadio={setRadio}
          setName={setCurrentName}
        />
      ),
    },
    {
      title: "streamsUpdated 4",
      clicked: false,
      color: "red",
      id: 4,
      button: (
        <ButtonSwedishRadio
          channelId={212}
          channelName="4"
          setRadio={setRadio}
          setName={setCurrentName}
        />
      ),
    },
  ];

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
  const { theme } = useTheme();

  console.log("Applying theme:", theme);
  const audioElement = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioElement.current && currentRadio) {
      audioElement.current.src = currentRadio;
      audioElement.current.play();
    }
  }, [currentRadio]);

  return (
    <div
      className="p-6 bg-no-repeat bg-center bg-cover text-center grid place-items-center h-screen"
      style={{ backgroundImage: `url(${theme})` }}
    >
      <RadioBox radioName={radioName} />

      <div className="" id="foldOut">
        <ul className="radioButtons">{listItems}</ul>
        <audio ref={audioElement} className="audioPlayer" controls />
      </div>
    </div>
  );
}
