import React from "react";
import "./App.scss";
import Menu from "./com/Menu";
import AppRoutes from "./com/route/AppRoute";

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <div className="App-link">React Study - Sangman</div>
        <Menu />
      </header>
      <div className="App-body">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
