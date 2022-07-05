import React from 'react';
import Avatar from '../../assets/avatar/Grandma.PNG';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        // <header className='sticky-top navbar-light bg-light'>
        //     {props.children}
        // </header>
        <header className="sticky-top flex-row align-center">
            {/* <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h6 className='justify-content-center mt-2'>Grandma's Mismatched Taxidermy</h6>
                </Link>
                <nav className="navbar navbar-expand-lg sticky-top px-3">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/home">Home</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/listing">Listing</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div> */}

            <nav className="navbar navbar-expand-lg sticky-top px-3">
                {/* Container wrapper */}
                <div className='container-fluid'>
                    {/* Navbar brand */}
                    <a className="navbar-brand" href="/">
                        <img src={Avatar} alt="Rockin Grandma" width="30" height="55" className='avatar' />
                    </a>
                    <h3 className='justify-content-center header-title'>Grandma's Mismatched Taxidermy</h3>
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="nav nav-pills nav-fill text-info nav-button-position" id="navbarNav">
                            <div className="navbar-nav m-0 p-0 mt-lg-0">
                                {Auth.loggedIn() ? (
                                    <>
                                        <Link class="nav-item nav-link bg-info" to="/listing">Listing</Link>
                                        <Link class="nav-item nav-link bg-info" to="/comments">Comments</Link>
                                        <a class="nav-item nav-link bg-info" href="/" onClick={logout}>
                                            Logout
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <Link class="nav-item nav-link bg-info" to="/listing">Listing</Link>
                                        <Link class="nav-item nav-link bg-info" to="/login">Login</Link>
                                        <Link class="nav-item nav-link bg-info" to="/signup">Signup</Link>
                                    </>
                                )}
                            </div>
                            {/* Right items */}
                            {/* <div className="d-flex align-items-center">
            <button type="button" className="btn btn-link px-0 me-2">
              Login
            </button>
          </div> */}
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;