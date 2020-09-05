import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function UserComponent(args){
        // console.log("inside component");
         //console.log(args);
        return(
            <tr>
                <td>{args.userArg.username}</td>

                <td>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <Link className="btn btn-sm btn-dark" to={'/userExerList/'+args.userArg.username}>See All Exercises </Link>
                    </div>
                </td>
            </tr>
        );
}
class UserList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            users:[]
        }
        this.ListAllUsers=this.ListAllUsers.bind(this);
    }
    componentDidMount()
    {
        Axios.get('http://localhost:5000/user/')
             .then(showExer=>{
                 this.setState({
                     users:showExer.data
                 })
             })
    }
    
    ListAllUsers()
    {
       return this.state.users.map(curUser=>{
         //   console.log(curExer)
            return (<UserComponent userArg={curUser} 
                                       key={curUser._id}/>)
        })
    }
    render()
    {
        return(
            <div>
                <h2>User Log</h2>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Username</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ListAllUsers()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList;