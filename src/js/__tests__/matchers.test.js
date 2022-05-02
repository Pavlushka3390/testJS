import heroesSort from '../matchers';

test('null object', () => {
  let errorMessage = '';
  try {
    heroesSort(null);
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('TypeError');
});

test('uncorrect object', () => {
  let errorMessage = '';
  try {
    heroesSort([
      { name: 'Маг', health: 4 },
      { name: 'Маг' },
    ]);
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('TypeError: uncorrect object');
});

const DATA = [
  [
    [
      { name: 'Маг', health: 4 },
      { name: 'Маг', health: 16 },
      { name: 'Маг', health: 55 },
      { name: 'Маг', health: 3 },
    ],
    [
      { name: 'Маг', health: 55 },
      { name: 'Маг', health: 16 },
      { name: 'Маг', health: 4 },
      { name: 'Маг', health: 3 },
    ],
  ],
];

const handler = test.each(DATA);

handler('correct return value test', (object, expected) => {
  const result = heroesSort(object);
  expect(result).toEqual(expected);
});
