import React, { Component } from 'react';
import { Dropdown, Input, Form, Button } from 'semantic-ui-react'
import { GET_SUMMONER_INFO } from '../config/API'
import { GET_SUMMONER_INFO_MOCK } from '../config/API'
import { GET_SUMMONER_INFO_MOCK2 } from '../config/API'

const options = [
  { key: 'euwest', text: 'EU West', value: 'EU West' },
  { key: 'na', text: 'NA', value: 'NA' },
  { key: 'kr', text: 'KR', value: 'KR' },
]

class SearchSummoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            fetchData: {}
        }
    }

    fetchSummoner = () => {
        var that = this;
        console.log("Getting summoner...")
        //this.props.getSummonerByName(GET_SUMMONER_INFO_MOCK2); // TODO: Use fetch
        let summonerNameNoSpaces = (this.state.value).replace(/\s/g,''); //Remove spaces from name
        const url = GET_SUMMONER_INFO + summonerNameNoSpaces;
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            that.props.getSummonerByName(data);
        })
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
                <div id="search-summoner-input">  
                    <Input
                        action={<Dropdown button floating options={options} defaultValue='EU West' />}
                        icon='search'
                        onChange={this.handleChange}
                        iconPosition='left'
                        placeholder='Find Summoner'
                        fluid
                    />
                </div>             
                <div id='search-summoner-button'>
                    <Button id="button-height" fluid onClick={this.fetchSummoner} primary>Search</Button>
                </div>
            </div>
        );
    }
}

export default SearchSummoner;
