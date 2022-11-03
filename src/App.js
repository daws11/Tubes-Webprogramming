
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Card from './Component/Card';
import Formulir from './Component/Formulir';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Slider/>
        <p>Mau Pergi Kemana?</p>
        <Formulir/>
        <p>Berikut adalah trayek andalan kami</p>
        <Card/>
        <p>Perjalanan Anda</p>
        <p>Aman bersama kami</p>
       
    </div>
  );
}

export default App;
