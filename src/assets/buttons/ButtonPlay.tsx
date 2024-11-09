import { useRef } from "react";
import { radioStreamFetcher } from "../api/swedishRadioFetch";

export function ButtonPlay() {
  // const play = (url: string) => {
  //   const audioElement = document.getElementById("radio") as HTMLAudioElement;
  //   audioElement.src = url;
  //   audioElement.play();
  //   const headerElement = document.getElementById("nowPlaying");
  //   if (headerElement) headerElement.innerHTML = "P1";

  const audioRef = useRef<HTMLAudioElement>(null);
  const channelRef = useRef<HTMLHeadingElement>(null);
  console.log("i was triggered");
  const play = (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }

    if (channelRef.current) {
      channelRef.current.innerHTML = "P1";
    }
  };

  const playOnClick = async () => {
    console.log("i was clicked");
    radioStreamFetcher(132)
      .then((xmlResult) => {
        if (xmlResult) {
          const audio = xmlResult.getElementsByTagName("liveaudio")[0];
          const url = audio?.getElementsByTagName("url")[0].textContent;
          // const schedule =
          //   xmlResult.getElementsByTagName("scheduleurl")[0].textContent;
          // console.log(schedule);

          if (url) {
            play(url);
          } else {
            console.error("No URL found in the XML.");
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching or playing the radio stream: ", error);
      });
  };
  return (
    <button className="ButtonsChannel" onClick={playOnClick}>
      P1
    </button>
  );
}
