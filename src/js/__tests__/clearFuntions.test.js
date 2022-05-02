import getColorHealth from '../clearFunctions';

const DATA = [
  [{ name: 'Маг', health: 85 }, 'healthy'],
  [{ name: 'Маг', health: 52 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 2 }, 'critical'],
];

test('null object', () => {
  let errorMessage = '';
  try {
    getColorHealth(null);
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('TypeError: Empty value');
});

test('undefined property', () => {
  let errorMessage = '';
  try {
    getColorHealth({});
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('Error: not contain health property');
});

const handler = test.each(DATA);

handler('correct return value test', (object, expected) => {
  const result = getColorHealth(object);
  expect(result).toBe(expected);
});
