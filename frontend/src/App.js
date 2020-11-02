import './App.css';
import RecentProjects from './components/RecentProjects';
import Homepage from './components/Homepage';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Homepage />
      <RecentProjects />
    </div>
  );
};

export default App;
