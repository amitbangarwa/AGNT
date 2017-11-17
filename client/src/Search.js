
import React, {Component} from 'react';
import { Search } from 'semantic-ui-react';
import Client from "./Client";
import Assets from "./Assets";

const MATCHING_ITEM_LIMIT = 5;

class BeerSearch extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''});

    handleResultSelect = (e, {result}) => this.setState({value: result.title});

    handleResults = (beers) => {
        return beers.map((beer) => {
            return {
                key: beer.id,
                title: beer.nameDisplay,
                image: beer.hasOwnProperty('labels') ? beer.labels.icon : `${Assets.Images.logo}`,
                description: beer.statusDisplay
            };
        });
    };

    handleSearchChange = (e, {value}) => {

        this.setState({isLoading: true, value});

        setTimeout(() => {

            if (this.state.value.length < 1) return this.resetComponent();

            Client.search(this.state.value, results => {
                if (results.status === 'success' && results.hasOwnProperty('data') && results.data.length > 0) {
                    this.setState({
                        isLoading: false,
                        results: this.handleResults(results.data.slice(0, MATCHING_ITEM_LIMIT)),
                    })
                }
            });
        }, 500);
    };

    render() {
        const {isLoading, value, results} = this.state;

        return (
            <Search
                size='small'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                {...this.props}
            />
        )

    }
}

export default BeerSearch;