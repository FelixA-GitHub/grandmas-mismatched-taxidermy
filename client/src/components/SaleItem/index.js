import React from "react";
// import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../../utils/queries';
import Listing from "../Listing";

<<<<<<< HEAD
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
        <Listing items={items} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
=======
function SaleItem({ item }) {
    const { name, description, price, purchase } = item;

    return (
        <div className="container-fluid">
            <div className="row my-2 justify-content-center">
                <div className="card p-1" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={require(`../../assets/listing/${name}.jpg`)}
                        alt={removeHyphens(name) && capitalizeFirstLetter(name)} />
                    {/* <div className="card-img-overlay example"> */}
                        <div className="card-body content">
                            <p className="card-text">{description}</p>
                            <p className="card-text">{price}</p>
                            <div>
                                <a href={purchase}>
                                <i className="fas fa-money-bill-wave-alt"></i>
                                </a>
                            </div>

                        </div>
                    {/* </div> */}

                </div>
            </div>
        </div>
>>>>>>> ba45b17b7fe73275abcb07d1118ed4b9199b38ea

    );
};

export default SaleItem;