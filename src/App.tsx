import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from './routes';
import './App.css';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen w-screen p-4'>
        <Routes />
      </div>
    </QueryClientProvider>
  )
}

export default App
