import SearchBar from './SearchBar';
import GameForm from './GameForm';
import { useParams } from 'react-router-dom';

const GameManager = () => {

  const {id} = useParams();

  if(id) {
    return (
      <div>
        <GameForm  />
      </div>
    );
  }

  return (
    <div>
      <SearchBar />

    </div>
  );
};

export default GameManager;
