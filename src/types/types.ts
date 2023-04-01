export interface Props {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  },
  results: CharactersProps[],
}

export interface CharactersProps {
  created: string;
  gender: string;
  id: number;
  episode: string[];
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}
