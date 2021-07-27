import { Switch, Route } from 'react-router-dom';
import './App.scss';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import RaceMap from './pages/RaceMap.jsx';
import RacerProfiles from './pages/RacerProfiles';
import SingleRacerProfile from './pages/SingleRacerProfile';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/map' exact component={RaceMap} />
				<Route path='/racers' exact component={RacerProfiles} />
				<Route
					path='/racers/profile/:id'
					exact
					component={SingleRacerProfile}
				/>
			</Switch>
		</div>
	);
}

export default App;
