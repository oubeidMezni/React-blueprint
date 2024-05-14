import './App.css';
import Competitions from './components/Competitions';
import Home from './components/Home';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import CompetitionDetails from './components/CompetitionsDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Competitions" element={<Competitions />} />
          <Route path='/CompetitionDetails/:id' element={<CompetitionDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
