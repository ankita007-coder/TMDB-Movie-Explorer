import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      retry:1,
      staleTime:1000*60*5
    }
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient} >
      <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_CLIENT_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    ><App/>
      </Auth0Provider> 
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
     </BrowserRouter>
  </StrictMode>,
)
