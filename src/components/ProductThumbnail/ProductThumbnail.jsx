import React from 'react';
import './ProductThumbnail.css'

const ProductThumbnail = (props) => {
    return (
        <div className="thumbnail">
            <div className="thumbnail-photo">
                {/* <img className="pt-img" src="https://i.imgur.com/iSysisC.png" alt="Skim is a Scam"/> */}
                <img className="pt-img" src={props.product.photo} alt={props.product.displayName}/>
                <div className="img-cover">
                    {props.product.displayName.toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default ProductThumbnail