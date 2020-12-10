import React, {useState, useRef} from 'react';
import {Button, Modal} from "antd";
import ReactJWPlayer from 'react-jw-player';

const VideoDiv = React.forwardRef((props, ref) => {
    return <ReactJWPlayer playerId={props.id} playerScript='https://cdn.jwplayer.com/libraries/Hzn7CDKd.js' file={props.url} />
});

const VideoModalOpenJWPlayer = (props) => {
    const { title } = props;
    const [visible, showModal] = useState(false);
    const videoDiv = useRef();

    return (
        <>
            <Button onClick={() => showModal(true)}>{title}</Button>
            <Modal
                title={title}
                visible={visible}
                footer={null}
                onCancel={() => console.log('player closed')}
                destroyOnClose={false}
                width={568}
                closable={false}
            >
                <VideoDiv {...props} ref={videoDiv} />
            </Modal>
        </>
    );
};

export default VideoModalOpenJWPlayer;