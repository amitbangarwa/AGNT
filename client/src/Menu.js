import React, {Component} from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react'
import Assets from "./Assets";
import BeerSearch from "./Search";

const FixedMenuLayout = () => (
    <div>
        <Menu fixed='top' inverted>
            <Menu.Item as='a' header>
                <Image
                    size='mini'
                    src={Assets.Images.logo}
                    style={{marginRight: '1.5em'}}
                />
                AGNT
            </Menu.Item>
            <Dropdown item simple text='Event Services'>
                <Dropdown.Menu>
                    <Dropdown.Item>Beer</Dropdown.Item>
                    <Dropdown.Item>Brewery</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Header>Event</Dropdown.Header>
                    <Dropdown.Item>Award Place</Dropdown.Item>
                    <Dropdown.Item>Award Category</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu>
                <Menu.Item>
                    <div className="Search">
                        <BeerSearch
                            input={{
                                icon: 'search',
                                iconPosition: 'left',
                                transparent: true,
                                inverted: true,
                                placeholder: 'What type of beer are you looking for?'
                            }}
                        />
                    </div>
                </Menu.Item>
            </Menu.Menu>
        </Menu>

        <Container text style={{marginTop: '7em'}}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>A text container is used for the main container, which is useful for single column layouts.</p>

            <Image src={Assets.Images.mediaParagraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
            <Image src={Assets.Images.paragraph} style={{marginTop: '2em'}}/>
        </Container>

        <Segment
            inverted
            vertical
            style={{margin: '5em 0em 0em', padding: '5em 0em'}}
        >
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1'/>
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2'/>
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3'/>
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Footer Header'/>
                            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider inverted section/>
                <Image
                    centered
                    size='mini'
                    src={Assets.Images.logo}
                />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Site Map</List.Item>
                    <List.Item as='a' href='#'>Contact Us</List.Item>
                    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                    <List.Item as='a' href='#'>Privacy Policy</List.Item>
                </List>
            </Container>
        </Segment>
    </div>
);

export default FixedMenuLayout