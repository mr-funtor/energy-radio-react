import HeroSection from './components/HeroSection';
import EpisodeSection from './components/EpisodeSection';
import ConnectSection from './components/ConnectSection';
import FooterSection from './components/FooterSection';
import './Main.css';

function App() {
  return (
    <main class="body-container">
		<HeroSection/>
		<EpisodeSection/>
		<ConnectSection/>
		<FooterSection/>
    </main>
  );
}

export default App;
