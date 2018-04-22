import React, { Component } from 'react';
import { setSelected } from "./actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        setSelected: selectedValue => dispatch(setSelected(selectedValue))
    };
  };

class ConnectedDdlComponent extends Component {

    constructor(props){
        
        super(props);
        this.state = {
            selectedValue : '1',      
        }

       console.log('DdlComponent constructor() this.state.selectedValue:'+this.state.selectedValue);
        // This binding is necessary to make `this` work in the callback
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        //console.log('DdlComponent componentDidMount()');
        console.log('DdlComponent componentDidMount() this.state.selectedValue:'+this.state.selectedValue);
    }
    
    componentWillMount() {
        //console.log('DdlComponent componentWillMount()');
    }

    render() {
        //console.log('DdlComponent render()');
        return (
            <div>
                <div><b>DdlComponent component</b></div>
                <div>Select Paper Type:</div>
                <div>
                    <select onChange={this.handleOnChange} defaultValue={this.state.selectedValue}>
                        <option value="1">Matt $1</option>
                        <option value="2">Gloss $2</option>
                        <option value="3">Premium $3</option>
                    </select>
                </div>
            </div>
        );
    }

    handleOnChange(event){
        const selectedValue = event.target.value;
        console.log('handleOnChange event.target.value: '+event.target.value);
        this.setState({ selectedValue: selectedValue });
        this.props.setSelected({ selectedValue });
    }
}

const DdlComponent = connect(null, mapDispatchToProps)(ConnectedDdlComponent);

export default DdlComponent;