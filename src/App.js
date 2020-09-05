import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList.component';
import CreateExercise from './components/CreateExercise.component';
import CreateUser from './components/CreateUser.component';
import EditExercise from './components/EditExercise.component';
import UserList from './components/usersActivity.component';
import SpecificUser from './components/SpecificUser.component';

class App extends React.Component
{
    render()
    {
        return(
            <Router>
                <div className="container">
                    <Navbar/><br/>
                    <Route path="/" exact component={ExerciseList}/>
                    <Route path="/edit/:id"  component={EditExercise}/>
                    <Route path="/create"  component={CreateExercise}/>
                    <Route path="/user"  component={CreateUser}/>
                    <Route path="/listuser"  component={UserList}/>
                    <Route path="/userExerList/:id"  component={SpecificUser}/>
                </div>
            </Router>
        )
    }
}
export default App;