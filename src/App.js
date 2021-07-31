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
import ImagePage from './pages/ImagePage';
import ContestForm from './pages/ContestForm';
import ContestSubmissions from './pages/ContestSubmissions';

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
				<Route path='/gallery' exact component={ImagePage} />
				<Route path='/contest' exact component={ContestForm} />
				<Route path='/submissions' exact component={ContestSubmissions} />
			</Switch>
		</div>
	);
}

export default App;
