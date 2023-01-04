import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchHeader from './component/SearchHeader';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient()


function App() {
  return (
      // <QueryClientProvider client={queryClient}>
      //   <Outlet/>
      //   <Header />
      //   <ListOfVideos />
      // </QueryClientProvider>
      <>
        <SearchHeader/>
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet/>
          </QueryClientProvider>
        </YoutubeApiProvider>
      </>
  );
}

export default App;
