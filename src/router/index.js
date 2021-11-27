import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import Home from "../pages/Home";


const Routes = props => {
    return (
        <Routes>
            <Switch>
                {/* <Route path="/:state/:city" element={<Home />} /> */}
                <Route path="/rj/rio-de-janeiro" element={<Home  city={props.city}/>} />
            </Switch>
        </Routes>
    )
}

export default Routes;