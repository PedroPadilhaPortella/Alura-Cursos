import { useEffect, useState } from "react";
import { Category } from "../types/category";
import { ICategoryService } from "../interfaces/category-service.interface";

const useFetchCategories = (categoryService: ICategoryService) => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);

        const response = await categoryService.fetchCategories();
        setCategories(response);

        setIsLoading(false);
      } catch (error) {
        setError(`Erro ao buscar categorias, ${error}`);
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, [categoryService]);

  return { categories, error, isLoading };
}

export default useFetchCategories;