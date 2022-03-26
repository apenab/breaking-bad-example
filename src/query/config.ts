import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axios.get(
          `https://www.breakingbadapi.com/api/${queryKey[0]}`
        );
        return data;
      },
      refetchOnWindowFocus: false,
    },
  },
});
