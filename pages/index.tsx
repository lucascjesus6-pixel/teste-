<main className="bg-gradient-to-b from-purple-100 via-purple-50 to-white min-h-screen text-gray-800 font-sans">
  <section className="text-center p-10 max-w-4xl mx-auto">
    <h1 className="text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-lg">Juntas Contra a Violência</h1>
    <p className="text-xl md:text-2xl text-purple-900 mb-8">Informação, acolhimento e caminhos para uma vida sem violência.</p>
    <div className="mx-auto max-w-xl rounded-lg overflow-hidden shadow-2xl">
      <Image src="/images/banner.jpg" alt="Banner força feminina" width={600} height={300} className="object-cover" />
    </div>
  </section>

  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
    {temas.map((tema, index) => (
      <Card key={index} title={tema} />
    ))}
  </section>

  <ChatBot />
</main>

