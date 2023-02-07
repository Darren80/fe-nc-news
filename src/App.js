import logo from './logo.svg';
import './App.css';
import ArticleCard from './components/ArticleCard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ArticleCard/>
      </header>
    </div>
  );
}

export default App;
