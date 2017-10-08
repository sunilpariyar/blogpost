import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            post: '',
            username: ''
        }
    }

    componentDidMount() {
        axios({
            url: `http://localhost:3000/api/blogposts/${this.props.match.params.id}`,
            method: 'get',
            // baseURL: 'https://localhost:8080',
        }).then((response) => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                post: response.data.post,
                username: response.data.username
            })
        }).catch(function (error) {
            console.log(error);
        })
        
    }

    handleClickEdit = (e) => {

        e.preventDefault();
        const data = {
            title: this.state.title,
            post: this.state.post,
            username: this.state.username
        };
        axios({
            method: 'put',
            url: 'http://localhost:3000/api/blogposts/' + this.state.id,
            data
        }).then(response => {
            this.props.history.push('/');
        });
        console.log(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target;
        this.setState({
                [name]: value            
        });
    }


    render() {
        const { title, post } = this.state;
        return (
            <div className="row">
                <h1>Edit blog...</h1>
            <form className="col s12" onSubmit={this.handleClickEdit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-pencil medium right prefix"></i>
                  <input id="title" 
                  name="title"
                  value={title}
                  type="text" 
                  onChange={this.handleChange} />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-paragraph medium right prefix"></i>
                  <textarea id="post" 
                  className="materialize-textarea"
                  name="post"
                  value={post}
                  onChange={this.handleChange}></textarea>
                  <label htmlFor="post">Post</label>
                </div>
                <input type="submit" className="btn green" value="Save" />
                <Link to={"/blogs/" + this.state.id} className="btn red right">Cancel</Link>
              </div>
              
            </form>
          </div>
        );
    }
}