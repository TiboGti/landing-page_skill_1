import logo from './logo.svg';
import Navbar from './components/nabvar';
import Hero from './components/hero'
import './App.css'
import Cards from './components/cards'
import Sectart from './components/SectionArt'
import Membership from './components/membership'
import Flye from './components/fly'
import Gallery from './components/gallery';




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
        <section>
          <Membership/>
        </section>
        <section>
          <Flye/>
        </section>
        <section>
          <Gallery/>
        </section>
      </main>
      
    </div>
  );
}

export default App;
