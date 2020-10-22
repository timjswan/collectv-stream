import React from "react";
import VideosController from "../../controllers/videosController";
import Thumbnail from "../../components/Thumbnail";
import videos from '../../videos';
import {Image} from "antd";

const VideosView = () => {
    const videoController = new VideosController();
    const videosWithId = videoController.setVideos(videos).make();

    return (
        <>
            <div id="wrapper">
                {videosWithId.map((video) => {
                    return (
                        <Thumbnail title={video.title} url={video.url} key={video.id} id={video.id} />
                    )
                })}
            </div>
            <img className='logo' src={require('../../img/collectv.png')} />
        </>
    );
};

export default VideosView;