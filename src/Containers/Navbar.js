import React from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ logoutHandler }) => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Checker+</Link>
        {/* <a className="navbar-brand" href="google.com">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="braille icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
          {user.user && user.user.loggedIn === true
            ? (
              <>
                {}
                <i className="user outline icon" />
                <span className="name">{user.user.username}</span>
                <button type="button" className="logout" onClick={logoutHandler}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
        </div>
      </div>
    </nav>
  // <nav>

  //   <div />
  //   <div className="content-wrapper">
  //     <div className="left"><Link to="/">Checker+</Link></div>
  //     <div className="right">
  // {user.user && user.user.loggedIn === true
  //   ? (
  //     <>
  //       {}
  //       <i className="user outline icon" />
  //       <span className="name">{user.user.username}</span>
  //       <button type="button" className="logout" onClick={logoutHandler}>Logout</button>
  //     </>
  //   ) : (
  //     <>
  //       <Link to="/login">Login</Link>
  //       <Link to="/signup">Signup</Link>
  //     </>
  //   )}
  //     </div>
  //   </div>
  // </nav>

  );
};

Navbar.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};

export default Navbar;
