import React, { Component } from 'react';

class GroupTitle extends Component{
    render(){
        const group = this.props.group;
        return (
            <section className="groupTitle">
                <h2 className="groupName">{group.name}</h2>
                <h3 className="groupDescription">{group.description}</h3>
            </section>
        );
    }
}

export default GroupTitle;