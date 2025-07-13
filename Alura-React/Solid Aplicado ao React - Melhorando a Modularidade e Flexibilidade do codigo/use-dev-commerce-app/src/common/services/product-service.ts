import { PRODUCTS_BASE_URL } from "../constants/endpoints";
import { IHttp } from "../interfaces/http.interface";
import { IProductService } from "../interfaces/product-service.interface";
import { Product } from '../types/product';

const ProductService = (http: IHttp): IProductService => {
  return {
    fetchProducts: async () => {
      try {
        const response = await http.get<{ products: Product[] }>(PRODUCTS_BASE_URL);
        return response.products;
      } catch (error) {
        throw new Error(`Erro ao buscar produtos, ${error}`);
      }
    }
  };
}

export default ProductService;