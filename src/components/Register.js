import React, { useState } from "react";
import CustomHooks from "./hooks"


const Register = () => {

    const { error, loading, SendRequest } = CustomHooks();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        confirmpassword : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(formData.password !== formData.confirmpassword){
                setMessage('Password Does not match');
                return;
            }
            await SendRequest({endpoint:'/auth/register', method: 'POST', body: formData, headers: { 'Custom-Header': 'value' }});
            // console.log(formData);
            setMessage('Sign Up Successfull');
        } catch (err) {
            console.log("Error occured while sending data to endpoint",err);
            setMessage("Error occured while sending data to endpoint");
        }

    }

    return(
        <div className="w-[40%] mx-auto my-11 border">
            <div>{loading && <p>loading please wait</p>}</div>
            <p>{message}</p>
            <div>{error && <p>{error}</p>}</div>
        <h4 className="text-center text-3xl font-semibold text-blue-600">Register Jaychat</h4>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>First Name</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input 
                type='text' 
                placeholder='Enter firstname' 
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>Last Name</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input 
                type='text' 
                placeholder='Enter lastname' 
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>Username</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input type='text'
                placeholder='Enter Username' 
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>Email</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input type='text' 
                placeholder='Enter email' 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>Password</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input type='text' 
                placeholder='Enter password' 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
            <lable>Confirm Password</lable>
            <div className="w-[80%] h-9 rounded-lg border border-black">
                <input 
                type='text' 
                placeholder='confirm password' 
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full h-full border border-black rounded-lg px-3" />
            </div>
        </div>
        <div className="w-[35%] mx-[10%] px-5">
            <button onClick={handleSubmit} className="rounded-lg my-3 text-center text-[20px] px-6 py-2 font-semibold text-white bg-blue-600">Sign Up</button>
        </div>
    </div>
    );
}
export default Register;