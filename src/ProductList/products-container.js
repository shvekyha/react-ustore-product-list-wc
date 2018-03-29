import React, { Component } from 'react';
import ProductDisplay from './product-display';

class ProductsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentView : 'list',
        }

        // This binding is necessary to make `this` work in the callback
        this.onCheckToggle = this.onCheckToggle.bind(this);
    }

    render(){
        let listItems = [];
        const productList = this.props.group.productList;
        listItems = productList.map(
            (product, index) =>
                <ProductDisplay index={index+1} key={product.id} product={product} currentView={this.state.currentView}/>
        );

        return (
            <section className="productsContainer">
                <div className="cbDisplayGrid">
                    <label>
                        <input type="checkbox" onChange={this.onCheckToggle}/>Display products in grid
                    </label>
                </div>
                {listItems}
            </section>
        );
    }

    onCheckToggle(event){
        const view = event.target.checked ? 'grid' : 'list';
        this.setState({currentView : view});
    }

}

export default ProductsContainer;