import React, { Component } from 'react';

class ProductInGrid extends Component {
    render() {
        const product = this.props.product;
        const imageSrc = this.props.baseURL + product.thumbnailURL;
        return (
            <div className="product grid">
                <div className="productThumbnail">
                    <img className="productThumbnailImage" src={imageSrc} alt="product thumbnail"/>
                </div>
                <div className="productInfo">
                    <div><label className="productName">{product.name}</label></div>
                    <span className="productDescription">{product.description}</span>
                </div>
                <div className="placeAnOrder">
                    <button className="btnPlaceAnOrder" onClick={() => this.props.onClick()}>Place an order ></button>
                </div>    
            </div>       
        );
      }
}

export default ProductInGrid;