import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className="logo">
                    <img className="logoImage" src="./XMPie.png" alt="logoImage"/>
                    <label className="userGreeting">Hello user.</label>
                </section>
                <section className="navigation">
                    <span className="tab homeTab">Home</span>
                    <span className="tab myAccountTab">My Account</span>
                    <span className="tab cartTab">Cart</span>
                </section>
                <section className="actions">
                    <section className="links">
                        <a className="link">Drafts</a>
                        <a className="link">Help</a>
                        <a className="link">Sign Out</a>
                    </section>
                    <br />
                    <section className="culture">
                        <select className="flags">
                            <option value="EN-us">EN-US</option>
                            <option value="FR-fr">FR-fr</option>
                        </select>
                        <select className="currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </section>
                </section>
            </header>
        );
      }
}

export default Header;