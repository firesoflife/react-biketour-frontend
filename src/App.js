import { Switch, Route } from 'react-router-dom';
import './App.scss';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import RaceMap from './pages/RaceMap.jsx';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/map' exact component={RaceMap} />
			</Switch>
		</div>
	);
}

export default App;
