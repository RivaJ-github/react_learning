import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CustomReactDOM from "./customRenderer";

import App from "./App";
// 如果jsx-runtime报错，可以尝试使用v18版本的React
const rootElement = document.getElementById("root");
CustomReactDOM.render(<App />, rootElement);
