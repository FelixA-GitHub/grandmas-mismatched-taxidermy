import React from "react";
// import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../../utils/queries';
import Listing from "../Listing";

const SaleItem = () => {
    

    const { loading, data } = useQuery(QUERY_ALL_ITEMS);

    const items = data?.items || [];
    console.log(items)

    return (
        <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Listing items={items}/>
      )}
    </div>
  </div>
</main>

    );
};

export default SaleItem;