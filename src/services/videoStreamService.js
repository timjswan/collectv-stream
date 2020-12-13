export default class VideoStreamService {
  sldpPlayer = null;
  url;
  id;

  setUrl = (url) => {
    this.url = url;
    return this;
  };

  setId = (id) => {
    this.id = id;
    return this;
  };

  hasPlayer = () => {
    return this.sldpPlayer !== null;
  };

  initPlayer = () => {
    this.sldpPlayer = window.SLDP.init({
      container: `${this.id}`,
      stream_url: this.url,
      initial_resolution: '1080p',
      buffering: 500,
      autoplay: true,
      height: 'parent',
      width: 'parent',
    });
  };

  destroy() {
    this.sldpPlayer.destroy(function () {
      console.log(`SLDP Player is destroyed.`);
    });
  }

  make() {
    this.initPlayer();
  }
}
