import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Blogs} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blogs/:id' component={BlogDetails} />
            <Route exact path='/addBlog' component={AddBlog} />
            <Route exact path='/blogs/edit/:id' component={EditBlog} />

        </Switch>
    </main>
)
export default Router;