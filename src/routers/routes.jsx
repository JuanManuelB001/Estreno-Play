import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { DetailsPage } from "../pages/DetailsPage";
export function MyRouters(){
return(
    <Router>
        <Routes>
           <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/movies/:movieId"  element={<DetailsPage/>} />        
        </Routes>
    </Router>
)
}