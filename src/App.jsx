
import './App.css'
import SearchProvider from './provider/SearchProvider'
import ImageProvider from './provider/ImageProvider'
import DownloadProvider from './provider/DownloadProvider'
import Page from './Page'
import UserProvider from './provider/UserProvider'

function App() {

  return (
    <UserProvider>
      <SearchProvider>
        <ImageProvider>
          <DownloadProvider>
            <Page />
          </DownloadProvider>
        </ImageProvider>
      </SearchProvider>
    </UserProvider>
  )
}

export default App
