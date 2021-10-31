import demo from '../app';

test('Тест demo_function', () => {
  const expected = '11';
  const received = demo('11');
  expect(received).toBe(expected);
});
