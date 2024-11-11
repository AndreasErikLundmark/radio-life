import { ButtonFold } from "../buttons/ButtonFold";
import { ThemeToggle } from "../theme/theme-toggle";
import radioImage from "./radio.png";
interface Props {
  radioName: string;
}

export default function RadioBox({ radioName }: Props) {
  return (
    <div
      className="flex flex-col justify-center items-center 
      relative bg-cover bg-center w-[330px] h-[450px] border-none"
      style={{ backgroundImage: `url(${radioImage})` }}
    >
      <h4
        className="absolute mt-40 text-lg top-6 font-mono font-semibold 
      left-1/2 transform -translate-x-1/2 text-center text-black z-10"
      >
        {radioName}
      </h4>
      <div className="button-list">
        <ButtonFold />
        <ThemeToggle />
      </div>
    </div>
  );
}
