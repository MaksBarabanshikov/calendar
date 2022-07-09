import {Routes, Route} from "react-router-dom";
import MyNotes from "../../Pages/MyNotes/MyNotes";

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MyNotes/>}/>
        </Routes>
    )
}

export default Routing