import React, { Component } from 'react';
import ProductInList from './product-in-list';
import ProductInGrid from './product-in-grid';
import { Redirect } from 'react-router';
//import createHistory from 'history/createBrowserHistory'

//export const history = createHistory();

class ProductDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect : false,
        }
    }
    render(){
        if (this.state.redirect === true){
            const redirectPath = '/productDetails/'+this.props.product.id;
            return <Redirect to={redirectPath}/>;
        }

        const baseURL = 'http://localhost/';

        let productDisplay = null;
        productDisplay = this.props.currentView === 'list'?
            <ProductInList product={this.props.product} onClick={() => this.onPlaceAnOrderClick()} baseURL={baseURL}/> :
            <ProductInGrid product={this.props.product} onClick={() => this.onPlaceAnOrderClick()} baseURL={baseURL}/>;

        return(
            <span>
                {productDisplay}
                {this.props.currentView === 'grid' && (parseInt(this.props.index, 10) % 3 === 0? <div><br /></div> : '') }  
            </span>
        );
    }
    
    onPlaceAnOrderClick(){
        //history.push('/productDetails/'+this.props.product.id);
        this.setState({redirect:true});
    }
}

export default ProductDisplay;