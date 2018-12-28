import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Routes from './config/routes';
import { Link } from 'react-router-dom'
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';

class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <HeaderComponent />
                <Drawer title="real-estate">
                    <Navigation>
                        <Link to="/">Home</Link>
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
                <FooterComponent />
            </Layout>
        </div>
    );
  }
}

export default App;
