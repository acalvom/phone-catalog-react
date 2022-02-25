import React, {Fragment} from "react";
import Home from "./components/Home";
import PhoneDetail from "./components/PhoneDetail";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./utils/NotFound";
import PhoneAdd from "./components/PhoneAdd";

function App() {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/phone/:id"><PhoneDetail/></Route>
                    <Route path="/add"><PhoneAdd/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </Fragment>
        </Router>

    );
}

export default App;
