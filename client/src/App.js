import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route element={<Main/>} path="/home" default /> 
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
