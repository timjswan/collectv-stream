import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoPanel from '../../components/VideoPanel';

const VideosView = () => {
  return (
    <Router>
      <div id="wrapper">
        <Switch>
          <Route path="/:player" children={<VideoPanel />} />
        </Switch>
      </div>
      <img alt="thecollectv" className="logo" src={require('../../img/collectv.png')} />
    </Router>
  );
};

export default VideosView;
