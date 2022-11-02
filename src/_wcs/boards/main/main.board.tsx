import { createBoard } from '@wixc3/react-board';
import { Main } from '../../../main/main';

export default createBoard({
    name: 'Main',
    Board: () => <Main />
});
