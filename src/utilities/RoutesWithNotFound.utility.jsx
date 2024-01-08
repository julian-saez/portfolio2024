import { Route, Routes } from "react-router-dom";
import NotFound from "../templates/NotFound/NotFound";

const RoutesWithNotFound = ({ children }) => {
    return (
        <Routes>
            { children }
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesWithNotFound;
