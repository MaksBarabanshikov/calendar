import {Routes, Route} from "react-router-dom";
import MyNotes from "../../Pages/MyNotes/MyNotes";
import SignUpForConsultation from "../../Pages/SignUpForConsultation/SignUpForConsultation";

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MyNotes/>}/>
            <Route path={'/consultation'} element={<SignUpForConsultation/>}/>
        </Routes>
    )
}

export default Routing