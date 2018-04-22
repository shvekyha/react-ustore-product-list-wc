import React, { Component } from 'react';
import { ProductService } from './product-service';
import { Redirect } from 'react-router';
import DdlComponent from './ddl-component';
import PriceDisplay from './price-display';

import '../web-components/calculator-web-component.js';

class ProductDetails extends Component {
    constructor(props){
        console.log('ProductDetails constructor()');
        super(props);
        this.state = {
            redirect : false,
            productGroupList: [],        
        }

        // This binding is necessary to make `this` work in the callback
        this.onClickBack = this.onClickBack.bind(this);
    }

    componentDidMount() {
        console.log('ProductDetails componentDidMount()');

        this.FetchProductGroupData();
    }
    
    componentWillMount() {
        console.log('ProductDetails componentWillMount()');
    }

    render() {
        console.log('ProductDetails render()');
        const productID = this.props.match.params.productID;
        if (this.state.redirect === true){
            const group = ProductService.getGroupByProductID(productID, this.state.productGroupList);
            const redirectPath = '/productList/'+ group.id;
            return <Redirect to={redirectPath}/>;
        }
        else {
            const product = ProductService.getProduct(productID, this.state.productGroupList);
            let buttonText = "< Back";
            return (
                <section className="innerSection">
                    <h1>Here are the details for product:</h1><h2>{(product !== null)? product.name : ''}</h2>
                    <div className="back">
                    <button onClick={this.onClickBack}>{buttonText}</button>
                    </div>
                    <x-calculator a={3} b={2}></x-calculator>
                    <DdlComponent></DdlComponent>
                    <PriceDisplay></PriceDisplay>
                </section>
            );
        }
    }

    FetchProductGroupData(){
        console.log('ProductDetails FetchProductGroupData');

        let getRealMock = true;
        if (getRealMock === true){
            console.log('getting mock data');
            let productGroupMock = ProductService.GetMockFromWebAPI();
            this.setState({
                productGroupList : productGroupMock,
            });
        }
        else{
            console.log('getting real data');
            let that = this;
            
            let request = ProductService.GetFetchRequest();
            fetch(request)
            .then(function(response) {
                var contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            })
            .then(function(json) { 
                //console.log(json, typeof json);
                that.setState({
                    productGroupList : JSON.parse(json),
                });
            })
            .catch(function(error) { 
                console.log(error);
            });  
        }          
        
    }

    onClickBack(){
        this.setState({redirect:true});
    }
}

export default ProductDetails;