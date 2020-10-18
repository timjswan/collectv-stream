import React from "react";
import VideosController from "../../controllers/videosController";
import Thumbnail from "../../components/Thumbnail";
import videos from '../../videos';

const VideosView = () => {
    const videoController = new VideosController();
    const videosWithId = videoController.setVideos(videos).make();

    return (
        <>
            {videosWithId.map((video) => {
                return (
                    <Thumbnail title={video.title} url={video.url} key={video.id} id={video.id} />
                )
            })}
        </>
    );
};

export default VideosView;