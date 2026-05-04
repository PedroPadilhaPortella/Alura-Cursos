export interface Adventure {
  id: string;
  name: string;
  description?: string;
  date?: string;
  image?: string;
}

export interface AdventureViewModel {
  name: string;
  description?: string;
  date?: string;
  image?: string;
}
