import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import ChatBot from '../components/ChatBot'

const temas = [
  'Violência Física',
  'Violência Psicológica',
  'Violência Sexual',
  'Violência Patrimonial',
  'Violência Moral',
  'Assédio e perseguição',
  'Abandono e negligência',
  'Violência digital',
  'Rede de proteção'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Juntas Contra a Violência</title>
      </Head>
      <main className="bg-purple-50 min-h-screen text-gray-800 font-sans">
        <section className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-700">Juntas Contra a Violência</h1>
          <p className="text-xl mt-2 text-purple-900">Informação, acolhimento e caminhos para uma vida sem violência.</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/banner.jpg" alt="Banner força feminina" width={600} height={300} className="rounded-lg shadow" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {temas.map((tema, index) => (
            <Card key={index} title={tema} />
          ))}
        </section>

        <ChatBot />
      </main>
    </>
  )
}

