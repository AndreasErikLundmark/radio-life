import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import AddForm from "../assets/components/Form/AddForm";
import { AudioList } from "../assets/api/AudioList";

export const Route = createFileRoute("/settings")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="w-screen h-screen p-2 bg-white">
      <AddForm />
      <AudioList />
    </div>
  );
}
