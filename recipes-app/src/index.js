import React, {useState, useEffect} from "react";
import { ColorProvider } from "./hooks/color-hooks.js";
import { render } from "react-dom"
import App from "./App.js"

render(
    <ColorProvider>
        <App />
    </ColorProvider>, 
    document.getElementById('root')
)
