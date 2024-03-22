import * as Sentry from '@sentry/react';
import Features from './components/Features';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='overflow-y-auto bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default Sentry.withProfiler(App);
