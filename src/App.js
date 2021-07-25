import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';

import './styles/styles.scss';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Graphs from './routes/Graphs';
import Settings from './routes/Settings';
import Help from './routes/Help';
import Login from './routes/Login';
import Header from './components/Header';
import Nav from './components/nav/index';
import Swiper from 'swiper';

function App() {
  return (
    <div className={'App ' + (isBrowser ? 'App--desktop' : '')}>
      <Router>
        <Header></Header> 
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/graphs" component={ Graphs }/>
          <Route exact path="/settings" component={ Settings }/>
          <Route exact path="/help" component={ Help }/>
          <Route exact path="/login " component={ Login }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
