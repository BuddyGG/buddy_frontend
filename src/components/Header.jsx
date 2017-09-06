import React, { Component } from 'react';

class Header extends Component {
    render(props) {

    const summoner = this.props.summonerInfo;
        return (
            <div>
                 <Header as='h1'textAlign='center'>What's your summoner name?</Header>;
            </div>
        );
    }
}

export default Header;

