import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import PotentialCandidates from './pages/PotentialCandidates.tsx'; // ✅ Fixed import
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // ✅ App remains a layout component
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // ✅ Default child route ("/")
        element: <CandidateSearch />,
      },
      {
        path: 'potential', // ✅ Corrected path
        element: <PotentialCandidates />, // ✅ Corrected component name
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
}
