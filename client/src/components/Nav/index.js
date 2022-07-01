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

    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">

        <a className="navbar-brand" href="/">Felix Acevedo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mr-auto mt-2 mt-lg-0">
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
        </div>

    </nav>

    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Felix Acevedo</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Nav;
