import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';

export default function PokemonPage() {
  const [search, setSearch] = useState('');
  const { pokemon, loading, error, search: searchPokemon, random } = usePokemon();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) searchPokemon(search.trim());
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Pokemon Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="ค้นหาโปเกมอน เช่น pikachu"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" disabled={loading}>ค้นหา</button>
      </form>

      <button onClick={random} disabled={loading} style={{ marginBottom: 24, padding: '8px 16px' }}>
        🎲 สุ่มโปเกมอน
      </button>

      {loading && <p>กำลังโหลด...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && (
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 24 }}>
          <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
          <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
