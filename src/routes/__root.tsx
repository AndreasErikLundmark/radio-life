import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../../css/index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <div className="p-2 flex gap-2 text-lg border-none">
          <Link
            to="/"
            activeProps={{
              className: "font-bold text-white font-mono",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/settings"
            activeProps={{
              className: "font-bold font-bold text-white font-mono",
            }}
            inactiveProps={{ className: "text-gray" }}
          >
            Settings
          </Link>
        </div>

        <hr />
        <Outlet />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </div>
    </>
  );
}
