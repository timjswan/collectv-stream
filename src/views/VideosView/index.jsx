import React, {useRef} from "react";
import { Row } from 'antd';
import VideosController from "../../controllers/videosController";
import Thumbnail from "../../components/Thumbnail";
import videos from '../../videos';

const VideosView = () => {
    const videoController = new VideosController();
    const videosWithId = videoController.setVideos(videos).make();
    const ref = useRef();

    return (
        <Row>
            {videosWithId.map((video) => {
                return (
                    <Thumbnail title={video.title} url={video.url} key={video.id} id={video.id} ref={ref} />
                )
            })}
        </Row>
    );
};

export default VideosView;