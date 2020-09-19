import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import '../../css/infobar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/mysomm-join-chat"><img src={closeIcon} className="closeIcon" alt="close icon" /></a>
        </div>
    </div>
);

export default InfoBar;