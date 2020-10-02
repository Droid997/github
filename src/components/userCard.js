import React, { Component } from 'react'

class UserCard extends Component{

    constructor(props){
        super(props);
this.CardRender=this.CardRender.bind(this);
this.handleShow=this.handleShow.bind(this);
    }

    handleShow(e){
        window.location.href=this.props.user.data.html_url;
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    CardRender(){
        if(this.props.user.data)
        {
          return(<div  className="text-center">
            <div className="card" >
            
            <img className="card-img-top "  style={{ width:"250px",alignSelf:"center",borderRadius:"50%" }} src={this.props.user.data.avatar_url} alt="Avatar" /> 
            <div className="card-body">
                <h5 className="card-title">{this.props.user.data.login}</h5>
                <h5 className="card-subtitle mb-2 text-muted">{this.props.user.data.name}</h5>
                <p className="card-text">{this.props.user.data.email}</p>
                <p className="card-text">{this.props.user.data.bio}</p>
                <p className="card-text">Email  : {this.props.user.data.email}</p>
                <p className="card-text">Company  : {this.props.user.data.company}</p>
                <p className="card-text">Location : {this.props.user.data.location}</p>
                <div className="row">
                    <div className="col">
                    <p className="card-text">Following {this.props.user.data.following}</p>
                    </div>
                    <div className="col">
                    <p className="card-text">Followers {this.props.user.data.followers}</p>
                    </div>
                </div>
                <a href="#" style={{width:"25%"}} onClick={this.handleShow} className="btn btn-primary">show</a>
            </div>
            </div>
        </div>)  
        }else
        return null;
    }

    render(){
        return (  <this.CardRender />)
        
    }
}


export default UserCard