import { RouteConfig } from './layout.type';
import Home from '../../pages/Home'; 
import About from '../../pages/About';
import Contact from '../../pages/Contact';
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
  }
];