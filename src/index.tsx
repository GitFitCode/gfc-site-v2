import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBounday";
import { PostHogProvider } from "posthog-js/react";
import { NavigationProvider } from "./contexts/navigation.context";

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
try {
  root.render(
    <React.StrictMode>
      <PostHogProvider
        apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <ErrorBoundary>
          <NavigationProvider>
            <App />
          </NavigationProvider>
        </ErrorBoundary>
      </PostHogProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering app:", error);
  root.render(<h1>Something went wrong.</h1>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
