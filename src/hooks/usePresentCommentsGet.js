import { useQuery } from "@tanstack/react-query";
import { getPresentComments } from "../services/presentAPI";
import { toast } from "react-toastify";

export default function usePresentCommentsGet() {
  const {
    data: comments,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["present-comments"],
    queryFn: () => getPresentComments(),
  });

  if (isError) {
    toast.error(error.response.data.message);
  }

  return { data: comments, isLoading };
}
