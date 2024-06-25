import logo from './logo.svg';
import './App.css';
import GptScreen from './Components/GptScreen';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/gpt" element={<GptScreen/>}/>
          <Route path="/register" element = {<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
