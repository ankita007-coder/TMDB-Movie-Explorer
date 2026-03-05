import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "../api/movieService";

export const usePersonDetails = (id?: string) => {
  return useQuery({
    queryKey: ["personDetails", id],
    queryFn: () => getPersonDetails(id!),
    enabled: !!id,
  });
};