import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './PositionTile.css'

export default class PositionTile extends Component {
    toggleActive = () => {
        this.props.onClick(this.props.name)
    }

    render() {
        return (
            <div onClick={this.toggleActive} className={"position-tile " + (this.props.active ? "active" : "")}>
                <Image className="icon" src={this.props.active ? this.props.activeIcon : this.props.inactiveIcon} />
            </div>
        );
    }
}