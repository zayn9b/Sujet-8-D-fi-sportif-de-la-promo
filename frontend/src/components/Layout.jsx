import { Outlet } from 'react-router'
import Header from './Header'
import DevSwitcher from './DevSwitcher'

// Cadre commun à toutes les pages : menu en haut, page en dessous
export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Outlet = l'endroit où s'affiche la page en cours */}
        <Outlet />
      </main>

      {/* Outil de démo : visible seulement en développement (npm run dev).
      À SUPPRIMER quand la connexion Discord fonctionnera. */}
      {import.meta.env.DEV && <DevSwitcher />}
    </div>
  )
}