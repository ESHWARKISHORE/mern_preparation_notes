import './App.css'
import Hooks from './7thJulyPractice/hooks'
import July10practice from './10thJulyPractice'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient(); 

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
    {/* <Hooks/> */}
    <July10practice/>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App
