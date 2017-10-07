import React, { Component } from 'react';
import Logo from "../../images/Logo.png"
import { Image } from 'semantic-ui-react';

export default class LoLAmigoHeader extends Component {
    render () {
        return (
            <div>
                <Image id="logo" src={Logo} size="medium" centered/>
            </div>
        );
    }
}