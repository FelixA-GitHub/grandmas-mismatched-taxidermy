// import React, { useState } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
// // import Container from 'react-bootstrap/Container';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import SaleItem from '../SaleItem';
// import './index.js';
// import 'animate.css';
// import 'bootstrap/dist/css/bootstrap.css';




// //Listing function holds all the items to be presented to the viewer
// function Listing() {
//     const [pages] = useState([
//         {
//             name: "listing",
//             description: 'Choose from our wares!'
//         }
//     ]);
//     const [currentPage] = useState(pages[0]);

//     const [items] = useState([
//         {
//             name: 'kermit',
//             description: 'We have a celebrity in the house!',
//             price: '$59.99',
//             purchase: 'https://github.com/FelixA-GitHub/run-buddy.git'
//         },
//         {
//             name: 'bunny-in-dress',
//             description: "Isn't she lovely? - Stevie Wonder",
//             price: '75.00',
//             purchase: 'https://github.com/FelixA-GitHub/Data-Mammoth.git'
//         }
//     ])

//     return (

//         <section className="p-4 bg-listing">
//             <div>
//                 <Container fluid className="p-0">
//                     <h1 className="text-center margin-top listing-text">{capitalizeFirstLetter(currentPage.name)}</h1>
//                     <h3 className="text-center margin-top listing-text">{capitalizeFirstLetter(currentPage.description)}</h3>
//                     <Row className=''>

//                         {items.map((item, idx) => (
//                             <Col md={6}>
//                                 <div className="item-animation">
//                                     {/* <SaleItem
//                                         item={item}
//                                         key={"item" + idx}
//                                     /> */}
//                                 </div>

//                             </Col>
//                         ))}
//                     </Row>

//                 </Container>
//             </div>

//         </section>
//     );
// };

// export default Listing;