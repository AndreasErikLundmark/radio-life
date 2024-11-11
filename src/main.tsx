import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { routeTree } from "./routeTree.gen";
import { Providers } from "./providers";
import "./css/index.css";
import "react-toastify/dist/ReactToastify.css";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
const queryClient = new QueryClient();

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <ToastContainer toastClassName="toast-font-mono" />
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </QueryClientProvider>
  );
}
