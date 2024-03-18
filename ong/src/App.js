import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Articles from './components/Articles/Articles';

function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Articles/>
      </div>
    </div>
    </>

  );
}

export default App;
