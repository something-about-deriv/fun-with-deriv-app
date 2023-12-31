import React from 'react';

export const useLongPress = (
    callback: () => void = () => {
        /** empty function */
    },
    ms = 300
) => {
    const [startLongPress, setStartLongPress] = React.useState(false);

    const preventDefaults = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    React.useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        if (startLongPress) {
            timer = setTimeout(callback, ms);
        } else if (timer) {
            clearTimeout(timer);
        }

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startLongPress]);

    return {
        onMouseDown: (e: React.MouseEvent) => {
            preventDefaults(e);
            setStartLongPress(true);
        },
        onMouseUp: () => setStartLongPress(false),
        onMouseLeave: () => setStartLongPress(false),
        onTouchStart: () => setStartLongPress(true),
        onTouchEnd: () => setStartLongPress(false),
    };
};
