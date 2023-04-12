import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const AllTheProviders: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
