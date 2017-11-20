import React, {Component} from 'react';
import './App.css';
import FixedMenuLayout from './Menu';
import InfoContainer from './InfoContainer';
import Content from './Content';
import Footer from './Footer';
import Client from "./Client";
import {Dimmer, Loader} from 'semantic-ui-react'

class App extends Component {
    state ={
        beers: null,
        searchValue: 'Ale',
        loaderActive: true
    };
    handelBeersData = (dataFromSearch) => {
        this.setState({beers: dataFromSearch})
    };
    setInitialState = () => {
        Client.search(this.state.searchValue, results => {
            if (results.status === 'success' && results.hasOwnProperty('data') && results.data.length > 0) {
                results.searchValue = this.state.searchValue;
                this.setState({beers: results, loaderActive: false})
            }
        });
    };
    componentWillMount() {
        this.setInitialState()
    }
    render() {
        return (
            <div>
                <Dimmer active={this.state.loaderActive} page={true}>
                    <Loader size='massive'>Loading Beers...</Loader>
                </Dimmer>
                <FixedMenuLayout callbackBeers={this.handelBeersData}/>
                <InfoContainer beersInfo={this.state.beers}/>
                <Content beersInfo={this.state.beers}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
