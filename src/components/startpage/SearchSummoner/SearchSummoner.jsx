import React, { Component } from 'react';
import { Select, Input, Form, Button } from 'semantic-ui-react'
import { backend_service } from '../../../config/API'

const options = [
  { key: 'euw', text: 'EUW', value: 'euw' },
  { key: 'na', text: 'NA', value: 'na' },
  { key: 'kr', text: 'KR', value: 'kr' },
  { key: 'br', text: 'BR', value: 'br' },
  { key: 'eune', text: 'EUNE', value: 'eune' },
  { key: 'jp', text: 'JP', value: 'jp' },
  { key: 'lan', text: 'LAN', value: 'lan' },
  { key: 'las', text: 'LAS', value: 'las' },
  { key: 'oce', text: 'OCE', value: 'oce' },
  { key: 'tr', text: 'TR', value: 'tr' },
  { key: 'ru', text: 'RU', value: 'ru' },
  { key: 'pbe', text: 'PBE', value: 'pbe' },
]

class SearchSummoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: "euw",
            fetchData: {},
            loading: false
        }
    }

    componentDidMount() {
        this.inputRef.focus()
    }

    fetchSummoner = () => {
        var that = this;
        
        const region = this.state.region
        const name = (this.state.value).replace(/\s/g,''); //Remove spaces from name
        //const url = GET_SUMMONER_INFO + region + "/" + name;
        
        this.setState({
            loading: true
        })
        console.log("Getting summoner...")

        fetch(`${backend_service}/summoner/${region}/${name}`).then(function(response) { 
        //fetch(`/summoner/${region}/${name}`).then(function(response) { 
            return response.json();
        }).then(function(data) {
            if(data.error || data.errors){
                that.props.errorHandler()
                that.setState({
                    loading: false
                })
                return;
            }
            that.props.getSummonerByName(data);
            that.setState({
                loading: false
            })
        })
    }

    handleChangeName = (event) => this.setState({value: event.target.value})
    
    handleChangeRegion = (e, { value }) => this.setState({ region: value })

    handleRef = (c) => {
        this.inputRef = c
    }

    render() {
        return (
            <div id="search-bar">
                <Form onSubmit={this.fetchSummoner}>
                    <Input required fluid type='text' placeholder='Find summoner' action onChange={this.handleChangeName} ref={this.handleRef}>
                        <input />
                        <Select className="region-select" 
                                compact 
                                onChange={this.handleChangeRegion} 
                                options={options} 
                                defaultValue={this.state.region}/>
                        <Button icon="search" primary loading={this.state.loading} type='submit' content="Search"/>
                    </Input>
                </Form>           
            </div>
        );
    }
}

export default SearchSummoner;
