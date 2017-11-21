import React, {Component} from 'react';
import {Dropdown, Image, Menu, Icon} from 'semantic-ui-react'
import Assets from "./Assets";
import BeerSearch from "./Search";
import Options from "./Options";
import './Menu.css';

const trigger = (
    <span>
     <Image avatar
            size='mini'
            src={Assets.Images.elliot}
     />
  </span>
);

const options = [
    {key: 'user', text: 'Account', icon: 'user'},
    {key: 'settings', text: 'Settings', icon: 'settings'},
    {key: 'sign-out', text: 'Sign Out', icon: 'sign out'},
];

class FixedMenuLayout extends Component {
    state = {};

    handleSearchCallback = (searchData) => this.props.callbackBeers(searchData);

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu fixed='top' inverted className={'Menu'}>
                <Menu.Item as='a' href={'/'} header
                           active={activeItem === 'Home'}
                           onClick={this.handleItemClick}
                >
                    {/*<Image
                        size='mini'
                        src={Assets.Images.logo}
                        style={{marginRight: '1.5em'}}
                    />*/}
                    AGNT
                </Menu.Item>
                <Dropdown item simple text='Event Services' className={'hidden-xs'}>
                    <Dropdown.Menu>
                        <Dropdown.Item>Beer</Dropdown.Item>
                        <Dropdown.Item>Brewery</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Header>Event</Dropdown.Header>
                        <Dropdown.Item>Award Place</Dropdown.Item>
                        <Dropdown.Item>Award Category</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div hidden={this.props.hideSearch} className={'hidden-xs'}>
                    <div className='Search Vertical-Divider'>
                        <div className={'Search-Input'}>
                            <BeerSearch
                                callbackSearch={this.handleSearchCallback}
                                input={{
                                    icon: 'search',
                                    iconPosition: 'left',
                                    transparent: true,
                                    inverted: true,
                                    fluid: true,
                                    placeholder: 'What type of beer are you looking for?'
                                }}
                            />
                        </div>
                        <div className={'Search-Dropdown hidden-xs'}>
                            <Dropdown className={'transparent'} placeholder='With Breweries' selection
                                      options={Options.BreweriesOption}/>
                        </div>
                    </div>
                </div>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'>
                        <Icon name={'calendar outline'}/> Your Events
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name={'mail outline'}/> Inbox
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown trigger={trigger} options={options} pointing='top right' icon={null}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default FixedMenuLayout