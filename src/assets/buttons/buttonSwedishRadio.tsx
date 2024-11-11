// import { radioStreamFetcher } from "../api/swedishRadioFetch";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { getSwedishRadioStream } from "../api/api";
import { showError } from "../error/notification";

interface Props {
  channelId: number;
  channelName: string;
  setRadio: (url: string) => void;
  setName: (name: string) => void;
}
interface fetchProps {
  url: string | null;
  name: string | null;
}

export default function ButtonSwedishRadio({
  channelId,
  channelName,
  setRadio,
  setName,
}: Props) {
  const mutation: UseMutationResult<fetchProps, Error, number> = useMutation({
    mutationFn: () => getSwedishRadioStream(channelId),
    onSuccess: (data) => {
      if (data.url && data.name) {
        setRadio(data.url);
        setName(data.name);
      }
    },
    onError: (error) => {
      console.error("Error fetching radio stream:", error);
      showError("Could not load radio stream");
    },
  });

  const handleClick = async () => {
    mutation.mutate(channelId);
  };

  return (
    <div>
      <button
        className={`btn bg-gray-950 bg-opacity-60 font-mono text-gray-300 rounded-full
         text-sm px-5 py-1 mb-3
            ${mutation.isPending ? "loading" : ""}`}
        onClick={handleClick}
      >
        {channelName}
      </button>
    </div>
  );
}
