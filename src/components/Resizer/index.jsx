import React, {useEffect, useState, useRef} from 'react';

const BaseModalWithRef = React.forwardRef((props, ref) => {
    const {children: BaseModal} = props;
    return <BaseModal {...props} ref={() => {
        this.children = ref;
    }}/>;
});

const Resizer = (props) => {
    const {children} = props;
    const [contentWidth, setContentWidth] = useState(0);
    const baseModalWithRef = useRef(null);

    useEffect(() => {
        console.log('dynamic modal size');
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(sizeDialog);
        } else {
            window.setTimeout(sizeDialog, 50);
        }
    });

    const sizeDialog = () => {
        let contentEl = children.refs.videoDiv;
        if (!contentEl) {
            return;
        }

        let rectContentWidth = contentEl.getBoundingClientRect().width;
        if (rectContentWidth !== contentWidth) {
            setContentWidth(rectContentWidth);
        }
    }


    return (
        <BaseModalWithRef ref={baseModalWithRef}>{children}</BaseModalWithRef>
    )
};

export default Resizer;