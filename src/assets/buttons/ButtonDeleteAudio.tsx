import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AudioFileDelete } from "../api/audioDelete";
import { useState } from "react";
import { showInfo } from "../error/notification";

interface Props {
  fileName: string;
}

export const ButtonDeleteAudio = ({ fileName }: Props) => {
  const queryClient = useQueryClient();
  const [isLoading, setLoadingStatus] = useState(false);

  const { mutate, isSuccess, isPending, error, data } = useMutation({
    mutationFn: () => AudioFileDelete(fileName),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["audioFiles"] });
      showInfo("deleting...");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["audioFiles"] });

      showInfo("Deleted");
    },
  });

  if (isPending)
    return <p className={` ${isPending ? "loading" : ""}`}>"Loading...";</p>;
  if (error) return <p className="error">error.message</p>;

  const actionDelete = () => {
    mutate();
  };

  return (
    <button
      className="btn-ghost font-mono font-bold text-white text-center text-sm py-1 px-1 
       bg-green-800 bg-opacity-60 hover:text-green-900 rounded-none right-5 absolute"
      onClick={actionDelete}
    >
      Delete
    </button>
  );
};
