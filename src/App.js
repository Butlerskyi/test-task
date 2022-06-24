import ComponentWrapper from './components/ComponentWrapper/ComponentWrapper';
import PlayersBlock from './components/PlayersBlock/PlayersBlock';
import TeamsBlock from './components/TeamsBlock/TeamsBlock';

import './App.css';

function App() {
  return (
    <div className="App">
      <ComponentWrapper>
        <h1 className="title">NBA profile</h1>
        <TeamsBlock/>
        <PlayersBlock/>
      </ComponentWrapper>
    </div>
  );
}

export default App;
