import React from "react";
import { createRoot } from "react-dom/client";

import Gallery from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <h1>Hello World React App</h1>
        <Gallery />
    </main>
);