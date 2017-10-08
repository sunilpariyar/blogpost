import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comments extends Component {
    render() {
        return (
            <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-pencil medium right prefix"></i>
                  <input id="comment" 
                  name="comment"
                  type="text" 
                  ref="comment"
                  className="validate" 
                   />
                  <label htmlFor="title">Add your comment</label>
                </div>                
                <input type="submit" className="btn green right" value="Comment" />
                <Link to="/" className="right btn-flat">Cancel</Link>                
              </div>              
            </form>
          </div>
        );
    }
}