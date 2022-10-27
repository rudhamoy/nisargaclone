import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Layout from './components/Layout';
import Services from './components/Services';

function App() {
  return (
    <div className=''>
      <Layout>
        <Hero />
        <Intro />
        <Services />
      </Layout>
    </div>
  );
}

export default App;
