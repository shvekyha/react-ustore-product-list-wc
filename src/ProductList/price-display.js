import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { selectedValue: state.selectedValue};
};


class ConnectedPriceDisplay extends Component {

    constructor(props){
        //console.log('ConnectedPriceDisplay constructor()');
        super(props);
        // this.state = {
        //     price : this.props.selectedValue * 5
        // }

    }

    componentDidMount() {
        //console.log('ConnectedPriceDisplay componentDidMount()');

        console.log('ConnectedPriceDisplay componentDidMount() this.props.selectedValue:'+ this.props.selectedValue);
        //console.log('ConnectedPriceDisplay componentDidMount() this.state.price:'+this.state.price);
 
    }
    
    componentWillMount() {
        //console.log('ConnectedPriceDisplay componentWillMount()');
    }

    componentDidUpdate(){
        console.log('ConnectedPriceDisplay componentDidUpdate() this.props.selectedValue:'+ this.props.selectedValue);
        //console.log('ConnectedPriceDisplay componentDidUpdate() this.state.price:'+this.state.price);

    }

    render() {
        console.log('ConnectedPriceDisplay render() this.props.selectedValue:'+ this.props.selectedValue);
        //console.log('ConnectedPriceDisplay render() this.state.price:'+this.state.price);
        let price = parseInt(this.props.selectedValue) + 5;
        return (
            <div>
                <br />
                <div>PriceDisplay component</div>
                <div>Selected Value: {this.props.selectedValue}</div>
                <div>Calculated Price (value + fixed $5): {price}</div>
            </div>
        );
    }
}

const PriceDisplay = connect(mapStateToProps)(ConnectedPriceDisplay);

export default PriceDisplay;