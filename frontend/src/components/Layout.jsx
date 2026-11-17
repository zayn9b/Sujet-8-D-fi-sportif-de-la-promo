import { NavLink, Outlet } from 'react-router'

// Style d'un lien du menu.
// NavLink nous donne isActive = true quand on est sur la page du lien.
function navClass({ isActive }) {
  const base = 'rounded-md px-3 py-2 text-sm font-medium '
  return isActive
    ? base + 'bg-primary-foreground/10 text-primary-foreground'
    : base + 'text-primary-foreground/80 hover:text-primary-foreground'
}

// Cadre commun à toutes les pages : menu en haut, page en dessous
export default function Layout() {
  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <nav className="mx-auto flex max-w-6xl gap-1 px-4 py-3">
          <NavLink to="/" end className={navClass}>Accueil</NavLink>
          <NavLink to="/classement" className={navClass}>Classement</NavLink>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Outlet = l'endroit où s'affiche la page en cours */}
        <Outlet />
      </main>
    </div>
  )
}