import React, {useContext} from 'react';
import VideoPanel from '../../components/VideoPanel';
import { Select } from 'antd';
import {PlayerContext, PlayerContextProvider} from "../../contexts/PlayerContext";

const { Option } = Select;

const VideosView = () => {
    const {setPlayer} = useContext(PlayerContext);
  return (
    <PlayerContextProvider>
        <Select defaultValue="live" style={{ width: 120 }} onChange={setPlayer}>
            <Option value="live">Live Streams</Option>
            <Option value="rewind">Rewindable Streams</Option>
        </Select>
        <VideoPanel />
      <img alt="thecollectv" className="logo" src={require('../../img/collectv.png')} />
    </PlayerContextProvider>
  );
};

export default VideosView;
