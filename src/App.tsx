import React from 'react';
import './App.css';
import Routing from "./Components/Router/Router";
import Navigation from "./Components/Navigation";

function App() {
 return (
     <div className="wrapper text-center">
         <Routing/>
         <Navigation/>
     </div>
 )
}

export default App;
