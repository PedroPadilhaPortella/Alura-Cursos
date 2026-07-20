export interface IBook {
  id: string;
  title: string;
  author: string;
  favorite: boolean;
  image: string;
  genreId: string;
}

export interface IBookGenre {
  id: string;
  value: string;
  backgroundColor: string;
  highlightColor: string;
}