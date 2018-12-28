import React, { Component } from 'react';
import { Header, Navigation, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {

    render() {
        return(
            <div>
                <Header className="header-color" title="real-estate" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/find-a-home">Find a Home</Link>
                        <Link to="/find-an-agent">Find an Agent</Link>
                        <Link to="/info-and-advice">Info and Advice</Link>
                        <Link to="/about-us">About Us</Link>
                    </Navigation>
                    <Textfield
                        value=""
                        onChange={() => {}}
                        label="Search"
                        expandable
                        expandableIcon="search"
                    />
                </Header>
            </div>
        )
    }    
}

export default HeaderComponent;