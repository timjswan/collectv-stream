import React from "react";
import VideosController from "../../controllers/videosController";
import VideoModalOpenSldp from "../VideoModalOpenSldp";
import VideoModalOpenJWPlayer from "../VideoModalOpenJWPlayer";
import {useParams} from 'react-router-dom';

const VideoPanel = () => {
    const videoController = new VideosController();
    const videosWithId = videoController.setVideos(window.videos).make();
    const {player} = useParams();
    return (
        <>
            {videosWithId.map((video) => {
                return (
                    player === 'sldp' ? <VideoModalOpenSldp title={video.title} url={video.url} key={video.id} id={video.id} /> : <VideoModalOpenJWPlayer title={video.title} url={video.url} key={video.id} id={video.id} />
                )
            })}
        </>
    );
};

export default VideoPanel;