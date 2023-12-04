import React, { useEffect, useRef, useState } from 'react';
import { useCopyToClipboard, useHover } from 'usehooks-ts';
import useDevice from '../../../hooks/useDevice';
import CheckmarkCircle from '../../../public/images/ic-checkmark-circle.svg';
import Clipboard from '../../../public/images/clipboard.svg';
import { Tooltip } from '../Tooltip';
import './WalletClipboard.scss';

type TProps = {
    infoMessage?: string;
    popoverAlignment: 'bottom' | 'left' | 'right' | 'top';
    successMessage: string;
    textCopy: string;
};

const WalletClipboard = ({
    //  info_message, popoverAlignment, success_message,
    textCopy,
}: TProps) => {
    const [, copy] = useCopyToClipboard();
    const { isMobile } = useDevice();
    const [isCopied, setIsCopied] = useState(false);
    const hoverRef = useRef(null);
    const isHovered = useHover(hoverRef);
    let timeoutClipboard: ReturnType<typeof setTimeout>;

    const onClick = (event: { stopPropagation: () => void }) => {
        setIsCopied(true);
        copy(textCopy);
        timeoutClipboard = setTimeout(() => {
            setIsCopied(false);
        }, 2000);
        event.stopPropagation();
    };

    useEffect(() => {
        return () => clearTimeout(timeoutClipboard);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tooltip alignment='right' isVisible={isHovered && !isMobile} message={isCopied ? 'Copied!' : 'Copy'}>
            <button className='wallets-clipboard' onClick={onClick} ref={hoverRef}>
                {isCopied ? <CheckmarkCircle /> : <Clipboard />}
            </button>
        </Tooltip>
    );
};

export default WalletClipboard;
