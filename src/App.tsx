import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { InboxPage, SpamPage, TrashPage } from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/spam" element={<SpamPage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </div>
  );
}

export default App;
