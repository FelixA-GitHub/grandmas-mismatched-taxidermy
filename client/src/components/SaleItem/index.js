import React from "react";
import { removeHyphens, capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';

function SaleItem() {

    return (
        <div className="container-fluid">
            <div className="row my-2 justify-content-center">
                <div className="card p-1" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/grandma_elderly_nanny_avatar-512.png"
                        alt="name" />
                    {/* <div className="card-img-overlay example"> */}
                        <div className="card-body content">
                            <p className="card-text">description</p>
                            <p className="card-text">price</p>
                            <div>
                                <a href="/">
                                <i className="fas fa-money-bill-wave-alt"></i>
                                </a>
                            </div>

                        </div>

                </div>
            </div>
        </div>

    );
};

export default SaleItem;