import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './models/category.model';

const categories = [
  {
    id: 'camisetas',
    displayName: 'Camisetas',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/camiseta.png',
  },
  {
    id: 'bolsas',
    displayName: 'Bolsas',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/bolsa.png',
  },
  {
    id: 'calcados',
    displayName: 'Calçados',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calcados.png',
  },
  {
    id: 'calcas',
    displayName: 'Calças',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calca.png',
  },
  {
    id: 'casacos',
    displayName: 'Casacos',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/casacos.png',
  },
  {
    id: 'oculos',
    displayName: 'Óculos',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/oculos.png',
  },
];

@Resolver(() => Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return categories;
  }
}
