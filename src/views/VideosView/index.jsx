import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import VideoPanel from "../../components/VideoPanel";

const VideosView = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/sldp">SLDP Player</Link>
                    </li>
                    <li>
                        <Link to="/jw">JW Player</Link>
                    </li>
                </ul>
            </nav>
            <div id="wrapper">
                <Switch>
                    <Route path="/:player" children={<VideoPanel />} />
                </Switch>
            </div>
            <img alt="thecollectv" className='logo' src={require('../../img/collectv.png')} />
        </Router>
    );
};

export default VideosView;