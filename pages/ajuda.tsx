import Head from 'next/head'

export default function Ajuda() {
  return (
    <>
      <Head>
        <title>Onde Buscar Ajuda</title>
      </Head>
      <main className="p-6 text-gray-800 bg-white">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Onde buscar ajuda</h1>

        <section className="space-y-6">
          <div>
            <h2 className="font-bold text-xl">🏛️ Delegacias Especializadas de Atendimento à Mulher</h2>
            <ul className="list-disc ml-6 text-sm">
              <li><strong>Vitória:</strong> Rua 24 de Agosto, s/nº – Bairro Nossa Senhora de Fátima</li>
              <li><strong>Vila Velha:</strong> Rua José de Anchieta, nº 1</li>
              <li>... e demais cidades</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl">🏥 Hospitais de Referência</h2>
            <p><strong>Hospital Antônio Bezerra de Faria:</strong> (27) 3441-7001</p>
            <p><strong>Hospital Universitário Cassiano A. Moraes:</strong> (27) 3335-7000</p>
          </div>

          <div>
            <h2 className="font-bold text-xl">📞 Telefones úteis</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>180 – Central de Atendimento à Mulher</li>
              <li>190 – Polícia Militar</li>
              <li>181 – Disque Denúncia</li>
              <li>156 – Atendimento ao Cidadão</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

