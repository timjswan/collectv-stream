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
      this.videoService.setIndex(i).setUrl(video.url).setTitle(video.title).make()
    );
  };

  make() {
    return this.createVideosArray();
  }
}
