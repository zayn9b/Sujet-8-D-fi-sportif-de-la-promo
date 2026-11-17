import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold uppercase">Défi Sportif</h1>
      </header>

      <main className="p-8 space-y-6">
        <h2 className="text-4xl font-bold uppercase">Le podium</h2>
        <p className="text-muted-foreground">Texte secondaire en gris (police Barlow).</p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-lg bg-accent text-accent-foreground px-4 py-2 font-medium">Accent</span>
          <span className="rounded-lg bg-discord text-discord-foreground px-4 py-2 font-medium">Discord</span>
          <span className="rounded-lg bg-destructive text-destructive-foreground px-4 py-2 font-medium">Supprimer</span>
          <span className="h-10 w-10 rounded-full bg-gold" />
          <span className="h-10 w-10 rounded-full bg-silver" />
          <span className="h-10 w-10 rounded-full bg-bronze" />
        </div>

        <div className="bg-card rounded-xl shadow-card p-6">Une carte avec ombre</div>
        <div className="bg-hero rounded-xl p-6 text-white">Dégradé de la page d'accueil</div>
      </main>
    </div>
  )
}


export default App
