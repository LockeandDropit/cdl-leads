
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

posthog.init(import.meta.env.VITE_POSTHOG_API, {
  api_host: "https://us.i.posthog.com",
});

createRoot(document.getElementById("root")).render(
  <PostHogProvider client={posthog}>
    <App />
  </PostHogProvider>
);
