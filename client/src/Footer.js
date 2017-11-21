import React, {Component} from 'react';
import Common from './Common';
import {Container, Grid, Header, List, Icon, Button, Segment, Divider, Menu, Select} from 'semantic-ui-react';

export default class Footer extends Component {

    render() {
        return (
            <Segment
                inverted
                vertical
                className={'Footer'}
            >
                <Container textAlign='center'>
                    <Grid columns={4} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column>
                                <List verticalAlign={'middle'} className={'footer'}>
                                    <List.Item>
                                        <Select className={'footer-select'} placeholder='Select Language'
                                                  options={Common.languageOptions}/>
                                    </List.Item>
                                    <List.Item>
                                        <Select className={'footer-select'} placeholder='Select your country'
                                                options={Common.countryOptions} />
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Beers'/>
                                <List link inverted>
                                    <List.Item as='a'>Sign up free</List.Item>
                                    <List.Item as='a'>Discover the Beer</List.Item>
                                    <List.Item as='a'>Get More Beer</List.Item>
                                    <List.Item as='a'>Search For Beer</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Breweries'/>
                                <List link inverted>
                                    <List.Item as='a'>How it works</List.Item>
                                    <List.Item as='a'>Why use AGNT?</List.Item>
                                    <List.Item as='a'>Finding the right Breweries</List.Item>
                                    <List.Item as='a'>List your Breweries</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Company'/>
                                <List link inverted>
                                    <List.Item as='a'>Blog</List.Item>
                                    <List.Item as='a'>About AGNT</List.Item>
                                    <List.Item as='a'>Press</List.Item>
                                    <List.Item as='a'>Help</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section/>
                    <Menu inverted secondary className={'footer-Menu'}>
                        <Menu.Item as='a' href={'/'}>AGNT</Menu.Item>
                        <Menu.Item as='a' className={'copyright'}>@ 2017 AGNT inc.</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item as='a' className={'copyright'}>Privacy</Menu.Item>
                            <Menu.Item as='a' className={'copyright'}>Terms</Menu.Item>
                            <Menu.Menu position='right' className={'hidden-xs'}>
                                <Menu.Item as='a' icon={'facebook f'}/>
                                <Menu.Item as='a' icon={'twitter'}/>
                                <Menu.Item as='a' icon={'instagram'}/>
                                <Menu.Item as='a' icon={'youtube'}/>
                            </Menu.Menu>
                            <Menu.Item className={'hidden-xs'}>
                                <Button inverted basic color='grey'>
                                    <Icon name={'apple'}/>
                                    Available on the App Store
                                </Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Menu inverted={true} secondary className={'footer-menu-one'}>
                        <Menu.Item>
                            <Menu.Item as='a' icon={'facebook f'}/>
                            <Menu.Item as='a' icon={'twitter'}/>
                            <Menu.Item as='a' icon={'instagram'}/>
                            <Menu.Item as='a' icon={'youtube'}/>
                        </Menu.Item>
                        <Menu.Item>
                            <Button inverted basic color='grey'>
                                <Icon name={'apple'}/>
                                Available on the App Store
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Container>
            </Segment>
        )
    }
}