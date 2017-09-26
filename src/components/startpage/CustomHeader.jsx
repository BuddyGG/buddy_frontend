import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export function CustomHeader(title, as, inverted=false) {
    <Header as={as} inverted={inverted} textAlign='center'>{title}</Header>;
}

