import React, { Component } from 'react'
import axios from 'axios';
import BlogItem from './BlogItem';

export default class Blogs extends Component {
    constructor(){
        super();
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        const that = this;
        axios({
            url: 'http://localhost:3000/api/blogposts',
            method: 'get',
            // baseURL: 'https://localhost:8080',
        }).then((result) => {
            that.setState({
                blogs: result.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const blogs = this.state.blogs;
        return (
            <div>
                {blogs.map((blog) => 
                    <ul key={blog.id} className="collection" >
                        <BlogItem item={blog} />
                    </ul>
                )}
            </div>
        );
    }
}