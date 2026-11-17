import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LeaderboardPage from './pages/LeaderboardPage'
import NotFoundPage from './pages/NotFoundPage'

// Liste des pages du site : à chaque adresse, son composant
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Toutes ces pages sont affichées à l'intérieur du Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/classement" element={<LeaderboardPage />} />
          {/* "*" = toute adresse qui ne correspond à rien au-dessus */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App