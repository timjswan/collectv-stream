import VideoService from '../services/videoService';

export default class VideosController {
  videoService;
  videos;

  constructor() {
    this.videoService = new VideoService();
  }

  setVideos = (videos) => {
    this.videos = videos;
    return this;
  };

  createVideosArray = () => {
    return this.videos.map((video, i) =>
      this.videoService
        .setIndex(i)
        .setUrlLive(video.url_live)
        .setUrlRewind(video.url_rewind)
        .setTitle(video.title)
        .make()
    );
  };

  make() {
    return this.createVideosArray();
  }
}
