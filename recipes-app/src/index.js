import React, {useState, useEffect} from "react";
import { ColorProvider } from "./hooks/color-hooks.js";
import { render } from "react-dom"
import App from "./components/App.js"
import ErrorBoundary from "./components/ErrorBoundary"
import ErrorScreen from "./components/ErrorScreen.js";

render(
    <ErrorBoundary fallback={ErrorScreen}>
        <App name="React" using="React"/>
    </ErrorBoundary>, 
    document.getElementById('root')
)