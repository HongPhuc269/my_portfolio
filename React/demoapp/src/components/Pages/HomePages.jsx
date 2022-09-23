import React, { PureComponent } from 'react'
import "../Header/Header.css";
import "../Content/Content.css";
import background from "../../assets/images/bg_index.jpg";
const HomePages = () => {
    const myStyle = {backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: 300};
    return (<>
        <div className="header" style={myStyle}>
        <div className="text-content">
                <h1 className="me">Ocean Nguyen</h1>
                <p className="aboutme">Engineer/Video Creator</p>
            </div>
        </div>
        
        <div className='personal'>
            <h2>Hello Friends, Welcome to My Application</h2>
            <p>There're some icons are clickable while some are not. 
                I hope you have a closer look and give some feedback to improve my website to become a better version.
                Also, please play nice to me because I am a newbie in this FE thing.
                Have a great day!!!</p>
            <img src={require('./R.jpg')}
            height= "400" width="1000"/>
        </div>
    
    </>);
}
export default HomePages;