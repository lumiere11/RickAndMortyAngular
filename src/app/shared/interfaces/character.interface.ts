export interface CharacterResponse {
  info: Info;
  results: Character[]
}
export interface Info{
  count: number;
  next: string;
  pages: number;
  prev: number
}
export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
}

