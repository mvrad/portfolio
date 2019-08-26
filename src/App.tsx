import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/scss/App.scss';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
