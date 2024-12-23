import { RouteConfig } from './layout.type';
import Home from '../../pages/Home'; 
import About from '../../pages/About';
import Contact from '../../pages/Contact';
//import GameForm from '../../pages/GameForm/GameForm';
import GameForm from '../../pages/GameForm2/gameForm';
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
    path: '/game/:action/:id?',
    element: <GameForm />
  }
];