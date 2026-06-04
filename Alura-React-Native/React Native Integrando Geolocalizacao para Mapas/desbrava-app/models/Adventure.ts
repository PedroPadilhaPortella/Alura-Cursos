export interface Adventure {
  id: string;
  name: string;
  description?: string;
  date?: string;
  image?: string;
  location?: Location;
}

export interface AdventureViewModel {
  name: string;
  description?: string;
  date?: string;
  image?: string;
  location?: Location;
}


interface Location {
  address: string;
  latitude: number;
  longitude: number;
}