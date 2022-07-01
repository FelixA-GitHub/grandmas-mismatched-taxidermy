import React, { useState } from "react";
// import coverImage from '../../assets/cover/cover-image.jpg';
// import avatar from '../../assets/avatar/avatar.jpg'
import { capitalizeFirstLetter } from "../../utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

function Home() {

  const [pages] = useState([
    {
      name: "Grandma's Mismatched Taxidermy",
      description: 'A marketplace for all crap taxidermy lovers'

    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <section className="Home-example">
      
        <div className="card border-0">
          {/* <img className="card-img-top vh-100" src={coverImage} alt="light bulb"></img> */}
          <div className="card-img-overlay card-inverse Home-content scroll-text">
            <h1 className="Home-title" style={{ fontSize: "40px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            {/* <img className="avatar-img" src={avatar} alt="avatar"></img> */}
            <div>            
              <p className="Home-desc Home-text">{currentPage.description}</p>
            </div>
          </div>
        </div>
    </section>
  
    // <Container>
    //   <Row>
    //     <Col></Col>
    //     <Col></Col>
    //   </Row>
    // </Container>
  );
}

export default Home;