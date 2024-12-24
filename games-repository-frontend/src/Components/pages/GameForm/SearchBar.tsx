import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/input/';
import Button from '../../atoms/button/';
import styles from './SearchBar.module.scss';
import axios from 'axios';

const SearchBar = () => {
  const [searchId, setSearchId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchId.trim()) {
      setErrorMessage('Por favor, ingresa un ID válido.');
      return;
    }
    setErrorMessage('');
    try {
      const response = await axios.get(`http://localhost:3000/games/${searchId}`);
      if (response.status === 200) {
        console.log(response.status);
        navigate(`/game/edit/${searchId}`);
      } else {
        setErrorMessage('No se encontró un juego con ese ID.');
      }
    } catch (error) {
      setErrorMessage('No se encontró un juego con ese ID.');
    }
  };

  return (
    <div className={styles.searchBar}>
      <Input
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Buscar por ID"
        className={styles.searchInput}
      />
      <Button onClick={handleSearch} className={styles.searchButton}>
        Buscar
      </Button>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
