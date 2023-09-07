import { HeroesApp } from '../HeroesApp';
// import { MarvelPage } from '../heroes/pages/MarvelPage';
// import { DcPage } from '../heroes/pages/DcPage';
import { LoginPage } from '../auth';
import { Navigate } from 'react-router-dom';
import { DcPage, MarvelPage, HeroPage, SearchPage} from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const routesConfig = [
  {
    path: '/',
    element: <PrivateRoute> <HeroesApp /> </PrivateRoute>,
    children: [
      {
        path: '/dc',
        element: <DcPage />
      },
      {
        path: '/marvel',
        element: <MarvelPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/hero/:id',
        element: <HeroPage />
      }
    ],
  },
  {
    path: '/login',
    element: <PublicRoute> <LoginPage /> </PublicRoute>
  },
  {
    path: '/*',
    element: <Navigate to={'/marvel'} />
  }
];