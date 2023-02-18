import React from 'react';
import { Routes, Route, Navigate, useRoutes} from "react-router-dom"
import { ColorDetails } from "./Color/ColorDetails"
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

function App() {
  return (
    <>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        />
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </>
  )
}

export default App;
