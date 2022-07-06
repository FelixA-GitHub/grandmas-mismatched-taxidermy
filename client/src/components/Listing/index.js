import React from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.js';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';

const Listing = ({ items, title }) => {


  return (
    <section className="container-fluid bg-listing p-2">
      <div className="row my-2 p-2">

        <Container fluid className="p-4">
          <Row className=''>
            {items &&
              items.map(item => (
                <Col md={3}>

                  <div key={item._id} className="item-animation card p-1 m-4 " style={{ width: "18rem" }} >
                    <img className="card-img-top" alt={item.name} src={item.image}></img>
                    <h5 className="card-header">{item.description}</h5>
                    <p className="card-header">${item.price}</p>

                    <p className="card-header">Added {item.name} on {item.created}</p>

                    <a href="https://github.com/FelixA-GitHub/Grandmas-Mismatched-Taxidermy">
                      <i className="fas fa-money-bill-wave-alt"></i>
                    </a>





                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Listing;
