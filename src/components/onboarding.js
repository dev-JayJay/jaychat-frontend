import React from 'react';
import Login from './Login';

function Onboarding() {
    return(
        <div>
            <div className='w-[70%] mx-auto my-12 border h-[80vh] rounded-xl flex flex-row'>
                <div className='bg-radial-gradient w-[45%] rounded-l-xl'>
                    <div className='w-[85%] mx-auto my-20 text-center'>
                        <h3 className='text-5xl text-white font-bold mb-10'>Welcome to ChatConnect!</h3>
                        <p className='text-[20px] text-white font-semibold tracking-extra-wide'>Stay connected with friends and family, share moments, and enjoy real-time conversations. Log in now to start chatting and experience seamless communication like never before.</p>
                    </div>
                </div>
                <div className='w-[55%] mx-auto'>
                    <div className='w-[95%] mx-auto'>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Onboarding;