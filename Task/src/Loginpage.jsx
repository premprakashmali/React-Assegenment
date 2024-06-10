import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import './Style.css'


const Loginpage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{backgroundImage:'url("https://i.pinimg.com/736x/96/6d/d0/966dd094f8f12ae1286c75953ae2c964.jpg")',backgroundSize:'cover',height:"100vh"}}>
            <div class="container d-flex justify-content-end" >
                <div class="toggle">
                    <input type="checkbox" onClick={toggleTheme} />
                    <span class="button" ></span>
                    <span class="label">☼</span>
                </div>
            </div>
            <div className='container' style={{ maxWidth: '400px' }}>
                <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
                    <div>
                        <form>
                            <h1 style={{fontSize:'28px',fontWeight:'700'}}>Log in</h1>
                            {/* Email input */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example1">Email address</label>
                                <input type="email" id="form2Example1" className="form-control" required/>
                            </div>
                            {/* Password input */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                                <input type="password" id="form2Example2" className="form-control" required/>
                            </div>
                            {/* 2 column grid layout for inline styling */}
                            
                            {/* Submit button */}
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Login</button>
                            <div class="divider d-flex justify-content-center ">
                                <p class=" fw-bold text-muted">OR</p>
                            </div>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block mb-4 w-100"><i class="fa-solid fa-circle-plus me-3" style={{ color: "#ffffff" }}></i>Creat account</button>
                        </form>

                    </div>


                </div>

            </div>
        </div>


    );
};

export default Loginpage;
