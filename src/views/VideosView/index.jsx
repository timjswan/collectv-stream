import React from "react";
import VideosController from "../../controllers/videosController";
import Thumbnail from "../../components/Thumbnail";

const VideosView = () => {
    const videoController = new VideosController();
    const videosWithId = videoController.setVideos(window.videos).make();

    return (
        <>
            <div id="wrapper">
                {videosWithId.map((video) => {
                    return (
                        <Thumbnail title={video.title} url={video.url} key={video.id} id={video.id} />
                    )
                })}
            </div>
            <img alt="thecollectv" className='logo' src={require('../../img/collectv.png')} />
        </>
    );
};

export default VideosView;