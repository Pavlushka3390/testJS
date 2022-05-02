export default function heroesSort(heroesList) {
  if (heroesList == null || !Array.isArray(heroesList)) {
    throw TypeError('');
  }

  const isPropertyNotExist = heroesList.reduce((prev, obj) => prev || obj.health == null, false);
  if (isPropertyNotExist) {
    throw TypeError('uncorrect object');
  }

  const result = [...heroesList];

  return result.sort((a, b) => b.health - a.health);
}
