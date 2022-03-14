import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/input";
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Login</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter an email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter a password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Login</button>
        </div>
    );
};

export default Login;