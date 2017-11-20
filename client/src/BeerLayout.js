import React, {Component} from 'react';
import Client from "./Client";
import {Dimmer, Loader, List, Segment, Grid, Button, Image, Header, Container, Divider} from 'semantic-ui-react'
import FixedMenuLayout from './Menu';
import Footer from './Footer';
import Assets from "./Assets";

class Beer extends Component {
    state = {
        beerInfo: {},
        searchId: this.props.match.params.id,
        loaderActive: true
    };
    setInitialState = () => {
        Client.getBeer(this.props.match.params.id, results => {
            if (results.status === 'success') {
                this.setState({
                    beerInfo: results.data,
                    loaderActive: false
                });
            }
        });
    };

    componentWillMount() {
        this.setInitialState()
    }

    render() {
        const {beerInfo, loaderActive} = this.state;
        return (
            <div>
                <Dimmer active={loaderActive} page={true}>
                    <Loader size='massive'>Loading Beer Data...</Loader>
                </Dimmer>
                <FixedMenuLayout hideSearch={true}/>
                <Segment style={{paddingTop: '8em', paddingBottom: '4em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' width={6}>
                                <Image
                                    rounded
                                    size='large'
                                    src={beerInfo.hasOwnProperty('labels') ? beerInfo.labels.large : Assets.Images.matthew}
                                />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{fontSize: '2em'}}>{beerInfo.nameDisplay}</Header>
                                <List horizontal divided relaxed>
                                    <List.Item><b>Organic</b> : {beerInfo.isOrganic}</List.Item>
                                    <List.Item><b>Status</b> : {beerInfo.statusDisplay}</List.Item>
                                </List>
                                <List horizontal divided relaxed>
                                    <List.Item><b>Create Date</b> : {beerInfo.createDate}</List.Item>
                                    <List.Item><b>Update Date</b> : {beerInfo.updateDate}</List.Item>
                                </List>
                                <Divider/>
                                <Header as='h3' style={{fontSize: '1.2em', marginTop: '0'}}>Style</Header>
                                <Container>
                                    <p style={{marginBottom:'5px'}}><b>Name</b> : {beerInfo.name}</p>
                                    <p style={{marginBottom:'5px'}}><b>Description</b></p>
                                    <Container textAlign='justified'>
                                        {beerInfo.description}
                                    </Container></Container>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge' as={'a'} href={'/'}>Go Back</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer/>
            </div>
        );
    }
}

export default Beer