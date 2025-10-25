import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>CS2 Tournament Predictor</h1>
        <p className='text-muted-foreground'>Make your predictions and compete!</p>
        <Button onClick={() => alert('Hello!')}>Get Started</Button>
      </div>
    </div>
  );
}

export default App;
