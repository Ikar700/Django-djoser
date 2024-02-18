import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login }) => {
    const [formData, setformData] = useState({
        email: '',
        password : ''
    });

    const { email, password} = formData;

    const onChange = e => setformData({ ...formData, [e.target.name] : e.target.values })

    const onSubmit = e =>{
        e.preventDefault();

        login (email, password);
    };

    return (
            <div className='container mt-5' >
                <h1>Sign In</h1>
                <p>Sign in to your account </p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input 
                                className='form-control'
                                type = 'email'
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={e => onChange(e)}
                                required       
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <input className='form-control'
                                type = 'password'
                                placeholder='password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required       
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
                <p className='mt-3'>
                    Don't have an account <Link to='/signup'>Signup</Link>
                </p>
                <p className='mt-3'>
                    Forgot your password <Link to='/reset-password'>Forgot password</Link>
                </p>
            </div>
    );
};

// const mapStateToProps = state =>({
    //is authenticated 
// });
export default connect(null, { login })(Login);