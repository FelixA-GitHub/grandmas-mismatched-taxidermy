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
    <MDBFooter className='footer-bg text-center text-black'>

      <div className='text-center p-4 margin-bottom' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#4287f5' }}
            href='https://github.com/FelixA-GitHub/Grandmas-Mismatched-Taxidermy.git'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </div>
        <div className='mt-2'>
          © 2022 Felix Acevedo, Ryan Uhl, Ryanne Bennett, Joseph Shaw
        </div>
      </div>

    </MDBFooter>
  );

};



export default Footer;
