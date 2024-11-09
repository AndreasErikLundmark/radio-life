// import radioImage from './radio.png';
import radioImage from "./radio.png";

export default function RadioBox() {
  return (
    <div
      className="flex flex-col bg-cover bg-center w-[330px] h-[450px] border border-black
      relative z-10"
      style={{ backgroundImage: `url(${radioImage})` }}
    ></div>
  );
}
