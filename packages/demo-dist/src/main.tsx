import "../../../dist/style.css";
import { GiftBox } from "../../../dist";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (!root) throw new Error("Root not found");
createRoot(root).render(
	<StrictMode>
		<div>
			<h1>Hello, world!</h1>
			<GiftBox />
		</div>
	</StrictMode>,
);
