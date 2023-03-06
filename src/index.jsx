import "./index.html";
import './index.scss';

import logo from './pages/imgs/R.jpeg'

//React imports
import React from "react";
import { createRoot } from "react-dom/client";

//Pages import

const root = createRoot(document.getElementById("root"));

root.render({logo});