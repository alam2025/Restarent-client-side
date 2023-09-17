import { useQuery } from "@tanstack/react-query";
import useUrl from "./URL/UseUrl"

const useCategory = () => {
      const [url] = useUrl();
      const { data: allCategories = [], isLoading: isCategoryLoading } = useQuery({
            queryKey: ['category'],
            queryFn: async () => {
                  const res = await fetch(`${url}/category`);
                  return res.json()
            }
      })
      
      return [allCategories,isCategoryLoading]
}

export default useCategory