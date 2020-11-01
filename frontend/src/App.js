import './App.css';
import RecentProjects from './components/RecentProjects';
import videoSource from './components/media/video.mp4';

function App() {
  return (
    <div className="App">
      <div className="homepage">
        <video autoPlay muted loop className="video-background">
          <source src={videoSource} type="video/mp4" />
        </video>
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
