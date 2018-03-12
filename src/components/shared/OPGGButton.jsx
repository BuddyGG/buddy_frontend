import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class OPGGButton extends Component {
    openInNewTab = () =>  {
        var win = window.open(`http://${this.props.region}.op.gg/summoner/userName=${this.props.name}`, '_blank');
        win.focus();
    }

    render() {
        return (
            <Button primary compact onClick={this.openInNewTab}>OP.GG</Button>
        );
    }
}

export default OPGGButton;