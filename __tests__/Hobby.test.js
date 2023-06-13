import { render } from '@testing-library/react';
import Hobby from '../src/Hobby.js';

it('Should render emoji and title', async () => {
    const emoji = '🏊';
    const title = 'Swim';

    const renderResult = render(<Hobby emoji={emoji} title={title} />);
    expect(await renderResult.findByText(`${emoji} ${title}`)).toBeTruthy();
});
