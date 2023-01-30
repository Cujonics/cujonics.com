import {createBoard} from '@wixc3/react-board';
import {About} from '../../../about/about';

export default createBoard({
    name: 'About',
    Board: () => <About/>,
});
