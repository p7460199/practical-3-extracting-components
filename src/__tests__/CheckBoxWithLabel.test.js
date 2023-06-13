import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CheckBoxWithLabel from '../sample/CheckBoxWithLabel';

test('Loads with unchecked value', async () => {
    render(<CheckBoxWithLabel labelOn="On" labelOff="Off" />);

    expect(screen.getByLabelText('Off')).toBeTruthy();

    await userEvent.click(screen.getByLabelText('Off'));

    expect(screen.getByLabelText('On').toBeTruthy());
});
