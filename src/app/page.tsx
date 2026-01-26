/**
 * Main page - Portfolio single-page application
 * Placeholder structure - sections will be built in the next phase
 */
export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dewangga Praxindo
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            DeFi Smart Contract Engineer
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building secure, scalable protocols on Ethereum, Arbitrum, and Solana.
            $50M+ TVL deployed.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-muted-foreground">Section content coming soon…</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <p className="text-muted-foreground">Section content coming soon…</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Products</h2>
          <p className="text-muted-foreground">Section content coming soon…</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-muted-foreground">Section content coming soon…</p>
        </div>
      </section>
    </main>
  );
}
