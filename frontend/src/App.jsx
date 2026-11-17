import { BrowserRouter, Routes, Route } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LeaderboardPage from './pages/LeaderboardPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    // AuthProvider entoure tout : chaque composant peut savoir qui est connecté
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/classement" element={<LeaderboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App