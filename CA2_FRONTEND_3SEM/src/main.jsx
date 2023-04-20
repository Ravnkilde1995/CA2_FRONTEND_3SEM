import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App";
import apiFacade from "./apiFacade";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Book"
import About from "./routes/About"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App apiFacade={apiFacade} />
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/book" element={<Book />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
