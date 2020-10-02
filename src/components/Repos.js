import React, { Component } from 'react'


class Repos extends Component{

    constructor(props){
    super(props);
    this.handleShow=this.handleShow.bind(this)

    }

    handleShow(e){
        window.location.href=this.props.repo.html_url
        e.preventDefault();
        e.stopPropagation();
        return false;

       
    }

    render(){
        return (
            <div className="card  text-white bg-dark" style={{width:"100%"}}>
            <div className="card-body">
        <h5 className="card-title">{this.props.repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.repo.language}</h6>
        <p className="card-text">{this.props.repo.description}</p>
                <a href="#" onClick={this.handleShow} className="card-link">show</a>
            </div>
            </div>
        )
    }
}

export default Repos