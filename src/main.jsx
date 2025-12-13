import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "react-select-search/style.css";
import router from "./routes/routes.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ModalProvider>
  </StrictMode>
);
