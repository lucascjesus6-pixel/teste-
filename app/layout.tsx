export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>Juntas Contra a Violência</title>
        <meta name="description" content="Informação, acolhimento e caminhos para uma vida sem violência." />
      </head>
      <body className="bg-gradient-to-b from-purple-50 to-white text-gray-900 font-sans min-h-screen flex flex-col">
        <header className="bg-purple-700 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">Juntas Contra a Violência</h1>
            <nav>
              <ul className="flex gap-6 text-sm sm:text-base font-semibold">
                <li><a href="/" className="hover:text-purple-300 transition">Início</a></li>
                <li><a href="/ajuda" className="hover:text-purple-300 transition">Onde buscar ajuda</a></li>
                <li><a href="/acolhimento" className="hover:text-purple-300 transition">Acolhimento</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4 sm:p-8">
          {children}
        </main>
        <footer className="bg-purple-700 text-white text-center p-4 mt-8">
          <small>© 2025 Juntas Contra a Violência - Todos os direitos reservados.</small>
        </footer>
      </body>
    </html>
  );
}
