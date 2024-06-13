import './App.css';
import Slider from './component';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
      <Slider type={"Continuous"} subtype={"Range"}/>
    </div>
  );
}

export default App;
