import React, {useEffect} from 'react';
import './App.css';
import Routing from "./Components/Router/Router";
import Navigation from "./Components/Navigation";
import moment from "moment";

declare global {
    interface Window {
        Telegram:any;
    }
}

function App() {

    useEffect(() => {
        window.moment = moment
        window.Telegram.WebApp.ready()
    },[])

 return (
     <div className="wrapper text-center">
         <Routing/>
         <Navigation/>
     </div>
 )
}

export default App;
