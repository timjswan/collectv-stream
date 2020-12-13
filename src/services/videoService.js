export default class VideoService {
  urlLive;
  urlRewind;
  index;
  title;

  setUrlLive = (urlLive) => {
    this.urlLive = urlLive;
    return this;
  };

  setUrlRewind = (urlRewind) => {
    this.urlRewind = urlRewind;
    return this;
  };

  setTitle = (title) => {
    this.title = title;
    return this;
  };

  setIndex = (index) => {
    this.index = index;
    return this;
  };

  attachIdsToVideoObjects = () => {
    return {
      id: `player${this.index + 1}`,
      url_live: this.urlLive,
      url_rewind: this.urlRewind,
      title: this.title,
    };
  };

  make() {
    return this.attachIdsToVideoObjects();
  }
}
