import Image from 'next/image';

const temas = [
  "Violência Física",
  "Violência Psicológica",
  "Violência Sexual",
  "Violência Patrimonial",
  "Violência Moral",
  "Assédio e perseguição",
  "Abandono e negligência",
  "Violência digital",
  "Rede de proteção",
];

export default function Home() {
  return (
    <section>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-md">
          Juntas Contra a Violência
        </h2>
        <p className="text-xl sm:text-2xl text-purple-700 font-medium">
          Informação, acolhimento e caminhos para uma vida sem violência.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/forca-feminina.jpg"
          alt="Força feminina"
          width={1200}
          height={400}
          className="object-cover w-full h-64 sm:h-96"
          priority
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {temas.map((tema) => (
          <Card key={tema} title={tema} />
        ))}
      </div>

      <ChatBot />
    </section>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition shadow-purple-300 p-6 flex flex-col items-center cursor-pointer select-none group">
      <div className="text-purple-600 mb-4 text-5xl group-hover:scale-110 transition-transform">
        {getIcon(title)}
      </div>
      <h3 className="text-lg font-semibold text-center text-purple-800">{title}</h3>
    </div>
  );
}

function getIcon(tema: string) {
  switch (tema) {
    case "Violência Física": return "👊";
    case "Violência Psicológica": return "🧠";
    case "Violência Sexual": return "🚫";
    case "Violência Patrimonial": return "🏠";
    case "Violência Moral": return "🗣️";
    case "Assédio e perseguição": return "🚶‍♀️";
    case "Abandono e negligência": return "❌";
    case "Violência digital": return "💻";
    case "Rede de proteção": return "🛡️";
    default: return "❓";
  }
}

function ChatBot() {
  return (
    <button
      aria-label="Chatbot de apoio"
      className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white p-4 rounded-full shadow-lg transition animate-pulse"
    >
      🤖
    </button>
  );
}
