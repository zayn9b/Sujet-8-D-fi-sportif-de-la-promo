import { Link, NavLink, useNavigate } from 'react-router'
import { Trophy } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { DiscordButton, UserAvatar } from './common'

// Style d'un lien du menu (surligné quand c'est la page active)
function navClass({ isActive }) {
  const base = 'rounded-md px-3 py-2 text-sm font-medium '
  return isActive
    ? base + 'bg-primary-foreground/10 text-primary-foreground'
    : base + 'text-primary-foreground/80 hover:text-primary-foreground'
}

// Menu affiché en haut de toutes les pages
export default function Header() {
  const { currentUser, login, logout } = useAuth()
  const navigate = useNavigate() // permet de changer de page depuis le code

  function handleLogout() {
    logout()
    navigate('/') // retour à l'accueil après la déconnexion
  }

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="mr-4 flex items-center gap-2 font-display text-xl font-bold uppercase">
          <Trophy className="h-6 w-6 text-accent" /> Défi Sportif
        </Link>

        {/* Liens */}
        <nav className="flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={navClass}>Accueil</NavLink>
          <NavLink to="/classement" className={navClass}>Classement</NavLink>
          {currentUser && (
            <NavLink to="/mes-activites" className={navClass}>Modifier</NavLink>
          )}
          {currentUser?.role === 'admin' && (
            <NavLink to="/admin" className={navClass}>Administration</NavLink>
          )}
        </nav>

        {/* Partie droite : connexion ou utilisateur connecté */}
        <div className="ml-auto flex items-center gap-3">
          {currentUser ? (
            <>
              <span className="flex items-center gap-2 text-sm font-medium">
                <UserAvatar user={currentUser} size={32} />
                <span className="hidden sm:inline">{currentUser.username}</span>
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:opacity-90"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <DiscordButton small onClick={() => login()} />
          )}
        </div>
      </div>
    </header>
  )
}