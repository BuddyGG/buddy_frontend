import React from 'react'
import { Image } from 'semantic-ui-react'

import Top_Icon from '../icons/Top_icon.png';
import Jungler_Icon from '../icons/Jungler_icon.png';
import Mid_Icon from '../icons/Mid_icon.png';
import Bot_Icon from '../icons/Bot_icon.png';
import Support_Icon from '../icons/Support_icon.png';


export function getRoleImage(role){
    let roleIcon = "";

    switch (role){
        case "top":
            roleIcon = Top_Icon
            break;
        case "jun":
            roleIcon = Jungler_Icon
            break;
        case "mid":
            roleIcon = Mid_Icon
            break;
        case "adc":
            roleIcon = Bot_Icon
            break;
        case "sup":
            roleIcon = Support_Icon
            break;
        default:
            break;
    }
    
    return <Image centered src={roleIcon} size='mini'/>;
}
