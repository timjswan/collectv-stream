import React from "react";
import VideosController from "../controllers/videosController";

const videos = require('../videos');

const RES_WIDTH = 1024;
const RES_HEIGHT = 576;

export default class VideosView {
    videoController;
    videos;

    constructor() {
        this.videoController = new VideosController();
        this.videos = this.videoController.setVideos(videos).make();
    }

    createPlayerElements = () => {
        return this.videos.map((video) => {
            return (
                <div id={video.id} key={video.id}>
                    <p>{video.title}</p>
                    <iframe title={video.title} src={video.url} allowFullScreen width={RES_WIDTH} height={RES_HEIGHT} />
                </div>
            )
        });
    }

    make() {
        return this.createPlayerElements();
    }
}