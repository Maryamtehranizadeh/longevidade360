import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./config/reactQuery";

const queryClient = new QueryClient({
  defaultOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Toaster position="top-right" reverseOrder={true} />
          <Router />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
