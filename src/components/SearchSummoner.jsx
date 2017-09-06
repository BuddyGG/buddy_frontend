import React, { Component } from 'react';
import { Dropdown, Input, Form, Button } from 'semantic-ui-react'
import { GET_SUMMONER_INFO_MOCK } from '../config/API'

const options = [
  { key: 'euwest', text: 'EU West', value: 'EU West' },
  { key: 'na', text: 'NA', value: 'NA' },
  { key: 'kr', text: 'KR', value: 'KR' },
]

class SearchSummoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    fetchSummoner = () => {
        console.log("Getting summoner...")
        this.props.getSummonerByName(GET_SUMMONER_INFO_MOCK); // TODO: Use fetch
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        },function(){
            console.log(this.state.value)
        });
    }

    render() {
        return (
            <div id="search-bar">
                <Input id="test"
                    action={<Dropdown button floating options={options} defaultValue='EU West' />}
                    icon='search'
                    onChange={this.handleChange}
                    iconPosition='left'
                    placeholder='Find Summoner'
                    fluid
                />
                <div id='search-summoner-button'>
                    <Button onClick={this.fetchSummoner} primary>Search</Button>
                </div>
            </div>
        );
    }
}

export default SearchSummoner;
