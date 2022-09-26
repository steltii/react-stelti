import Navbar from './Navbar'
import Home from './Home';
import Carousel from './Carousel';
import Footer from './Footer';
import Hero from './Hero';

function App() {
  const author = "Juhani 'Stelti' Koski"

  return (
    <div className="App">
      <Navbar />
      <div id="content">
        <Home /> 
        <Carousel />
        <Hero />
        <Footer author={author} />
      </div>
    </div>
  );
}

export default App;
