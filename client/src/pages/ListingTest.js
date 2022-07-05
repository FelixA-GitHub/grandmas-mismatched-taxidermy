// import React from 'react';
// import { useParams } from 'react-router-dom';
// import SaleItem from '../components/SaleItem';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_ITEM } from '../utils/queries';

// const Listing = (props) => {
//     const { id: itemId } = useParams();

//     const { loading, data } = useQuery(QUERY_ITEM, {
//         variables: { id: itemId },
//     });

//     const item = data?.item || {};

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <div className="card mb-3">
//                 <p className="card-header">
//                     <span style={{ fontWeight: 700 }} className="text-light">
//                         {item.name}
//                     </span>{' '}
//                     item on {item.created}
//                 </p>
//                 <div className="card-body">
//                     <p>{item.description}</p>
//                 </div>
//             </div>

//             {Auth.loggedIn() && <SaleItem itemId={item._id} />}
//         </div>
//     );
// };

// export default Listing;
