import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { ClerkProvider } from "@clerk/react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY!}>
      <div className="min-h-screen px-4 font-sans">
        <RouterProvider router={router} />
      </div>
    </ClerkProvider>
  </StrictMode>,
);
