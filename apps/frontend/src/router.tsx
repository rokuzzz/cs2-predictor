import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/HomePage';
import { PredictionsPage } from '@/pages/PredictionsPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage';
import { LeaguesPage } from '@/pages/LeaguesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'predictions',
        element: <PredictionsPage />,
      },
      {
        path: 'leaderboard',
        element: <LeaderboardPage />,
      },
      {
        path: 'leagues',
        element: <LeaguesPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
