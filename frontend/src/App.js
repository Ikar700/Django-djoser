import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './Store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} /> 
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
                        <Route path="/activate/:uid/:token" element={<Activate />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
);

export default App;