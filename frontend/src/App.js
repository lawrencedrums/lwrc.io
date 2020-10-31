import './App.css';
import RecentProjects from './components/RecentProjects'

function App() {
  return (
    <div className="App">
      <div className="LandingPage">
        <h1>Lawrence Wong</h1>
        <p>You are not my friend, you're my brother, my friend.</p>
      </div>
      <div className="RecentProjects">
        <h2>My recent projects:</h2>
        <RecentProjects />
      </div>
    </div>
  );
};

export default App;
