import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/templates/layout/layout';
import { routes } from './Components/templates/layout/routes.config'; // Importamos las rutas dinámicas


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;