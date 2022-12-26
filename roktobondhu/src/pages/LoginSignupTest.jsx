import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useLogout } from '../hooks/useLogout';
import { useSignup } from '../hooks/useSignup';



const LoginSignupTest = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { login, error, isLoading } = useLogin();
    const { login, error, isLoading } = useLogin();
    const { logout } = useLogout();
    const { signup } = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
    }
    const handleSubmitSignup = async (e) => {
        e.preventDefault()

        await signup(email, password);
    }
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='parent mt-5'>
            <div className="login-container">
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                {user && <button onClick={logout}>Logout</button>}

                <form onSubmit={handleSubmit} action="">


                    <label htmlFor="">Email</label>   <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label> <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" style={{ margin: 'auto auto' }}>Login</button>

                </form>
                {
                    !user && <>
                        <h3>Signup</h3>
                        <form onSubmit={handleSubmitSignup} action="">


                            <label htmlFor="">Email</label>   <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="">Password</label> <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit" style={{ margin: 'auto auto' }}>Signup</button>

                        </form>


                    </>
                }




            </div>

        </div>
    );
};

export default LoginSignupTest;