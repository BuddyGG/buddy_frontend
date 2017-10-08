import React from 'react'
import { Flag } from 'semantic-ui-react'

export function getFlagImage(code){
    //TODO: fix language abbriviations
    let codeId; 
    switch(code){
        case "DA":
            codeId = "DK"
            break;
        case "EN":
            codeId = "GB"
            break;
        default:
            codeId = code
    }
    return <Flag  className="flag" name={codeId.toLowerCase()} />
}
