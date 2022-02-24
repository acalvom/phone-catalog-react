import React, {Fragment} from "react";
import Home from "./components/Home";
import PhoneDetail from "./components/PhoneDetail";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/phone-detail/:id"><PhoneDetail/></Route>
                </Switch>
            </Fragment>
        </Router>

    );
}

export default App;
