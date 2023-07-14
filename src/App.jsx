import './App.css'
import Home from './components/Home'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus:false
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
