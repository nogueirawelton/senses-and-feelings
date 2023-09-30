import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./services/firebase.ts";
import { PhotosProvider } from "./hooks/usePhotos.tsx";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PhotosProvider>
      <App />
    </PhotosProvider>
    <ToastContainer />
  </React.StrictMode>,
);
