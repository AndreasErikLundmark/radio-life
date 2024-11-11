import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { showError, showInfo } from "../../error/notification";

export default function AddForm() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputField = useRef<HTMLInputElement | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      } else {
        showError("No file to add!");
      }
      const response = await fetch("http://localhost:3000/radiolife", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error(errorResponse);
        throw new Error("Server response not ok; ");
      }
      return response.json();
    },

    onSuccess: () => {
      setFile(null);

      queryClient.invalidateQueries();
      showInfo("Audio file added to library");
      if (fileInputField.current) {
        fileInputField.current.value = "";
      }
    },
    onError: (error) => {
      showError(error.message);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      mutation.mutate();
    } else {
      showInfo("Please choose a file to add!");
      if (fileInputField.current) {
        fileInputField.current.value = "";
      }
      setFile(null);
    }
  };

  return (
    <>
      <div className="formHead font-mono">
        {/* <h4>Add new audio file</h4> */}
      </div>
      <form
        className="addAudioForm space-y-4 font-mono"
        id="addAudioForm"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center space-x-10">
          <label className="space-x-10 ">
            File:
            <input
              className="input bg-gray-50 h-8 bg-transparent text-m  "
              ref={fileInputField}
              type="file"
              accept="audio/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </label>
          <input
            className="btn-ghost text-white text-center text-sm py-1 
          px-2 w-30 bg-zinc-700 bg-opacity-70  hover:text-green-900 rounded-sm
          tracking-wide
          "
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </>
  );
}
