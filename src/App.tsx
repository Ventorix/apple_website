import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <main className='overflow-y-auto bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
