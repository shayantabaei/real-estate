import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Textfield, Drawer, Content } from 'react-mdl';
import Routes from './components/routes'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
            <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                <Header transparent title="real-estate" style={{color: 'white'}}>
                    <Navigation>
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
                <Drawer title="real-estate">
                    <Navigation>
                        <Link to="/find-a-home">Find a Home</Link>
                        <Link to="/find-an-agent">Find an Agent</Link>
                        <Link to="/info-and-advice">Info and Advice</Link>
                        <Link to="/about-us">About Us</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Routes>
                        <div className="page-content" />
                    </Routes>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
