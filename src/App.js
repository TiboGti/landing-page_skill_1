import logo from './logo.svg';
import Navbar from './components/nabvar';
import Hero from './components/hero'
import './App.css'
import Cards from './components/cards'
import Sectart from './components/SectionArt'





function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <section>
          <Cards/>
        </section>
        <section>
        <Sectart/>
        </section>
        

      </main>
      
    </div>
  );
}

export default App;
