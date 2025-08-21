export default function Ajuda() {
  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <h2 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">Onde buscar ajuda</h2>

      <section>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-700 mb-3">
          🏛️ Delegacias Especializadas de Atendimento à Mulher (DEAMs)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Vitória:</strong> Rua 24 de Agosto, s/nº – Bairro Nossa Senhora de Fátima.</li>
          <li><strong>Vila Velha:</strong> Rua José de Anchieta, nº 1.</li>
          <li><strong>Serra:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Cariacica:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Viana:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Guarapari:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Aracruz:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>São Mateus:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Linhares:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Colatina:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Cachoeiro de Itapemirim:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Nova Venécia:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
          <li><strong>Venda Nova do Imigrante:</strong> Rua dos Três Irmãos, nº 100 – Bairro Laranjeiras.</li>
        </ul>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-700 mb-3">🏥 Hospitais de Referência</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Hospital Antônio Bezerra de Faria:</strong> (27) 3441-7001 / 99902-3848</li>
          <li><strong>Hospital Universitário Cassiano Antônio Moraes:</strong> (27) 3335-7000</li>
        </ul>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-700 mb-3">🏠 Casas de Acolhimento</h3>
        <p className="text-gray-700">
          Casa Abrigo Estadual “Maria Cândida Teixeira” - acolhimento sigiloso e temporário para mulheres e filhos menores de 14 anos em situação de risco iminente. Encaminhamentos por Delegacias e Centros de Referência.
        </p>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-700 mb-3">🧭 Centros de Referência da Mulher</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>CRAMSV – Vitória:</strong> Rua Francisco Rubim, 169 – Bento Ferreira, (27) 99873-6346</li>
          <li><strong>CRAMVIS – Serra:</strong> Rua Maestro Antônio Cícero, nº 79 – (27) 3328-7500</li>
        </ul>
      </section>

      <section>
        <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-700 mb-3">📞 Telefones úteis</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>180 – Central de Atendimento à Mulher</li>
          <li>190 – Polícia Militar</li>
          <li>181 – Disque Denúncia</li>
          <li>156 – Atendimento ao Cidadão</li>
        </ul>
      </section>

      <div className="mt-10">
        <iframe
          title="Mapa do Espírito Santo"
          src="https://www.google.com/maps/d/embed?mid=1E2ZdTdkMvAYrc-5Ym7NzfL8EERZQDVlR"
          className="w-full h-96 rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
