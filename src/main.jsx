import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCube } from "@fortawesome/free-solid-svg-icons";

library.add(faCube);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
