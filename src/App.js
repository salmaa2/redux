import './App.css';
import Addtask from './components/Addtask';
import Listtask from './components/Listtask';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Comic Sans MS' }} >
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
