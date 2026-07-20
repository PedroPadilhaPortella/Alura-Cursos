import { IBook } from "../models";

export const booksMock: IBook[] = [
  // Literatura - azul
  { id: 'b1', title: 'As ondas', author: 'Virginia Woolf', favorite: false, genreId: 'literatura', image: 'https://placehold.co/128x184/1e3a5f/ffffff?text=As+ondas' },
  { id: 'b2', title: 'Dom Casmurro', author: 'Machado de Assis', favorite: false, genreId: 'literatura', image: 'https://placehold.co/128x184/1e3a5f/ffffff?text=Dom+Casmurro' },
  { id: 'b3', title: 'Grande Sertão: Veredas', author: 'Guimarães Rosa', favorite: false, genreId: 'literatura', image: 'https://placehold.co/128x184/1e3a5f/ffffff?text=Grande+Sertao' },
  { id: 'b5', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', favorite: false, genreId: 'literatura', image: 'https://placehold.co/128x184/1e3a5f/ffffff?text=Bras+Cubas' },

  // Poesia - verde
  { id: 'b6', title: 'Canções', author: 'Cecília Meireles', favorite: false, genreId: 'poesia', image: 'https://placehold.co/128x184/4a7c3f/ffffff?text=Cancoes' },
  { id: 'b8', title: 'Antologia Poética', author: 'Vinicius de Moraes', favorite: true, genreId: 'poesia', image: 'https://placehold.co/128x184/4a7c3f/ffffff?text=Antologia+Poetica' },
  { id: 'b9', title: 'Claro Enigma', author: 'Carlos Drummond de Andrade', favorite: false, genreId: 'poesia', image: 'https://placehold.co/128x184/4a7c3f/ffffff?text=Claro+Enigma' },
  { id: 'b10', title: 'Romanceiro da Inconfidência', author: 'Cecília Meireles', favorite: false, genreId: 'poesia', image: 'https://placehold.co/128x184/4a7c3f/ffffff?text=Romanceiro' },

  // Biografias - rosa
  { id: 'b12', title: 'Steve Jobs', author: 'Walter Isaacson', favorite: false, genreId: 'biografias', image: 'https://placehold.co/128x184/c2185b/ffffff?text=Steve+Jobs' },
  { id: 'b13', title: 'Uma Autobiografia', author: 'Charlie Chaplin', favorite: true, genreId: 'biografias', image: 'https://placehold.co/128x184/c2185b/ffffff?text=Chaplin' },
  { id: 'b15', title: 'A Vida por um Fio', author: 'Ayrton Senna', favorite: false, genreId: 'biografias', image: 'https://placehold.co/128x184/c2185b/ffffff?text=Ayrton+Senna' },

  // Mitos e Lendas - roxo
  { id: 'b16', title: 'Abecedário do Folclore Brasileiro', author: 'Câmara Cascudo', favorite: false, genreId: 'mitos-lendas', image: 'https://placehold.co/128x184/6a1b9a/ffffff?text=Folclore' },
  { id: 'b17', title: 'Mitologia Grega', author: 'Pierre Grimal', favorite: false, genreId: 'mitos-lendas', image: 'https://placehold.co/128x184/6a1b9a/ffffff?text=Mitologia+Grega' },
  { id: 'b18', title: 'Lendas Nórdicas', author: 'Neil Gaiman', favorite: true, genreId: 'mitos-lendas', image: 'https://placehold.co/128x184/6a1b9a/ffffff?text=Lendas+Nordicas' },
  { id: 'b20', title: 'O Livro das Mil e Uma Noites', author: 'Anônimo', favorite: false, genreId: 'mitos-lendas', image: 'https://placehold.co/128x184/6a1b9a/ffffff?text=Mil+e+Uma+Noites' },
];