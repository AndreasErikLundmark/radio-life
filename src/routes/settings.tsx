import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import AddForm from "../assets/components/Form/AddForm";

export const Route = createFileRoute("/settings")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="w-screen h-screen p-2 bg-white">
      <AddForm />
    </div>
  );
}
