import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, Icon, CardText, Tooltip } from 'react-mdl';

class FindAHome extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
        this.changeTabs = this.changeTabs.bind(this);
    }

    changeTabs(tabId) {
        this.setState({ activeTab: tabId })
    }

    toggleView() {
        if(this.state.activeTab === 0) {
            return(
                <div className="grid-listings">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://rlp.jumplisting.com/photos/8/90/33/91/8903391_24171915_lg.jpg) center / cover' }}> $915,000 </CardTitle>
                        <CardText>103 Causland Lane - Richmond Hill, ON</CardText>
                        <CardActions border>
                            <Button colored>Save</Button>
                            <Button colored>View</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <Tooltip label="New Listing" position="left">
                                <Icon name="flag"></Icon>
                            </Tooltip>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://rlp.jumplisting.com/photos/8/90/34/11/8903411_24172165_lg.jpg) center / cover' }}> $558,000 </CardTitle>
                        <CardText>302b-9090 Yonge St - Richmond Hill, ON</CardText>
                        <CardActions border>
                            <Button colored>Save</Button>
                            <Button colored>View</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <Tooltip label="New Listing" position="left">
                                <Icon name="flag"></Icon>
                            </Tooltip>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://rlp.jumplisting.com/photos/8/90/17/46/8901746_24167216_lg.jpg) center / cover' }}> $898,888 </CardTitle>
                        <CardText>543 Carrville Rd - Richmond Hill, ON</CardText>
                        <CardActions border>
                            <Button colored>Save</Button>
                            <Button colored>View</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff'}}>
                            <Tooltip label="New Listing" position="left">
                                <Icon name="flag"></Icon>
                            </Tooltip>
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        } else {
            return(
                <div className="amcharts-chart-div">
                    <h1>Map View</h1>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <p style={{ color: '#fff'}}>This is our main page where there's a map and list view tab that the user can toggle.</p>
                <Tabs activeTab={this.state.activeTab} onChange={this.changeTabs} ripple>
                    <Tab>Grid View</Tab>
                    <Tab>Map View</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleView()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }    
}

export default FindAHome;