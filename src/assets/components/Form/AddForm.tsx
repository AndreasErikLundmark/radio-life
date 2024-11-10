import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function AddForm() {
  const [file, setFile] = useState<File | null>(null);

  // const [errorMsg, setErrorMsg] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      } else {
        alert("No file to add!");
      }
      const response = await fetch("http://localhost:3001/ap", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/formdata",
        },
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
      // queryClient.invalidateQueries(["repoData"]);
      console.log("Seems like we are doing a POST" + name + "added");
      alert("Added to you music list!");
      setFile(null);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      mutation.mutate();
    } else {
      alert("No file to add!");
    }
  };

  return (
    <>
      <div className="formHead">
        <h4>Add new audio file</h4>
        {/* <h4 className="form__error-message">{errorMsg}</h4> */}
      </div>
      <form className="addAudioForm" id="addAudioForm" onSubmit={handleSubmit}>
        {/* <h4>Add new developer</h4> */}
        <label>
          File:
          <input
            className="form__input-name"
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
          className="form__button-addAudio"
          type="submit"
          value="Add audio file"
        />
      </form>
    </>
  );
}
