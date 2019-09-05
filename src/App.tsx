import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/scss/App.scss';
import MobileNav from './components/MobileNav';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import AlphaAI from './components/AlphaAI';
import Thinkspace from './components/Thinkspace';

const App: React.FC = () => {
  return (
    <div className="App">
      <MobileNav />
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/alpha" component={AlphaAI} />
          <Route exact path="/thinkspace" component={Thinkspace} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
