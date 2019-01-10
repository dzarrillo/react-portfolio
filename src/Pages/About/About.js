import React from "react";
import SideBar from "../../components/SideBar";
import SkillSet from "../../components/SkillSet/SkillSet";
const About = () => {

    return (
              <div className="bodyContent">
                {/* <Nav></Nav> */}
                <section className="mainContent">
                    <h1>About Me</h1>
                    <img className="profilePic" src={require("../../assets/images/Don.jpg")} alt="My profile"></img>
                    <p>
                        Four years ago, I founded DZartek LLC. During that time, I also developed Full stack web sites and
                        Android apps. These apps were designed using react, restful web services, MongoDB, SQLite, google maps
                        and Firebase technology. Currently there are six free Android apps in the Google store posted under
                        DZartek.
    
                    </p>
                    <p>
                        Prior to founding DZartek, I worked ten years at Credit-Suisse in the IT department. While at Credit-Suisse,
                        I facilitated solutions to problems with “live trades" and managed the batch night cycle for Asia Pacific. In
                        addition, if any trade deadlines were missed, I immediately routed and assigned an alert to the responsible
                        department to ensure that the appropriate corrective resolution(s) took place.
    
                    </p>
                    <p>
                        Prior to Credit-Suisse, I was a VB.net Windows applications lead Developer for BHI, Kforce,
                        NCO, and Property Services.
    
                    </p>
                    <p>
                        I received my B.S. in Information Systems with a minor in business from Bloomfield College, successfully completed
                        a full-stack web coding boot camp at Rutgers University and recieved an Android Nanodegree certificate from
                        Udacity. I also hold various certifications from Udemy, NYU, PACE, Microsoft, and Lynda.com.
                    </p>
                </section>
                <SideBar></SideBar>
                <SkillSet></SkillSet>
                {/* <div className="push">Stop</div> */}
                {/* <Footer className="footer"></Footer> */}
            </div>
        
    );
};


export default About;
