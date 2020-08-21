import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Students from '../users/Students'
import Tutors from '../users/Tutors'
export default function Content() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/tutors" components={Tutors} />
                    <Route path="/students" components={Students} />
                </Switch>
            </Router>
        </div>
    )
}
