import sum from '../src/multiplication';

test('adds 2 * 5 to equal 10', () => {
    expect(sum(2, 5)).toBe(10);
});