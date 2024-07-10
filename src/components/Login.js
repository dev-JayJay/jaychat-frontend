import React, { useState } from "react";
import CustomHooks from "./hooks";
import { InputLableTag } from "./Atoms";

const Login = () => {
    const { error, loading, SendRequest } = CustomHooks();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await SendRequest({endpoint: '/auth/login', method: 'POST', body: formData});
            if (response.token) {
                console.log('response.token', response.token);
                localStorage.setItem('token', response.token);
                localStorage.setItem('userId', response.userId);
                setMessage('Login Successful');
            }
        } catch (err) {
            console.log("Error occured while sending data to Login endpoint",err);
            setMessage("Error occured while sending data to Login endpoint");
        }
    }
    return(
        <div className="w-[90%] mx-auto my-8">
            <div>{loading && <p>loading please wait</p>}</div>
            <p>{message}</p>
            <div>{error && <p>{error}</p>}</div>
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Login ChatConnect</h4>
            <div className="flex flex-col mb-4">
                <lable>Email/Username</lable>
                <div className="w-[80%] h-9 rounded-lg border border-black">
                    <input 
                    type='text'
                    placeholder='Enter username' 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full h-full border border-black rounded-lg px-3" />
                </div>
            </div>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <InputLableTag type='text' lable='check' />
            </div>
            <div className="flex flex-col">
                <lable>Password</lable>
                <div className="w-[80%] h-9 rounded-lg border border-black">
                    <input 
                    type='text' 
                    placeholder='Enter password' 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-full border border-black rounded-lg px-3" />
                </div>
            </div>
            <a className='text-blue-500 font-semibold' href='#'>forgotten password?</a>
            <div className="w-[50%]">
                <button onClick={handelSubmit} className="rounded-lg my-3 text-center text-[20px] px-6 py-2 font-semibold text-white bg-blue-600">Sign In</button>
            </div>
            <p className='text-blue-500 font-semibold'> <a href='#'>don't have an account? Sign Up</a></p>
        </div>
    );
}
export default Login;