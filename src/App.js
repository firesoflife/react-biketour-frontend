import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './leaflet/leaflet.css';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import RaceMap from './pages/RaceMap.jsx';
import RacerProfiles from './pages/RacerProfiles';
import SingleRacerProfile from './pages/SingleRacerProfile';
import ImagePage from './pages/ImagePage';
import ContestForm from './pages/ContestForm';
import ContestSubmissions from './pages/ContestSubmissions';
import MobileNav from './components/MobileNav';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='App'>
      <Navbar toggle={toggle} />
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/map' exact component={RaceMap} />
        <Route path='/racers' exact component={RacerProfiles} />
        <Route
          path='/racers/profile/:id'
          exact
          component={SingleRacerProfile}
        />
        <Route path='/gallery' exact component={ImagePage} />
        <Route path='/contest' exact component={ContestForm} />
        <Route path='/submissions' exact component={ContestSubmissions} />
      </Switch>
    </div>
  );
}

export default App;
