import {RES_HEIGHT, RES_WIDTH} from "../constants/videoRes";

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
    }

    initPlayer = () => {
        this.sldpPlayer = window.SLDP.init({
            container: `${this.id}`,
            stream_url: this.url,
            initial_resolution: '1080p',
            buffering: 500,
            autoplay: true,
            height: RES_HEIGHT,
            width: RES_WIDTH
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
};