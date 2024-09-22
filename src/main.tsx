import ReactDOM from "react";
import { BrowserRouter } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App";
//import './index.css'

createRoot(document.getElementById("root")!).render(
  /* <StrictMode>
    <App />
 </StrictMode>*/
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
