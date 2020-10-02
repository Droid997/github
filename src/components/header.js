import React,{Component} from 'react'
import axios from 'axios';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={value:"Droid997"};
        this.onHandleSubmit=this.onHandleSubmit.bind(this)
        this.handleOnChange=this.handleOnChange.bind(this)
        this.fetchUserDetails=this.fetchUserDetails.bind(this)
    }
    
    async fetchUserDetails(user){
        try {
            let result=await axios.get(`https://api.github.com/users/${user}`,{headers: {
                'Content-Type': 'application/json'
            }});
            this.props.setErrorMessage("")
            this.props.setUserDetails(result);
            this.fetchUserRepso(result.data.repos_url) 
        } catch (error) {
            this.props.setErrorMessage(error.message)
        }
     
    }

    async fetchUserRepso(repoUrl){
        let result=await axios.get(repoUrl);
        this.props.setRepos(result)
    }

    onHandleSubmit(e){
        this.fetchUserDetails(this.state.value);
        e.preventDefault();
    }

    handleOnChange(e){
        this.setState({value:e.target.value});
        
    }
    render(){
        return (
           
                    <form  onSubmit={this.onHandleSubmit}>
                    <div className="input-group mb-3">
                            <input type="text"  onChange={this.handleOnChange} value={this.state.value} className="form-control" placeholder="Github username" aria-label="Github username" aria-describedby=" gitthub username to fetch details" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-outline-secondary" >Get user</button>
                        </div>
                    </div>
               
            </form>
 

           
           
        )
    }
} 

export default Header