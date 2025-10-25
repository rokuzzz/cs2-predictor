import { Link, Outlet } from 'react-router-dom';
import { Button } from './ui/button';

export function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <header className='border-b'>
        <div className='container mx-auto px-8 h-16 flex items-center justify-between'>
          <Link to='/' className='text-xl font-bold'>
            CS2 Predictor
          </Link>

          <nav className='flex gap-6'>
            <Link to='/predictions'>
              <Button variant='ghost'>Predictions</Button>
            </Link>
            <Link to='/leaderboard'>
              <Button variant='ghost'>Leaderboard</Button>
            </Link>
            <Link to='/leagues'>
              <Button variant='ghost'>Leagues</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
}
