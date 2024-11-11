import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../../css/index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <div className="p-2 flex gap-3 text-lg border-none bg-white">
          <Link
            to="/"
            activeProps={{
              className: "font-bold text-gray font-mono",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/settings"
            activeProps={{
              className: "font-bold font-bold text-gray font-mono",
            }}
          >
            Audio Player
          </Link>
        </div>

        <hr />

        <Outlet />
      </div>
    </>
  );
}
