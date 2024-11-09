import { radioStreamFetcher } from "../api/swedishRadioFetch";

const channels = [
  { name: "dummy", id: 0, apiId: 0 },
  { name: "P1", id: 1, apiId: 132 },
  { name: "P2", id: 1, apiId: 163 },
  { name: "P3", id: 1, apiId: 164 },
  { name: "P4", id: 1, apiId: 212 },
];

let channelCounter = 0;
let currentApiId = 0;

const increaseCounter = () => {
  if (channelCounter === 4) {
    channelCounter = 1;
  } else {
    channelCounter++;
  }
};

const updateCurrentApiId = () => {
  increaseCounter();
  currentApiId = channels[channelCounter].apiId;
  return currentApiId;
};

const updateCurrentName = () => {
  return channels[channelCounter].name;
};

export function ButtonNext() {
  const play = (url: string) => {
    const audioElement = document.getElementById("radio") as HTMLAudioElement;
    audioElement.src = url;
    audioElement.play();
    const headerElement = document.getElementById("nowPlaying");
    if (headerElement) headerElement.innerHTML = updateCurrentName();
  };

  const playOnClick = async () => {
    const url = await radioStreamFetcher(updateCurrentApiId());
    console.log(currentApiId);
    if (url) {
      play(url);
    }
  };
  return (
    <button className="ButtonNext" onClick={playOnClick}>
      Tune
    </button>
  );
}
