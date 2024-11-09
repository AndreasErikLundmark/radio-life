import { radioStreamFetcher } from "../api/swedishRadioFetch";

export function ButtonP3() {
  const play = (url: string) => {
    const audioElement = document.getElementById("radio") as HTMLAudioElement;
    audioElement.src = url;
    audioElement.play();
    const headerElement = document.getElementById("nowPlaying");
    if (headerElement) headerElement.innerHTML = "P3";
  };

  const playOnClick = async () => {
    const url = await radioStreamFetcher(164);
    if (url) {
      play(url);
    }
  };
  return (
    <button className="ButtonsChannel" onClick={playOnClick}>
      P3
    </button>
  );
}
