import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap/dist/js/bootstrap.min.js";


function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    // Navbar
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      {/* Container wrapper */}
      <div className='container'>
        {/* Navbar brand */}
        <a className="navbar-brand" href="/">
          make this a logo
        </a>
        {/* Toggle button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto mt-2 mt-lg-0">
            {pages.map((Page) => (
              <div
                className={`nav-item nav-link ${currentPage.name === Page.name && 'navActive'}`} key={Page.name}
              >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </div>
            ))}
          </div>
          {/* Right items */}
          {/* <div class="d-flex align-items-center">
            <button type="button" class="btn btn-link px-0 me-2">
              Login
            </button>
          </div> */}
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-primary me-2 my-2">
              Sign up for free
            </button>
            {/* <a
              class="btn btn-dark px-3"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
            ><i class="fab fa-github"></i
            ></a> */}
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
