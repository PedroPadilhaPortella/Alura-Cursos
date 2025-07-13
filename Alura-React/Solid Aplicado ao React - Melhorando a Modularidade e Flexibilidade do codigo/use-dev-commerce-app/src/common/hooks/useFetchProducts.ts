import { useEffect, useState } from "react";
import { IProductService } from "../interfaces/product-service.interface";
import { Product } from "../types/product";

const useFetchProducts = (productService: IProductService) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const response = await productService.fetchProducts();
        setProducts(response);

        setIsLoading(false);
      } catch (error) {
        setError(`Erro ao buscar produtos, ${error}`);
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [productService]);

  return { products, error, isLoading };
}

export default useFetchProducts;