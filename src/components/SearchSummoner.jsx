import React, { Component } from 'react';
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { key: 'euwest', text: 'EU West', value: 'EU West' },
  { key: 'na', text: 'NA', value: 'NA' },
  { key: 'kr', text: 'KR', value: 'KR' },
]

export const SearchSummoner = () => (
    <Input
        label={<Dropdown defaultValue='EU West' options={options} />}
        labelPosition='right'
        placeholder='Find Summoner'
        fluid
    />
)
