import React from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/CRUD-with-LocalStorage-and-ReduxToolKit">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
             
                <Header />

                <Body />
        
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
