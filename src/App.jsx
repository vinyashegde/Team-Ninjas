import "./App.css";
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
