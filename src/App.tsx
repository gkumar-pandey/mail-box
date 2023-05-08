import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { InboxPage, MailDetailPage, SpamPage, TrashPage } from "./Pages";
import { Navigation } from "./Components";
import MobileNavigation from "./Components/Navigation/MobileNavigation";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <div className="app">
      <div className="side-bar">
        <Navigation />
      </div>
      <MobileNavigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<InboxPage />} />
          <Route path="/spam" element={<SpamPage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/email/:id" element={<MailDetailPage />} />
        </Routes>
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
}

export default App;
