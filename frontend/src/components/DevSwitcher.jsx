import { useAuth } from '../context/AuthContext'

// Outil de démonstration, à supprimer quand la connexion Discord marchera :
// permet de passer de "déconnecté" à "utilisateur" ou "admin".
export default function DevSwitcher() {
  const { currentUser, login, logout } = useAuth()

  // Valeur actuelle de la liste : "off", "user" ou "admin"
  const value = currentUser ? currentUser.role : 'off'

  function handleChange(event) {
    const choice = event.target.value
    if (choice === 'off') {
      logout()
    } else {
      login(choice)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-xs shadow-card">
      <span className="font-semibold">Démo</span>
      <select value={value} onChange={handleChange} className="rounded border px-1 py-0.5">
        <option value="off">Déconnecté</option>
        <option value="user">Utilisateur</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  )
}