import React from 'react';
import { useParams } from 'react-router-dom';
import SaleItem from '../components/SaleItem';

// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';

const Listing = (props) => {
  const { id: itemId } = useParams();

  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { id: itemId },
  });

  const item = data?.item || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SaleItem itemId={item._id} />
    </div>
  );
};

export default Listing;
