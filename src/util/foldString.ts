export function foldString(str: string, len: number) {
  return str.length < len ? str : str.split('').slice(0, len - 1).join('') + '...';
}