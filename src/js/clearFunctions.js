export default function getColorHealth(object) {
  if (object == null) {
    throw TypeError('Empty value');
  }

  if (object.health == null) {
    throw Error('not contain health property');
  }

  if (object.health > 50) {
    return 'healthy';
  }

  if (object.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
