export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/w500/${format ? format : "original"}${id}`;
}
