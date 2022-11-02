import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer className="site-footer" />
});
