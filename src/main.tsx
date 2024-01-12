import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Css
import "../public/css/style.css";
import "../public/css/main.css";

// Pages
import IndexPage from "./pages/index/IndexPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
