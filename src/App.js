import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { StoreProvider } from "./context/store";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Boardgames from "./pages/Boardgames/Boardgames";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BoardgameDetails from "./pages/BoardgameDetails/BoardgameDetails";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <StoreProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="boardgames" element={<Boardgames />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="boardgames/:id" element={<BoardgameDetails />} />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
