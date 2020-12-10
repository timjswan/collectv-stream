import React, {useEffect, useState, useRef} from 'react';
import {Button, Modal} from "antd";
import VideoStreamService from "../../services/videoStreamService";

const VideoDiv = React.forwardRef((props, ref) => {
    return <div ref={ref} id={props.id}></div>
});

const VideoModalOpenSldp = (props) => {
    const { title, url, id } = props;
    const [visible, showModal] = useState(false);
    const videoDiv = useRef();
    const videoStreamService = new VideoStreamService();

    useEffect(() => {
       if(visible && videoDiv.current !== null){
           videoStreamService.setId(id).setUrl(url).make();
       }
    });

    const onCancel = () => {
        showModal(false);
        if(videoStreamService.hasPlayer()) {
            videoStreamService.destroy();
        }
    }

    return (
        <>
            <Button onClick={() => showModal(true)}>{title}</Button>
            <Modal
                title={title}
                visible={visible}
                footer={null}
                onCancel={() => onCancel()}
                destroyOnClose={false}
                width={568}
                closable={false}
            >
                <VideoDiv id={id} ref={videoDiv} />
            </Modal>
        </>
    );
};

export default VideoModalOpenSldp;