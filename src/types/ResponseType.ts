export interface ResponseType {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterType[];
}
