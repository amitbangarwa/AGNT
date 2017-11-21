import React, {Component} from 'react';
import {Container, Card, Menu, Dropdown, Image, Icon, Button, Visibility} from 'semantic-ui-react'
import Assets from "./Assets";
import Client from "./Client";
import Filter from './Filter';

let prevNumber = 0;
let currentNumber = 12;

class Content extends Component {
    state = {
        isLoading: false,
        hidden: true,
        calculations: {
            direction: 'none',
            height: 0,
            width: 0,
            topPassed: false,
            bottomPassed: false,
            pixelsPassed: 0,
            percentagePassed: 0,
            topVisible: false,
            bottomVisible: false,
            fits: false,
            passing: false,
            onScreen: false,
            offScreen: false,
            bottomVisibleReverse: false
        },
    };

    componentWillMount() {
        this.setComponent(this.props);
    }

    setComponent = (props) => {
        this.setState({
            searchValue: props.beersInfo ? props.beersInfo.searchValue : '',
            totalNumber: props.beersInfo ? props.beersInfo.totalResults : 0,
            currentPage: props.beersInfo ? props.beersInfo.currentPage : 1,
            beers: props.beersInfo ? props.beersInfo.data : [],
            beersToShow: props.beersInfo ? props.beersInfo.data.slice(prevNumber, currentNumber) : [],
        });
    };

    componentWillReceiveProps(nextProps) {
        prevNumber = 0;
        currentNumber = 12;
        this.setComponent(nextProps);
    }

    handleBeersLimit = () => {
        const {beers, beersToShow} = this.state;
        if (beers.length > currentNumber) {
            prevNumber = currentNumber;
            currentNumber += 12;
            this.setState({
                beersToShow: beersToShow.concat(beers.slice(prevNumber, currentNumber)),
            });
        } else {
            this.setState({isLoading: true});
            this.getMorePage();
        }
    };

    getMorePage = () => {
        let query = {
            q: this.state.searchValue,
            pageNumber: this.state.currentPage + 1
        };
        Client.searchByPage(query, results => {
            if (results.status === 'success' && results.hasOwnProperty('data') && results.data.length > 0) {
                this.setState({
                    currentPage: results.currentPage,
                    beers: this.state.beers.concat(results.data),
                    isLoading: false,
                });
                this.handleBeersLimit();
            } else {

            }
        })
    };

    handleFilterEvent = (event, data) => {
        const {beers} = this.state;
        Filter(data, beers, results => {
            prevNumber = 0;
            currentNumber = 12;
            this.setState({
                //beersToShow: results ? results.slice(prevNumber, currentNumber) : []
                beersToShow: results
            });
        });
    };

    handleVisibilityEvents = (e, { calculations }) => {
        this.setState({ calculations });
        if (calculations.bottomVisible.toString() === 'true') {
            this.setState({hidden:false});
            //this.handleBeersLimit();
        }
        if (calculations.topVisible.toString() === 'true') {
            this.setState({hidden:true});
        }
    };

    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    render() {
        const {beersToShow, isLoading, hidden} = this.state;

        const beerRows = beersToShow.map((beer, idx) => {
            let abv = null, verified = null;
            if (beer.hasOwnProperty('abv')) {
                abv = <span className='date'>ABV {beer.abv}</span>
            }
            if (beer.status === 'verified') {
                verified = <Icon name='check circle'/>
            } else {
                verified = <Icon name='exclamation circle'/>
            }
            return (
                <Card key={idx} raised={true}>
                    <a href={'/beer/' + beer.id}>
                        <Image src={beer.hasOwnProperty('labels') ? beer.labels.large : Assets.Images.matthew}/>
                    </a>
                    <Card.Content>
                        <Card.Header as={'h4'}>
                            {beer.nameDisplay}
                        </Card.Header>
                        <Card.Meta>
                            {abv}
                        </Card.Meta>
                        <Card.Description>
                            {beer.hasOwnProperty('style') ? beer.style.name : ''}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {verified}
                        {beer.statusDisplay}
                    </Card.Content>
                </Card>
            )
        });

        return (
            <Visibility onUpdate={this.handleVisibilityEvents}>
                <div className={'Content'} style={{background: '#eee'}}>
                    <Menu>
                        <Container>
                            {/*<Dropdown item placeholder='ABV Range' onChange={this.handleFilterEvent} options={Common.AbvOptions} />*/}
                            <Dropdown item text='ABV Range'>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'abv'} text={'0 - 5'}
                                                   value={'0-5'}/>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'abv'} text={'5 - 10'}
                                                   value={'5-10'}/>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown item text='Organic'>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'isOrganic'} text={'Yes'}
                                                   value={'Y'}/>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'isOrganic'} text={'No'}
                                                   value={'N'}/>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown item text='Status'>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'status'} text={'Verified'}
                                                   value={'verified'}/>
                                    <Dropdown.Item onClick={this.handleFilterEvent} name={'status'} text={'UnVerified'}
                                                   value={'update_pending'}/>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Menu position={'right'}>
                                <Dropdown item text='Sort by'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={this.handleFilterEvent} name={'sort'}
                                                       text={'Create Date'}
                                                       value={'createDate'}/>
                                        <Dropdown.Item onClick={this.handleFilterEvent} name={'sort'} text={'Name'}
                                                       value={'name'}/>
                                        <Dropdown.Item onClick={this.handleFilterEvent} name={'sort'}
                                                       text={'Updated Date'}
                                                       value={'name'}/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                    <Container style={{paddingTop: '3em', paddingBottom: '3em'}}>
                        <Card.Group itemsPerRow={4}>
                            {beerRows}
                        </Card.Group>
                        <div style={{textAlign: 'center', marginTop: '3em'}}>
                            <Button loading={isLoading} size={'large'} color={'teal'} onClick={this.handleBeersLimit}>Know
                                More</Button>
                        </div>
                    </Container>
                    <div hidden={hidden} onClick={this.scrollToTop}>
                    <Button icon='chevron up' className={'sticky-button'}/>
                    </div>
                </div>
            </Visibility>
        )
    }
}

export default Content;