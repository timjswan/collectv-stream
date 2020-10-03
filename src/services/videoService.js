export default class VideoService {
    url;
    index;
    title;

    setUrl = (url) => {
        this.url = url;
        return this;
    };

    setTitle = (title) => {
        this.title = title;
        return this;
    };

    setIndex = (index) => {
        this.index = index;
        return this;
    }

    buildVideoDetails = () => {
        return {
            id: `player${this.index + 1}`,
            url: this.url,
            title: this.title,
        }
    };

    make() {
        return this.buildVideoDetails();
    }
};