import "./index.html";
import './index.scss';

//React imports
import React from "react";
import { createRoot } from "react-dom/client";

//Pages import
import Home from "./pages/Home/Home";

const root = createRoot(document.getElementById("root"));

root.render(<Home/>);