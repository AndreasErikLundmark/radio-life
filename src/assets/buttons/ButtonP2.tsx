import { radioStreamFetcher } from "../api/swedishRadioFetch";

export function ButtonP2() {
  const play = (url: string) => {
    const audioElement = document.getElementById("radio") as HTMLAudioElement;
    audioElement.src = url;
    audioElement.play();
    const headerElement = document.getElementById("nowPlaying");
    if (headerElement) headerElement.innerHTML = "P2";
  };

  const playOnClick = async () => {
    const url = await radioStreamFetcher(163);
    if (url) {
      play(url);
    }
  };
  return (
    <button className="ButtonsChannel" onClick={playOnClick}>
      P2
    </button>
  );
}
