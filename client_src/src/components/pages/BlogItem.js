import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogItem extends Component {
    render() {
        return (
            <li className="collection-item">
                <Link to={`/blogs/${this.props.item.id}`}>{this.props.item.title}
                </Link>
            </li>
        );
    }
}