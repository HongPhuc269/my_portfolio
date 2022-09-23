import React, { PureComponent } from 'react'
import "../Header/Header.css";
import background from "../../assets/images/bg-about.jpg";
import "../Content/Content.css";
const AboutPage = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: 300
    };
    return (<>
        <div className="header" style={myStyle}>
            <div className="text-content">
                <h1 className="me">About me</h1>
                <p className="aboutme">This is what I do</p>
            </div>
        </div>

        <div className="personal">
            <p>Hello friends! I am Ocean Nguyen.
                Currently, I'm working at an untitled large tech company as software engineer.
                I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.</p>
            <p>Hello friends! I am Ocean Nguyen. Currently, I'm working at an untitled large tech company as software engineer.
                I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.</p>
            <p>Hopefully, it would be good for you. Feel free to give me feedback.  </p>
        </div>
    </>
    );
}
export default AboutPage;