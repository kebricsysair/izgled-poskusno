import {Route, Routes} from "react-router-dom";
import User from "../user/User";

const Routing = () => {
    return(
            <Routes>
                <Route path="/" element={<User />}/>
            </Routes>
    );
}

export default Routing;