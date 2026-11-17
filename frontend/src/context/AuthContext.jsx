// Connexion SIMULÉE pour la démo.
// Sera remplacée par la vraie connexion Discord (tâche auth-discord).
import { createContext, useContext, useState } from 'react'

// Deux comptes de démonstration
const DEMO_USERS = {
  user: { id: '1', username: 'maxime.b', avatarUrl: null, role: 'user' },
  admin: { id: '2', username: 'ines.swim', avatarUrl: null, role: 'admin' },
}

// La "boîte" partagée
const AuthContext = createContext(null)

// Fournit la boîte à tous les composants qu'il entoure
export function AuthProvider({ children }) {
  // currentUser = l'utilisateur connecté (null = personne)
  const [currentUser, setCurrentUser] = useState(null)

  // type = "user" ou "admin"
  function login(type = 'user') {
    setCurrentUser(DEMO_USERS[type])
  }

  function logout() {
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Raccourci pour ouvrir la boîte depuis un composant
export function useAuth() {
  return useContext(AuthContext)
}