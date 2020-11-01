import './App.css';
import RecentProjects from './components/RecentProjects'

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <div className="home-title">
          <h1>Lawrence Wong</h1>
          <p>You are not my friend, you're my brother, my friend.</p>
        </div>
      </div>
      <RecentProjects />
    </div>
  );
};

export default App;
