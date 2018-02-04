import React from 'react'
import { Flag } from 'semantic-ui-react'

export function getFlagImage(code){
    return <Flag  className="flag" name={code.toLowerCase()} />
}
