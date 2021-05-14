import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, DebotsList, DebotPage } from 'src/components';
import './index.scss';

const App = () => {
	return (
		<div className='app-container'>
			<Header />
			<div className='app-container__flex-wrapper'>
				<Switch>
					<Route exact path='/' component={DebotsList} />
					<Route path='/debot' component={DebotPage} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
