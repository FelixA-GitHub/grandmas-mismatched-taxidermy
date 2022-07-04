import React from 'react';

function Header(props) {

    return (
        <header className='sticky-top navbar-light bg-light'>
            {props.children}
        </header>
    );
};

export default Header;