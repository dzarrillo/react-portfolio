import React from "react";

const SideBar = () => (
    <section className="sideBar">
        <h2>Connect With Me</h2>
        <a className="socialIcon" href="https://github.com/dzarrillo" >
            <div className="gitHubIconRed"></div>
            <div className="gitHubIconBlack"></div>
        </a>
        <a className="socialIcon middleIcon" href="https://www.linkedin.com/in/donaldzarrillojr/" >
            {/* <div className="linkedinIconRed"></div> */}
            <div className="linkedinIconBlack"></div>
        </a>
        <a className="socialIcon" href="https://stackoverflow.com/users/4495349/dzarrillo?tab=profile" >
            <div className="stackIconRed"></div>
            <div className="stackIconBlack"></div>
        </a>
    </section>
)
  
export default SideBar;