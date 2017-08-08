import React, { Component } from 'react';
import { Dropdown, Input, Form } from 'semantic-ui-react'

const options = [
  { key: 'euwest', text: 'EU West', value: 'EU West' },
  { key: 'na', text: 'NA', value: 'NA' },
  { key: 'kr', text: 'KR', value: 'KR' },
]

export const SearchSummoner = (props) => (
    <Input
        action={<Dropdown button basic floating options={options} defaultValue='EU West' />}
        onChange={props.onChange}
        icon='search'
        iconPosition='left'
        placeholder='Find Summoner'
        fluid
    />
)
