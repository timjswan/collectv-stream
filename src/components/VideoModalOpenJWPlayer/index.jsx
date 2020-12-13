import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ReactJWPlayer from 'react-jw-player';

const VideoModalOpenJWPlayer = (props) => {
  const { title, id, url } = props;
  const [visible, showModal] = useState(false);

  const onCancel = () => {
    showModal(false);
    if (window.jwplayer(id)) {
      window.jwplayer(id).stop();
    }
  };

  return (
    <>
      <Button onClick={() => showModal(true)}>{title}</Button>
      <Modal
        title={title}
        visible={visible}
        footer={null}
        destroyOnClose={false}
        width={568}
        closable={false}
        onCancel={() => onCancel()}
      >
        <ReactJWPlayer
          playerId={id}
          playerScript="https://cdn.jwplayer.com/libraries/Hzn7CDKd.js"
          file={url}
        />
      </Modal>
    </>
  );
};

export default VideoModalOpenJWPlayer;
