import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import ArtistDetail from './pages/ArtistDetail'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<ArtistDetail />} />
        <Route path="/series" element={<ComingSoon title="Series" />} />
        <Route path="/archive" element={<ComingSoon title="Archive" />} />
      </Routes>
    </BrowserRouter>
  )
}
