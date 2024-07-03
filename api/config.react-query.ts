import { QueryClient } from '@tanstack/react-query';

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
