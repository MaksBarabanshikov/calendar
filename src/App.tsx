import React, {useEffect} from 'react';
import './App.css';
import Routing from "./Components/Router/Router";
import Navigation from "./Components/Navigation";
import moment from "moment";
import 'moment/locale/ru'

declare global {
    interface Window {
        Telegram:any;
    }
}

function App() {

    const __months = moment.months().map(m => m.charAt(0).toUpperCase() + m.slice(1))
    moment.updateLocale('ru', {week: {dow: 1}, months: __months})

    useEffect(() => {
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
