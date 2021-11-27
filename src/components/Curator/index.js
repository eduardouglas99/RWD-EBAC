import React from "react";
import './styles.scss';

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <div className="photo__content"></div>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Lorem Ipsum</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis nam! Consequatur atque porro repudiandae perspiciatis, inventore est delectus.</p>
            </div>
        </div>
    )
}

export default CuratorItem;