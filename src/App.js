import './components/assets/css/App.css'
import HeaderComponent from './components/HeaderComponent.js';
import SliderComponent from './components/SliderComponent.js';
import CenterComponent from './components/CenterComponent.js';
import FooterComponent from './components/FooterComponent.js';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <SliderComponent/>
      <CenterComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
