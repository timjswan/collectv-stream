import React, { useState } from 'react';
import VideoPanel from '../../components/VideoPanel';
import { Select } from 'antd';

const { Option } = Select;

const VideosView = () => {
  const [player, setPlayer] = useState('live');

  return (
    <>
      <div id="wrapper">
        <VideoPanel player={player} />
      </div>
      <Select defaultValue="live" onChange={setPlayer}>
        <Option value="live">Live Streams</Option>
        <Option value="rewind">Rewindable Streams</Option>
      </Select>
      <img alt="thecollectv" className="logo" src={require('../../img/collectv.png')} />
    </>
  );
};

export default VideosView;
