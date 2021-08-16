import logo from './logo.svg';
import Navbar from './components/nabvar';
import Hero from './components/hero'
import './App.css'



function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
      </main>
      
    </div>
  );
}

export default App;
