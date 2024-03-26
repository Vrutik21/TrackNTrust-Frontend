import React, { useEffect, useState } from 'react';
import './front_page.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [responseData, setResponseData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/login-page`,
            {
              headers: {
                "ngrok-skip-browser-warning": "69420",
              },
            }
          );
          setResponseData(response.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
    return (
        <div className="login-container">
        <div className="login-wrap">
            <center>
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                <label htmlFor="tab-1" className="tab">Login</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab"></label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            navigate("/")
                            }}>
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked />
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                        </form>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?</label>
                        </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
        </div>
    );
}

export default LoginForm;
