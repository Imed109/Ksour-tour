import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div className="App">
       <Header/>
      <NavBar/>
      
        <AppRoutes />
     
       
      </div>
    </Router>
  );
}

export default App;
