
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Card from './Component/Card';
import Formulir from './Component/Formulir';
import Hero from './Component/Hero';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Slider/>
        <p>Mau Pergi Kemana?</p>
        <Formulir/>
        <p>Berikut adalah trayek andalan kami</p>
        <Card/>
       <Hero/>
       <Footer/>
       
    </div>
  );
}

export default App;
