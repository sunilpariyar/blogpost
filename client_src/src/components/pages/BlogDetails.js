import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';

export default class BlogDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: {},
            isClicked: false
        }
    }

    componentDidMount() {
        const that = this;
        axios({
            url: `http://localhost:3000/api/blogposts/${this.props.match.params.id}`,
            method: 'get',
            // baseURL: 'https://localhost:8080',
        }).then((result) => {
            that.setState({
                details: result.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    handleClickDelete = (e) => {
        axios({
            url: `http://localhost:3000/api/blogposts/${this.props.match.params.id}`,
            method: 'delete', 
        }).then(response => {
            this.props.history.push('/');
        }).catch((err) => console.log(err));
    }

    clickComment = () => {
        this.setState({
            isClicked: true
        })
    }

    render() {
        const isClicked = this.state.isClicked;
        return (
            <div>
                <br />
                <Link className="btn" to="/">Back</Link>
                <h1>{this.state.details.title}</h1>
                <ul className="collection">
                    <p className="collection-item">{this.state.details.post}</p>                    
                    <p className="collection-item right">Posted by: <Link to="#">{this.state.details.username}</Link></p>
                </ul>
                <Link to={`/blogs/edit/${this.state.details.id}`} className="btn black">Edit</Link>
                <button className="btn red right" onClick={this.handleClickDelete}>Delete</button>
                <br />
                <div>
                    <Link to="#" className="right" onClick={this.clickComment}>Comment</Link>
                    {isClicked ?
                    (<Comment />): ""}
                </div>
            </div>
        );
    }

}