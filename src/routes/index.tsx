import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import RadioBox from "../assets/components/RadioBox";
import Forest1 from "../assets/images/forest.png";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div
      className="p-6 bg-pink bg-no-repeat bg-center bg-cover text-center grid place-items-center h-screen"
      style={{ backgroundImage: `url(${Forest1})` }}
    >
      <h3>Welcome Home!</h3>
      <button className="btn">Hej hej erik</button>

      <RadioBox />
    </div>
  );
}
