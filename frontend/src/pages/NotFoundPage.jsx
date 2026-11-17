import { Link } from 'react-router'

// Page affichée quand l'adresse ne correspond à aucune page
export default function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">Cette page n'existe pas.</p>
      <Link to="/" className="mt-4 inline-block underline">Retour à l'accueil</Link>
    </div>
  )
}