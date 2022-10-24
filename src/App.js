
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Hero from './Component/Hero';
import Fitur from './Component/Fitur';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Slider/>
        <Fitur/>
        <Hero/>
        <Footer/>
    </div>
  );
}

export default App;
