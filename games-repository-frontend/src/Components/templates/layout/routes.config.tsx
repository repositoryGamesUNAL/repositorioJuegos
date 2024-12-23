import { RouteConfig } from './layout.type';
import Home from '../../pages/Home'; 
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import GameForm from '../../pages/GameForm/GameForm';
import GameManager from '../../pages/GameForm/GameManager';
import GameList from '../../pages/GameList/GameList';
//import GameForm from '../../pages/GameForm2/gameForm';
//Importe componentes adicionales y adicione a la lista de rutas

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  /*
  {
    path: '/game/:action/:id?',
    element: <GameForm />
  },*/
  {
    path: '/game/create/:id?',
    element: (
      <>
        <img 
          style={{
            position: 'absolute',
            top: '250px',
            left: '20px',
            width: '80px',
            height: 'auto' // Si deseas que la altura se ajuste proporcionalmente
          }} 
          src="/roshi.png" 
          alt="" 
        />
        <GameForm key={2000} />
        <img 
          style={{
            position: 'absolute',
            top: '250px',
            right: '20px',
            width: '80px',
            height: 'auto' // Si deseas que la altura se ajuste proporcionalmente
          }} 
          src="/navidad.jpg" 
          alt="" 
        />
      </>)
  },
  {
    path: '/game/edit/:id?',
    element: <GameManager key={2001} />
  },
  {
    path: '/game/:action/:id?',
    element: (<GameForm key={129492}/>)
  },
  {
    "path": "/games",
    element: <GameList />
  }
];