import './App.css';
import RecentProjects from './components/RecentProjects';
import Homepage from './components/Homepage';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Features />
      <RecentProjects />
    </div>
  );
};

export default App;
