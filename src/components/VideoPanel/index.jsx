import React from 'react';
import VideosController from '../../controllers/videosController';
import VideoModalOpenSldp from '../VideoModalOpenSldp';
import VideoModalOpenJWPlayer from '../VideoModalOpenJWPlayer';
import { useParams } from 'react-router-dom';

const VideoPanel = () => {
  const videoController = new VideosController();
  const videosWithId = videoController.setVideos(window.videos).make();
  const { player } = useParams();

  const returnPlayer = (video) => {
    if (!/live|rewind/.test(player)) {
      return <></>;
    }

    if (player === 'live') {
      return (
        <VideoModalOpenSldp
          title={video.title}
          url={video.url_live}
          key={video.id}
          id={`${video.id}live`}
        />
      );
    }

    if (player === 'rewind') {
      return (
        <VideoModalOpenJWPlayer
          title={video.title}
          url={video.url_rewind}
          key={video.id}
          id={`${video.id}rewind`}
        />
      );
    }
  };

  return (
    <>
      {videosWithId.map((video) => {
        return returnPlayer(video);
      })}
    </>
  );
};

export default VideoPanel;
