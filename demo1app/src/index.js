import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "boxicons/css/boxicons.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
