import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import AddForm from "../assets/components/Form/AddForm";
import { AudioList } from "../assets/api/AudioList";
import Summer from "../assets/images/summer.png";
import Heaven from "../assets/images/heaven.png";

export const Route = createFileRoute("/settings")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div
      className=" bg-no-repeat bg-center h-screen p-2 bg-cover"
      style={{
        backgroundImage: `url(${Heaven})`,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AddForm />
      <AudioList />
      {/* <footer className="footer-center h-32 bg-transparent"></footer> */}
    </div>
  );
}
