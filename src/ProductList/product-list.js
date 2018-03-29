import React, { Component } from 'react';
import Main from './main';
import ProductService from './product-service';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedGroup : null,
            productGroupList: [],
        }
    }
    
    componentDidMount() {
        console.log('ProductList componentDidMount()');

        this.FetchProductGroupData();        
    }

    render() {
        console.log('ProductList render selectedGroup: '+this.state.selectedGroup);
        return (
            <Main selectedGroup={this.state.selectedGroup}/>
        );
    }

    FetchProductGroupData(){
        console.log('ProductList FetchProductGroupData');

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
                that.UpdateSelectedgroup();
            })
            .catch(function(error) { 
                console.log(error);
            });            
        }
    }

    UpdateSelectedgroup(){
        if (this.props.match && this.props.match.params.groupID !== undefined){
            let groupID = this.props.match.params.groupID;
            let group = ProductService.getGroup(groupID, this.state.productGroupList);
            this.setState({
                selectedGroup : group,
            });
        }
    }
}

export default ProductList;