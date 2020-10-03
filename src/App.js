import React from 'react';
import './App.css';
import VideosView from "./views/videosView";
@import '~antd/dist/antd.css';

const videosViewHelper = new VideosView();

function App() {
    const videoElements = videosViewHelper.make();
  return (
    <div className="App">
      {videoElements}
    </div>
  );
}

export default App;
