import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
