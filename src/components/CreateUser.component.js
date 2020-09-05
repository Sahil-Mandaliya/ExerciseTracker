import React,{Component} from 'react';
import Axios from 'axios';
class CreateUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
        }
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeUsername(e)
    {
        this.setState({
            username:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const user = {
            username:this.state.username
        }
        Axios.post('http://localhost:5000/user/add',user)
             .then((res)=>alert("successfully created new user"))
             .catch(err=>alert("Error Already exist or :" + err)); 

        console.log(user);
        this.setState({
            username:''
        })
    }
    render()
    {
        return(
           <div>
               <h2>Create New User</h2>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                        <label>Username : </label>
                        <input type="text" 
                               placeholder="Username"
                               required
                               className="form-control"
                               value={this.state.username}
                               onChange={this.onChangeUsername}>
                        </input>
                    </div>
                    <div className="form-group">
                    <button type="submit" 
                            className="btn btn-primary"
                            value="CreateUser">Create User
                    </button>
                    </div>
               </form>
           </div>
        )
    }
}

export default CreateUser;