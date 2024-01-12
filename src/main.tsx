import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Css
import "../public/css/style.css";
import "../public/css/main.css";

// Pages
import IndexPage from "./pages/index/IndexPage.tsx";
import MapPage from "./pages/map/MapPage.tsx";
import LinksPage from "./pages/helpful-links/LinksPage.tsx";
import FeedbackPage from "./pages/feedback/FeedbackPage.tsx";
import FaqPage from "./pages/feedback/faq/FaqPage.tsx";
import FeedbackStatusPage from "./pages/feedback/status/FeedbackStatusPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/site-map",
    element: <MapPage />,
  },
  {
    path: "/helpful-links",
    element: <LinksPage />,
  },
  {
    path: "/feedback",
    element: <FeedbackPage />,
  },
  {
    path: "/feedback/faq",
    element: <FaqPage />,
  },
  {
    path: "/feedback/status",
    element: <FeedbackStatusPage />,
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
