import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddBlog extends Component {

    handleClickAdd = (data) => {

        // const data = {
        //     title: this.state.title,
        //     post: this.state.post,
        //     username: 'sunil'
        // };
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/blogposts',
            data
        }).then(response => {
            this.props.history.push('/');
        });
        console.log(this.state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.refs.title.value,
            post: this.refs.post.value,
            username: 'Sunil'
        }
        this.handleClickAdd(data);
        
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
        
    //     const { name, value } = e.target;
    //     this.setState({
    //             [name]: value            
    //     });
    // }


    render() {
        // const { title, post } = this.state;
        return (
            <div className="row">
                <h1>Add new blog...</h1>
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-pencil medium right prefix"></i>
                  <input id="title" 
                  name="title"
                  type="text" 
                  ref="title"
                  className="validate" 
                   />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-paragraph medium right prefix"></i>
                  <textarea id="post" 
                  name="post"
                  type="text" 
                  ref="post"
                  className="materialize-textarea" 
                   />
                  <label htmlFor="post">Post</label>
                </div>
                <input type="submit" className="btn green" value="Add" />
                <Link to="/" className="btn red right">Cancel</Link>
              </div>              
            </form>
          </div>
        );
    }
}