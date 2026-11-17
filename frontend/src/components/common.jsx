// Petits composants réutilisables

// Avatar rond.
// Si l'utilisateur a une image, on l'affiche ; sinon, l'initiale de son pseudo.
export function UserAvatar({ user, size = 40 }) {
  const style = { width: size, height: size }

  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt={`Avatar de ${user.username}`}
        style={style}
        className="rounded-full border-2 border-border bg-muted object-cover"
      />
    )
  }

  return (
    <span
      style={style}
      className="inline-flex items-center justify-center rounded-full bg-accent font-bold uppercase text-accent-foreground"
    >
      {user.username[0]}
    </span>
  )
}

// Icône de bulle de discussion (pas le logo officiel Discord)
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 6h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-1l-2 2-2-2H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Zm2 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  )
}

// Bouton "Se connecter avec Discord".
// small = version plus petite (pour le menu).
// ...props = toutes les autres propriétés (onClick...) transmises au <button>.
export function DiscordButton({ small = false, ...props }) {
  const sizeClass = small ? 'h-9 px-3 text-sm' : 'h-11 px-6'

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded-lg bg-discord font-semibold text-discord-foreground hover:opacity-90 ${sizeClass}`}
      {...props}
    >
      <ChatIcon /> Se connecter avec Discord
    </button>
  )
}