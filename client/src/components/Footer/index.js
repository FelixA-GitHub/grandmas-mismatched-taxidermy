import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';

function Footer() {

    return (
        <MDBFooter className='bg-light text-center text-white'>
          <div className='container p-4 pb-0'>
            <section className='mb-4'>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='https://stackoverflow.com/users/17420314/felix'
                role='button'
              >
                <MDBIcon fab icon='stack-overflow' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='https://www.linkedin.com/in/felix-acevedo-b7596520a/'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </a>
    
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#333333' }}
                href='https://github.com/FelixA-GitHub'
                role='button'
              >
                <MDBIcon fab icon='github' />
              </a>
            </section>
          </div>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Felix Acevedo
          </div>
        </MDBFooter>
      );

    //social media icons and corresponding links
    // const icons = [
    //     {
    //         name: "fab fa-github",
    //         link: "https://github.com/FelixA-GitHub"
    //     },
    //     {
    //         name: "fab fa-linkedin",
    //         link: "https://www.linkedin.com/in/felix-acevedo-b7596520a/"
    //     },
    //     {
    //         name: "fab fa-stack-overflow",
    //         link: "https://stackoverflow.com/users/17420314/felix"
    //     }

    // ]

    // return (
    //     <section>
    //         <footer>
    //             <div className="divbar navbar-light bg-light">
    //                 <div className="navbar-brand" href="#home">{icons.map(icon =>
    //                 (
    //                     <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
    //                         <i className={icon.name} aria-hidden="true"></i>
    //                     </a>
    //                 )
    //                 )}
    //                 </div>
    //             </div>
    //         </footer>
    //     </section>
    // );
};



export default Footer;
