import {Route, Routes} from "react-router-dom";
import User from "../user/User";
import UserProfile from "../user/UserProfile";

const Routing = () => {
    return(
            <Routes>
                <Route path="/"></Route>
                <Route path="/systemair/users" element={<User />}/>
                <Route path="/systemair/user/:id" element={<UserProfile />} />
                <Route path="*" element="Error. Page not found."/>
            </Routes>
    );
}

export default Routing;