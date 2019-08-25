import * as React from 'react';
import './styles/scss/App.scss';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';

const App: React.SFC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Welcome />
    </div>
  );
}

export default App;
