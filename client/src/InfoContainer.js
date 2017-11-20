import React, {Component} from 'react';
import {Container, Card, Icon, Button} from 'semantic-ui-react';

class InfoContainer extends Component {
    componentWillMount() {
        this.setComponent(this.props);
    }

    setComponent = (props) => {
        this.setState({
            searchValue: props.beersInfo ? props.beersInfo.searchValue : '',
            totalNumber: props.beersInfo ? props.beersInfo.totalResults : 0
        });
    };

    componentWillReceiveProps(nextProps) {
        this.setComponent(nextProps);
    }

    render() {
        const {totalNumber, searchValue} = this.state;
        return (
            <Container style={{margin: '7em 0 3em 0'}} className={'InfoContainer'}>
                <Card.Group itemsPerRow={2}>
                    <Card className={'info-card'}>
                        <Card.Content>
                            <Card.Description>
                                <p className={'info-text'}>
                                    There are {totalNumber} <strong className={'underline'}>{searchValue}</strong> beer
                                    type
                                    <br/>
                                    available <strong className={'underline'}>with</strong> Breweries</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card raised={true} className={'info-card-right'}>
                        <Card.Content>
                            <Card.Header>
                                Not sure which beer to search?<br/>
                                We'll help you narrow it down!
                            </Card.Header>
                            <Card.Description className={'info-description'}>
                                There are so much beer out there that it can be overwhelming.<br/>
                                Why not give the Breweries apply for your beer to make it easier?
                            </Card.Description>
                            <div>
                                <Button color='teal'>Get Started</Button>
                                <Button style={{marginLeft:'1em'}} basic color='grey'>
                                    <Icon name={'video play outline'}/>
                                    How it Works
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>
        )
    }
}

export default InfoContainer