
import "./LoginMain.css";

import React from 'react'

const LoginMain = () => {
  return ( 

    <div>
        <body>
    <div class="loginbox">
        <div class="form-top">
        <h2>লগইন করুন</h2>
        </div>
        <form>
            <p>ইমেইল <span>*</span></p>
            <input type="email" name="" placeholder="আপনার ইমেইল দিন "/>
            <p>পাসওয়ার্ড <span>*</span></p>
            <input type="password" name="" placeholder="আপনার পাসওয়ার্ড দিন"/>
            <div>
            <input type="submit" name="" value="লগইন করুন"/>
            </div>
            <a href=" " >Forgot password?</a>
        </form>
    </div>
</body>
</div>
  );
};


export default LoginMain;
