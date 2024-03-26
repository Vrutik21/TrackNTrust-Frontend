// App.js

import React, { useState } from 'react';
import './front_page.css'; // Import your CSS file

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prevState => ({
            ...prevState,
            [name]: val
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div></div>
        // <div className="login-wrap">
        //     <div className="login-html">
        //         <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">  Register</label>
        //         <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
        //         <div className="login-form">
        //             <div className="sign-in-htm">
        //                 <form onSubmit={handleSubmit}>
        //                     <div className="group">
        //                         <label htmlFor="name" className="label">Name</label>
        //                         <input id="name" type="text" className="input" name="name" value={formData.name} onChange={handleChange} />
        //                     </div>
        //                     <div className="group">
        //                         <label htmlFor="email" className="label">Email</label>
        //                         <input id="email" type="email" className="input" name="email" value={formData.email} onChange={handleChange} />
        //                     </div>
        //                     <div className="group">
        //                         <label htmlFor="password" className="label">Password</label>
        //                         <input id="password" type="password" className="input" name="password" value={formData.password} onChange={handleChange} />
        //                     </div>
        //                     <div className="group">
        //                         <label htmlFor="confirmPassword" className="label">Confirm Password</label>
        //                         <input id="confirmPassword" type="password" className="input" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        //                     </div>
        //                     <div className="group">
        //                         <input id="rememberMe" type="checkbox" className="check" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
        //                         <label htmlFor="rememberMe"><span className="icon"></span> Keep me Signed in</label>
        //                     </div>
        //                     <div className="group">
        //                         <input type="submit" className="button" value="Register" />
        //                     </div>
        //                 </form>
        //                 <div className="hr"></div>
        //                 <div className="foot-lnk">
        //                     <a href="#forgot">Forgot Password?</a>
        //                 </div>
        //             </div>
        //             <div className="sign-up-htm">

        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;
