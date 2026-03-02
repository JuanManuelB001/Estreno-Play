import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { DetailsPage } from "../pages/DetailsPage";
import { ScrollToTop } from "../components/ScrollToTop";
export function MyRouters(){
return(
    <Router>
        <ScrollToTop />
        <Routes>
           <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/movies/:movieId"  element={<DetailsPage/>} />        
        </Routes>
    </Router>
)
}