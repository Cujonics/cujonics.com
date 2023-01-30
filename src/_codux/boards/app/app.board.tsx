import React from 'react';
import { createBoard } from '@wixc3/react-board';
import App from '../../../app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1280,
        canvasHeight: 762
    }
});
