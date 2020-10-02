import Axios from 'axios';
import React, { Component } from 'react'
import Header from './header'
import UserCard from './userCard'
import Repo from './Repos'

class Container extends Component{
    
    constructor(props){
        super(props);
        this.state={
            user:{},
            repos:[],
            error:""

        }
        this.setUserInfo=this.setUserInfo.bind(this)
        this.setRepos=this.setRepos.bind(this)
        this.setErrorMessage=this.setErrorMessage.bind(this)
        this.RenderContiner=this.RenderContiner.bind(this)

    }

    setUserInfo(userDetails){
        this.setState({user:userDetails})
        // console.log(userDetails);
    }

    setRepos(repoInfos){
        this.setState({repos:repoInfos.data})
        console.log(repoInfos);
    }

    setErrorMessage(errMessage){
        this.setState({error:errMessage})
    }

    RenderContiner(){
        if(this.state.error){
            return (<p> {this.state.error} </p>)
        }else{
           return(
               <div>
                    <UserCard user={this.state.user} />
            <div className="flex ">
            {this.state.repos.map((repo)=>
            <div key={repo.id} className="col-sm-12-md-12-lg-12-xl-12 m-2 ">
                <Repo repo={repo} />
                </div>
            )}
            </div>
               </div>)
        }
    }
    
    render(){
        return (
            <div className="container mt-2">
                
                <Header setUserDetails={this.setUserInfo} setErrorMessage={this.setErrorMessage} setRepos={this.setRepos}  user={this.state.user}/>
                <this.RenderContiner />
               
            </div>
        )
    }
   
}

export default Container;