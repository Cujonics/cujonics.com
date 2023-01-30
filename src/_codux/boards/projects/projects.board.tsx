import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />
});
