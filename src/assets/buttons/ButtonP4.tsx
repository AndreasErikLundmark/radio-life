import { radioStreamFetcher } from "../api/swedishRadioFetch";

export function ButtonP4() {
  const play = (url: string) => {
    const audioElement = document.getElementById("radio") as HTMLAudioElement;
    audioElement.src = url;
    audioElement.play();
    const headerElement = document.getElementById("nowPlaying");
    if (headerElement) headerElement.innerHTML = "P4";
  };

  const playOnClick = async () => {
    const url = await radioStreamFetcher(212);
    if (url) {
      play(url);
    }
  };
  return (
    <button className="ButtonsChannel" onClick={playOnClick}>
      P4
    </button>
  );
}
