import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState(''); // Estado para o valor da pesquisa

  const handleSearch = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    console.log('Pesquisando por:', query); // Apenas exibe a pesquisa no console
  };

  return (
    <div>
      <h1>Caixa de Pesquisa</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Atualiza o valor conforme o usuário digita
          placeholder="Digite sua pesquisa"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}
