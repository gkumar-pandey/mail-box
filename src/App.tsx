import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { InboxPage, SpamPage, TrashPage } from "./Pages";
import { Navigation } from "./Components";

function App() {
  return (
    <div className="app">
      <div className="side-bar">
        <Navigation />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<InboxPage />} />
          <Route path="/spam" element={<SpamPage />} />
          <Route path="/trash" element={<TrashPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
