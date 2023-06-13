import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import App from '../src/App.js';

test('Should use <Hobby /> at least once', async () => {
    const mockHobbyFunction = jest.fn();
    jest.unstable_mockModule('../src/Hobby.js', () => ({
        default: (props) => {
            mockHobbyFunction(props);
            return <p>Mock Hobby</p>;
        },
    }));
    await import('../src/Hobby.js');
    const { default: MockedApp } = await import('../src/App.js?mocked=1');

    render(<MockedApp />);
    expect(mockHobbyFunction.mock.calls.length).toBeGreaterThan(0);
});

test('Should have 2 ol', () => {
    const renderResult = render(<App />);

    // 1 or 2 ol
    const ols = renderResult.container.querySelectorAll('ol');
    expect(ols.length).toEqual(2);
});

test('Should have at least 4 lis - Name, Age, Hobbies, and at least 1 hobby', () => {
    const renderResult = render(<App />);

    // Minimally 4 li; Name, Age, Hobby, and 1 hobby.
    const ollis = renderResult.container.querySelectorAll('ol li');
    expect(ollis.length).toBeGreaterThanOrEqual(4);

    // Minimally 4 li; Name, Age, Hobby, and 1 hobby.
    const olollis = renderResult.container.querySelectorAll('ol ol li');
    expect(olollis.length).toBeGreaterThanOrEqual(1);
});

test('First 3 Li are Name:..., Age:...., and Hobbies:.... accordingly', () => {
    const renderResult = render(<App />);

    // Minimally 4 li; Name, Age, Hobby, and 1 hobby.
    const ollis = renderResult.container.querySelectorAll('ol li');

    expect(ollis[0].textContent).toMatch(/name/i);
    expect(ollis[1].textContent).toMatch(/age/i);
    expect(ollis[2].textContent).toMatch(/hobb(y|ies)/i);
});
