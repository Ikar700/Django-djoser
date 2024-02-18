import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div class="jumbotron mt-5">
            <h1 class="display-4">Welcome to Auth systems</h1>
            <p class="lead">This is an incredible authentication sysytem with production level </p>
            <hr class="my-4" />
            <p>Click the login button</p>
            <Link class="btn btn-primary btn-lg" to="/login" role="button">login</Link>
        </div>
    </div>
);

export default Home; 