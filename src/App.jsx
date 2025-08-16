
import { useState } from 'react'
import './App.css'
import CreateImage from './components/CreateImage'
import Header from './components/Header'
import Download from './components/Download'
import Glow from './components/Glow'
import SearchProvider from './provider/SearchProvider'
import ImageProvider from './provider/ImageProvider'

function App() {
  const [page, setPage] = useState("create")

  return (
    <SearchProvider>
      <ImageProvider>
        <div className="container mx-auto px-4 py-8 max-w-6xl bg-[linear-gradient(135deg,_#0f0f0f_0%,_#1a0b2e_100%)]">
          <Header setPage={setPage} />
          <Glow />
          {page === "create" ? <CreateImage /> : <Download />}
        </div>
      </ImageProvider>
    </SearchProvider>
  )
}

export default App
