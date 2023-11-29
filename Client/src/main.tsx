import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router/App.router.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleAPI = import.meta.env.VITE_GOOGLE_API;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={googleAPI}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider
          router={router}
          fallbackElement={<div>Cargando...</div>}
          future={{ v7_startTransition: true }}
        />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);
