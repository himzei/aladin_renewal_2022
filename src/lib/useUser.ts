import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";

export default function useUser() {
  const { isLoading, data } = useQuery(["me"], getMe);
  return {
    userLoading: isLoading,
    user: data,
  };
}
