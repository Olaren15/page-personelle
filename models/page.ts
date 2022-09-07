export interface Page {
  route: string,
  title: string,
  children?: Page[],
}
